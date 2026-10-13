"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/validation/contact";
import { Button } from "@/components/shared/Button";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Lock,
} from "lucide-react";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      service: undefined,
      projectDescription: "",
      companyName: "",
      phone: "",
      budget: "",
      timeline: "",
      _honeyPot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionState({
          status: "success",
          message:
            result.message ||
            "Your project inquiry has been successfully received. Our lead architect will review your requirements and reach out within 1 business day.",
        });
        reset();
      } else {
        setSubmissionState({
          status: "error",
          message:
            result.error ||
            "Failed to send your request. Please check your details and try again.",
        });
      }
    } catch {
      setSubmissionState({
        status: "error",
        message:
          "Network communication failure. Please check your internet connection or email us directly at info@netutechno.com.",
      });
    }
  };

  return (
    <div className="w-full card-luxury card-hairline-gold rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Header Info */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#273138] tracking-tight">
          Project Requirements Form
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Fields marked with an asterisk (<span className="text-rose-500 font-bold">*</span>) are required so our engineers can properly evaluate your project scope.
        </p>
      </div>

      {/* Success Notification Alert */}
      {submissionState.status === "success" && (
        <div
          role="alert"
          className="mb-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-emerald-950">Inquiry Received Successfully</h4>
            <p className="mt-1 text-sm text-emerald-800 leading-relaxed">
              {submissionState.message}
            </p>
            <button
              type="button"
              onClick={() => setSubmissionState({ status: "idle" })}
              className="mt-3 text-sm font-semibold text-emerald-900 hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      )}

      {/* Error Notification Alert */}
      {submissionState.status === "error" && (
        <div
          role="alert"
          className="mb-8 p-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3.5"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-rose-950">Submission Could Not Complete</h4>
            <p className="mt-1 text-sm text-rose-800 leading-relaxed">
              {submissionState.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Anti-spam honeypot field (hidden from screen reader & visual UI) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_honeyPot">Do not fill this field</label>
          <input
            id="_honeyPot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("_honeyPot")}
          />
        </div>

        {/* Row 1: Full Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Henderson"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors ${
                errors.fullName
                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
              }`}
              {...register("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-sm text-rose-600 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="workEmail"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Work Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              autoComplete="email"
              placeholder="alex@company.com"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors ${
                errors.workEmail
                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
              }`}
              {...register("workEmail")}
              aria-invalid={Boolean(errors.workEmail)}
              aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            />
            {errors.workEmail && (
              <p id="workEmail-error" className="mt-1.5 text-sm text-rose-600 font-medium">
                {errors.workEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Company Name (Optional) & Phone Number (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Logistics"
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-colors"
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="mt-1.5 text-sm text-rose-600 font-medium">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 000-0000"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors ${
                errors.phone
                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1.5 text-sm text-rose-600 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service Required */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
          >
            Service Required <span className="text-rose-500">*</span>
          </label>
          <select
            id="service"
            disabled={isSubmitting}
            defaultValue=""
            className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors ${
              errors.service
                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
            }`}
            {...register("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select the service you need...
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-sm text-rose-600 font-medium">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Row 4: Budget Range & Timeline (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Estimated Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="budget"
              disabled={isSubmitting}
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-colors"
              {...register("budget")}
            >
              <option value="">Select an estimated budget range...</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
            >
              Desired Timeline <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="timeline"
              disabled={isSubmitting}
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-colors"
              {...register("timeline")}
            >
              <option value="">Select your project timeline...</option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Project Description */}
        <div>
          <label
            htmlFor="projectDescription"
            className="block text-sm font-semibold text-[#273138] uppercase tracking-wider mb-2"
          >
            Project Description & Operational Challenge <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            rows={5}
            placeholder="Please outline the problem you are solving, your current bottlenecks, any legacy software or APIs to integrate with, and desired outcomes..."
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors resize-y ${
              errors.projectDescription
                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
            }`}
            {...register("projectDescription")}
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={
              errors.projectDescription ? "projectDescription-error" : undefined
            }
          />
          {errors.projectDescription && (
            <p id="projectDescription-error" className="mt-1.5 text-sm text-rose-600 font-medium">
              {errors.projectDescription.message}
            </p>
          )}
        </div>

        {/* Submit Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Strict privacy. We never share your data.</span>
          </div>

          <Button
            type="submit"
            variant="gold"
            size="lg"
            loading={isSubmitting}
            rightIcon={!isSubmitting ? <Send className="w-4 h-4 ml-1" /> : undefined}
            disabled={isSubmitting}
            className="sm:w-auto"
            id="submit-contact-button"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Requirements...
              </span>
            ) : (
              "Submit Project Requirements"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
