import { NextRequest, NextResponse } from "next/server";
import { sendCareerApplicationNotification } from "@/lib/email/mailer";

// In-memory rate limiting map: ip -> array of submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 30;

function isRateLimited(ip: string): boolean {
  if (
    process.env.NODE_ENV === "development" ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip === "localhost"
  ) {
    return false;
  }

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

    const contentType = req.headers.get("content-type") || "";
    let roleTitle = "";
    let fullName = "";
    let email = "";
    let phone = "";
    let experience = "";
    let portfolioUrl = "";
    let resumeFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      roleTitle = (form.get("roleTitle") as string) || "";
      fullName = (form.get("fullName") as string) || "";
      email = (form.get("email") as string) || "";
      phone = (form.get("phone") as string) || "";
      experience = (form.get("experience") as string) || "";
      portfolioUrl = (form.get("portfolioUrl") as string) || "";
      const rawResume = form.get("resume");
      if (rawResume && typeof rawResume === "object" && "arrayBuffer" in rawResume) {
        resumeFile = rawResume as File;
      }
    } else {
      let body;
      try {
        body = await req.json();
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid request payload." },
          { status: 400 }
        );
      }
      roleTitle = body.roleTitle || "";
      fullName = body.fullName || "";
      email = body.email || "";
      phone = body.phone || "";
      experience = body.experience || "";
      portfolioUrl = body.portfolioUrl || "";
    }

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 422 }
      );
    }

    const cleanPhone = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit phone number (10 numbers only)." },
        { status: 422 }
      );
    }

    // Compulsory PDF Resume Validation
    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { success: false, error: "Please upload your resume in PDF format (required)." },
        { status: 422 }
      );
    }

    if (
      resumeFile.type !== "application/pdf" &&
      !resumeFile.name.toLowerCase().endsWith(".pdf")
    ) {
      return NextResponse.json(
        { success: false, error: "Only PDF files are accepted for the resume." },
        { status: 422 }
      );
    }

    if (resumeFile.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Resume file size must not exceed 10MB." },
        { status: 422 }
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    const emailResult = await sendCareerApplicationNotification({
      roleTitle: typeof roleTitle === "string" ? roleTitle.trim() : "Engineering Position",
      fullName: fullName.trim().replace(/[<>]/g, ""),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      experience: typeof experience === "string" ? experience.trim().replace(/[<>]/g, "") : undefined,
      portfolioUrl: typeof portfolioUrl === "string" ? portfolioUrl.trim() : undefined,
      resumeAttachment: {
        filename: resumeFile.name || "Resume.pdf",
        content: resumeBuffer,
        contentType: "application/pdf",
      },
      submittedAt: `${submittedAt} (UTC)`,
    });

    console.info(
      `[Netu Techno API] Career application processed for "${roleTitle}" from "${fullName}" with attached resume "${resumeFile.name}" -> emailSent=${emailResult.success}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for applying. We have received your application details and our engineering team will review them promptly.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Netu Techno API] Unhandled career application error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your application. Please try again later.",
      },
      { status: 500 }
    );
  }
}
