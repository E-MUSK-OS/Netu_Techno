import nodemailer from "nodemailer";

interface ContactLeadEmailPayload {
  fullName: string;
  workEmail: string;
  service: string;
  projectDescription: string;
  companyName?: string;
  phone?: string;
  submittedAt: string;
}

export async function sendContactNotification(payload: ContactLeadEmailPayload): Promise<{
  success: boolean;
  simulated?: boolean;
  messageId?: string;
  error?: string;
}> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO, SMTP_SERVICE } = process.env;

  const isSmtpConfigured = Boolean((SMTP_HOST || SMTP_USER) && SMTP_PASSWORD);

  if (!isSmtpConfigured) {
    // Graceful dev/fallback mode: log operational event without exposing private details
    console.info(
      `[Netu Techno Mailer] SMTP credentials not configured. Simulated email notification for lead from ${payload.workEmail.replace(/(.{2})(.*)(@.*)/, "$1***$3")} -> Target recipient: ${EMAIL_TO || "netutechno@gmail.com"}`
    );
    return {
      success: true,
      simulated: true,
    };
  }

  try {
    const isGmail =
      SMTP_SERVICE?.toLowerCase() === "gmail" ||
      SMTP_HOST?.toLowerCase().includes("gmail") ||
      Boolean(SMTP_USER?.toLowerCase().includes("@gmail.com") && !SMTP_HOST);

    const cleanPassword = SMTP_PASSWORD ? SMTP_PASSWORD.replace(/\s+/g, "").trim() : "";

    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: "gmail",
            auth: {
              user: SMTP_USER,
              pass: cleanPassword,
            },
          }
        : {
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465,
            auth: {
              user: SMTP_USER,
              pass: cleanPassword,
            },
          }
    );

    const recipient = EMAIL_TO || "netutechno@gmail.com";
    const sender = EMAIL_FROM || `"Netu Techno Contact Form" <${SMTP_USER || "netutechno@gmail.com"}>`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #172033; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
        <div style="border-bottom: 2px solid #2563EB; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #132A43; font-size: 20px;">New Project Enquiry — Netu Techno</h2>
          <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">Submitted on ${payload.submittedAt}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #64748B; width: 140px; font-weight: 600; font-size: 14px;">Full Name:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px; font-weight: 500;">${payload.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Work Email:</td>
            <td style="padding: 8px 0; color: #2563EB; font-size: 14px;"><a href="mailto:${payload.workEmail}">${payload.workEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Service:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;"><strong>${payload.service}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Company:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;">${payload.companyName || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Phone:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;">${payload.phone || "Not provided"}</td>
          </tr>
        </table>

        <div style="background-color: #F4F7FB; padding: 16px; border-radius: 6px; border-left: 3px solid #2563EB;">
          <h4 style="margin: 0 0 8px; color: #132A43; font-size: 14px;">Project Description:</h4>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #172033;">${payload.projectDescription}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94A3B8;">
          This enquiry was securely collected via the Netu Techno official contact form.
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: payload.workEmail,
      subject: `[Enquiry] ${payload.service} - ${payload.fullName}${payload.companyName ? ` (${payload.companyName})` : ""}`,
      html: htmlContent,
      text: `New Project Enquiry\n\nName: ${payload.fullName}\nEmail: ${payload.workEmail}\nService: ${payload.service}\nCompany: ${payload.companyName || "N/A"}\nPhone: ${payload.phone || "N/A"}\n\nDescription:\n${payload.projectDescription}`,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("[Netu Techno Mailer] Error dispatching email:", error);
    return {
      success: false,
      error: "Failed to dispatch email via SMTP provider.",
    };
  }
}

export interface CareerApplicationEmailPayload {
  roleTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience?: string;
  portfolioUrl?: string;
  resumeAttachment?: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
  submittedAt: string;
}

export async function sendCareerApplicationNotification(payload: CareerApplicationEmailPayload): Promise<{
  success: boolean;
  simulated?: boolean;
  messageId?: string;
  error?: string;
}> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO, SMTP_SERVICE } = process.env;
  const isSmtpConfigured = Boolean((SMTP_HOST || SMTP_USER) && SMTP_PASSWORD);
  const recipient = EMAIL_TO || "netutechno@gmail.com";

  if (!isSmtpConfigured) {
    console.info(
      `[Netu Techno Mailer] SMTP credentials not configured. Simulated career application for ${payload.roleTitle} from ${payload.email} -> Target recipient: ${recipient}`
    );
    return {
      success: true,
      simulated: true,
    };
  }

  try {
    const isGmail =
      SMTP_SERVICE?.toLowerCase() === "gmail" ||
      SMTP_HOST?.toLowerCase().includes("gmail") ||
      Boolean(SMTP_USER?.toLowerCase().includes("@gmail.com") && !SMTP_HOST);

    const cleanPassword = SMTP_PASSWORD ? SMTP_PASSWORD.replace(/\s+/g, "").trim() : "";

    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: "gmail",
            auth: {
              user: SMTP_USER,
              pass: cleanPassword,
            },
          }
        : {
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465,
            auth: {
              user: SMTP_USER,
              pass: cleanPassword,
            },
          }
    );

    const sender = EMAIL_FROM || `"Netu Techno Careers" <${SMTP_USER || "netutechno@gmail.com"}>`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #172033; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
        <div style="border-bottom: 2px solid #C59B27; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #132A43; font-size: 20px;">New Job Application — ${payload.roleTitle}</h2>
          <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">Submitted on ${payload.submittedAt}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #64748B; width: 150px; font-weight: 600; font-size: 14px;">Role Applied:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px; font-weight: 700;">${payload.roleTitle}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Candidate Name:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px; font-weight: 600;">${payload.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Email:</td>
            <td style="padding: 8px 0; color: #C59B27; font-size: 14px;"><a href="mailto:${payload.email}">${payload.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Phone Number:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Experience:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;">${payload.experience || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Portfolio / Profile:</td>
            <td style="padding: 8px 0; color: #C59B27; font-size: 14px;">${payload.portfolioUrl ? `<a href="${payload.portfolioUrl}" target="_blank">${payload.portfolioUrl}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Resume File:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px; font-weight: 600;">
              ${payload.resumeAttachment ? `📎 ${payload.resumeAttachment.filename} (attached)` : "No resume attached"}
            </td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94A3B8;">
          This application was received via the Netu Techno Careers portal with the candidate's PDF resume attached.
        </div>
      </div>
    `;

    const attachments = payload.resumeAttachment
      ? [
          {
            filename: payload.resumeAttachment.filename,
            content: payload.resumeAttachment.content,
            contentType: payload.resumeAttachment.contentType,
          },
        ]
      : [];

    const info = await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: payload.email,
      subject: `[Job Application] ${payload.roleTitle} - ${payload.fullName}`,
      html: htmlContent,
      text: `New Job Application\n\nRole: ${payload.roleTitle}\nName: ${payload.fullName}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nExperience: ${payload.experience || "N/A"}\nPortfolio: ${payload.portfolioUrl || "N/A"}\nResume: ${payload.resumeAttachment ? payload.resumeAttachment.filename : "Attached"}`,
      attachments,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("[Netu Techno Mailer] Error dispatching career application email:", error);
    return {
      success: false,
      error: "Failed to dispatch email via SMTP provider.",
    };
  }
}

