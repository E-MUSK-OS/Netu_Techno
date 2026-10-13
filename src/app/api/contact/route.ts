import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { saveContactLead } from "@/lib/db/client";
import { sendContactNotification } from "@/lib/email/mailer";

// In-memory rate limiting map: ip -> array of submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP determination for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON body safely
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 3. Honeypot check (Spam protection)
    if (body._honeyPot && String(body._honeyPot).trim().length > 0) {
      // Quietly reject automated bots
      return NextResponse.json(
        { success: true, message: "Your enquiry has been received." },
        { status: 200 }
      );
    }

    // 4. Validate schema
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parseResult.data;

    // 5. Sanitize inputs (prevent XSS / unwanted injection in emails and DB)
    const sanitizedData = {
      fullName: data.fullName.replace(/[<>]/g, "").trim(),
      workEmail: data.workEmail.trim().toLowerCase(),
      service: data.service,
      projectDescription: data.projectDescription.replace(/[<>]/g, "").trim(),
      companyName: data.companyName ? data.companyName.replace(/[<>]/g, "").trim() : undefined,
      phone: data.phone ? data.phone.trim() : undefined,
      budget: data.budget || undefined,
      timeline: data.timeline || undefined,
    };

    // 6. Persist to Database if configured
    const dbResult = await saveContactLead({
      name: sanitizedData.fullName,
      email: sanitizedData.workEmail,
      company: sanitizedData.companyName,
      phone: sanitizedData.phone,
      service: sanitizedData.service,
      projectDescription: sanitizedData.projectDescription,
      budget: sanitizedData.budget,
      timeline: sanitizedData.timeline,
      ipAddress: ip,
    });

    // 7. Dispatch Email Notification
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    const emailResult = await sendContactNotification({
      fullName: sanitizedData.fullName,
      workEmail: sanitizedData.workEmail,
      service: sanitizedData.service,
      projectDescription: sanitizedData.projectDescription,
      companyName: sanitizedData.companyName,
      phone: sanitizedData.phone,
      budget: sanitizedData.budget,
      timeline: sanitizedData.timeline,
      submittedAt: `${submittedAt} (UTC)`,
    });

    // Operational logging (safe, no private credentials)
    console.info(
      `[Netu Techno API] Form processed: service="${sanitizedData.service}" persisted=${dbResult.persisted} emailSent=${emailResult.success}`
    );

    // If both DB and email fail, return a recoverable server error
    if (!emailResult.success && !dbResult.persisted && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to deliver your enquiry right now due to a temporary service outage. Please email us directly at contact@netutechno.com.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We have received your project details and will review them promptly.",
        leadId: dbResult.persisted ? dbResult.id : undefined,
        notificationStatus: emailResult.simulated ? "simulated" : "dispatched",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Netu Techno API] Unhandled contact error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
