/* eslint-disable @typescript-eslint/no-explicit-any */

const isDatabaseConfigured = Boolean(
  process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== ""
);

let dbClient: any = null;

if (isDatabaseConfigured) {
  try {
    // Dynamic import to prevent build breaks when database client is not yet generated in CI/local
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require("@prisma/client");
    if (PrismaClient) {
      const globalForPrisma = globalThis as unknown as { prisma: any };
      dbClient =
        globalForPrisma.prisma ??
        new PrismaClient({
          log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
        });

      if (process.env.NODE_ENV !== "production") {
        globalForPrisma.prisma = dbClient;
      }
    }
  } catch (error) {
    console.warn("[Netu Techno DB] PrismaClient could not be initialized:", error);
    dbClient = null;
  }
}

export const prisma = dbClient;

export async function saveContactLead(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
  ipAddress?: string;
}) {
  if (!prisma || !prisma.contactSubmission) {
    return {
      persisted: false,
      reason: "DATABASE_URL or Prisma client not generated. Lead processed safely via email & audit log.",
    };
  }

  try {
    const record = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        service: data.service,
        projectDescription: data.projectDescription,
        budget: data.budget || null,
        timeline: data.timeline || null,
        ipAddress: data.ipAddress || null,
      },
    });
    return { persisted: true, id: record.id };
  } catch (err) {
    console.error("[Netu Techno DB] Error persisting lead:", err);
    return { persisted: false, reason: "Database write error occurred." };
  }
}
