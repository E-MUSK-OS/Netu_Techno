"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
  SERVICE_OPTIONS,
} from "@/lib/validation/contact";
import { Button } from "@/components/shared/Button";
import { CustomSelect } from "@/components/shared/CustomSelect";
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
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      service: undefined,
      otherService: "",
      projectDescription: "",
      companyName: "",
      phone: "",
      _honeyPot: "",
    },
  });

  const selectedService = watch("service");
  const otherServiceText = watch("otherService");

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
    <div className="w-full card-luxury card-hairline-gold rounded-3xl p-6 sm:p-8 lg:p-10 relative">
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
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  autoComplete="tel"
                  placeholder="(10 digits)"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg text-sm bg-white border transition-colors ${
                    errors.phone
                      ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                  }`}
                  value={field.value || ""}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    field.onChange(onlyDigits);
                  }}
                  onKeyDown={(e) => {
                    // Allow navigation, deletion, selection, and clipboard shortcuts
                    if (
                      [
                        "Backspace",
                        "Delete",
                        "Tab",
                        "Escape",
                        "Enter",
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                        "Home",
                        "End",
                      ].includes(e.key) ||
                      e.ctrlKey ||
                      e.metaKey ||
                      e.altKey
                    ) {
                      return;
                    }
                    // Prevent any character that is not a numeric digit (0-9)
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedText = e.clipboardData.getData("text");
                    const onlyDigits = pastedText.replace(/\D/g, "");
                    const current = field.value || "";
                    const target = e.target as HTMLInputElement;
                    const start = target.selectionStart ?? current.length;
                    const end = target.selectionEnd ?? current.length;
                    const nextVal = (
                      current.slice(0, start) +
                      onlyDigits +
                      current.slice(end)
                    ).replace(/\D/g, "").slice(0, 10);
                    field.onChange(nextVal);
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
              )}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-sm text-rose-600 font-medium">
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
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <CustomSelect
                id="service"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                options={SERVICE_OPTIONS}
                placeholder="Select the service you need..."
                displayValue={otherServiceText}
                disabled={isSubmitting}
                error={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                aria-invalid={Boolean(errors.service)}
              />
            )}
          />
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-sm text-rose-600 font-medium">
              {errors.service.message}
            </p>
          )}

          {/* Compulsory custom specification text box when "Other" is selected */}
          <AnimatePresence>
            {selectedService === "Other" && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="overflow-hidden mt-3"
              >
                <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="otherService"
                      className="block text-xs font-bold text-[#273138] uppercase tracking-wider"
                    >
                      Specify Your Required Service <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[10px] font-mono font-bold text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2 py-0.5 rounded-full">
                      COMPULSORY
                    </span>
                  </div>
                  <input
                    id="otherService"
                    type="text"
                    placeholder="e.g. AI Workflow Integration, Microservices Audit, Mobile App..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white border transition-colors ${
                      errors.otherService
                        ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-[#DFD9CD] focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    }`}
                    {...register("otherService")}
                    aria-invalid={Boolean(errors.otherService)}
                    aria-describedby={errors.otherService ? "otherService-error" : undefined}
                  />
                  {errors.otherService && (
                    <p id="otherService-error" className="text-xs text-rose-600 font-medium">
                      {errors.otherService.message}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 leading-normal">
                    The custom service name you type here directly replaces &quot;Other&quot; in the selector above and will be reviewed by our architecture team.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 4: Project Description */}
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
            className="w-full sm:w-auto"
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
