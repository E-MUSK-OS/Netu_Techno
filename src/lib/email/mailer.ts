import nodemailer from "nodemailer";

interface ContactLeadEmailPayload {
  fullName: string;
  workEmail: string;
  service: string;
  projectDescription: string;
  companyName?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  submittedAt: string;
}

export async function sendContactNotification(payload: ContactLeadEmailPayload): Promise<{
  success: boolean;
  simulated?: boolean;
  messageId?: string;
  error?: string;
}> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_FROM, EMAIL_TO } = process.env;

  const isSmtpConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASSWORD);

  if (!isSmtpConfigured) {
    // Graceful dev/fallback mode: log operational event without exposing private details
    console.info(
      `[Netu Techno Mailer] SMTP credentials not set. Simulated email notification for lead from ${payload.workEmail.replace(/(.{2})(.*)(@.*)/, "$1***$3")}`
    );
    return {
      success: true,
      simulated: true,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const recipient = EMAIL_TO || SMTP_USER;
    const sender = EMAIL_FROM || `"Netu Techno Contact Form" <${SMTP_USER}>`;

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
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Budget Range:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;">${payload.budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600; font-size: 14px;">Timeline:</td>
            <td style="padding: 8px 0; color: #172033; font-size: 14px;">${payload.timeline || "Not specified"}</td>
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
      text: `New Project Enquiry\n\nName: ${payload.fullName}\nEmail: ${payload.workEmail}\nService: ${payload.service}\nCompany: ${payload.companyName || "N/A"}\nPhone: ${payload.phone || "N/A"}\nBudget: ${payload.budget || "N/A"}\nTimeline: ${payload.timeline || "N/A"}\n\nDescription:\n${payload.projectDescription}`,
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
