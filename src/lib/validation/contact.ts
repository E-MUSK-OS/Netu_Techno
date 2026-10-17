import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Custom & WordPress Web Development",
  "Amazon Advertising & Marketing Services",
  "SaaS Product Engineering",
  "API and System Integration",
  "E-commerce Technology",
  "Business Process Automation",
  "Cloud and Application Optimization",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Less than $5,000",
  "$5,000 – $15,000",
  "$15,000 – $35,000",
  "$35,000+",
  "Not sure / Need assessment",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediately / Within 2 weeks",
  "1 to 2 months",
  "3 to 6 months",
  "Flexible / Planning phase",
] as const;

export const contactFormSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "Please provide your full name (at least 2 characters)." })
      .max(100, { message: "Name is too long (maximum 100 characters)." })
      .trim(),
    workEmail: z
      .string()
      .email({ message: "Please provide a valid work email address." })
      .max(120, { message: "Email is too long." })
      .trim()
      .toLowerCase(),
    service: z.enum(SERVICE_OPTIONS, {
      message: "Please select the service required.",
    }),
    otherService: z
      .string()
      .max(120, { message: "Specified service name is too long." })
      .optional()
      .or(z.literal("")),
    projectDescription: z
      .string()
      .min(20, {
        message:
          "Please describe your project or operational challenge in a bit more detail (at least 20 characters).",
      })
      .max(3000, { message: "Project description cannot exceed 3,000 characters." })
      .trim(),
    companyName: z
      .string()
      .max(120, { message: "Company name is too long." })
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .trim()
      .regex(/^\d{10}$/, {
        message: "Please enter a valid 10-digit phone number (10 numbers only).",
      }),
    budget: z.enum(BUDGET_OPTIONS).optional().or(z.literal("")),
    timeline: z.enum(TIMELINE_OPTIONS).optional().or(z.literal("")),
    // Honeypot field for anti-spam bots (must remain empty)
    _honeyPot: z.string().max(0, { message: "Bot detected" }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.service === "Other") {
      if (!data.otherService || data.otherService.trim().length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please specify your required service.",
          path: ["otherService"],
        });
      }
    }
  });

export type ContactFormData = z.infer<typeof contactFormSchema>;
