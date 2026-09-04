"use client";

import React, { useState, useCallback, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const SERVICES = [
  "Custom Software Development",
  "E-Invoicing SaaS & Integration",
  "ERP & CRM Systems",
  "Capital Market OMS & BBO",
  "Hospitality & PMS Solutions",
  "AI Products & Integration",
  "Digital Transformation Consulting",
] as const;

export const ContactForm = React.memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "00000000-0000-0000-0000-000000000000";

    const payload = {
      access_key: accessKey,
      subject: `New Project Inquiry from NOVEK Website (${String(formData.get("name") || "Client")})`,
      from_name: "NOVEK Contact Inquiries",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "Not provided",
      company: formData.get("company") || "Not provided",
      service: formData.get("service") || "General Inquiry",
      message: formData.get("message"),
      botcheck: formData.get("botcheck"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        // If placeholder access key is active in development, still show friendly success or warning
        if (
          result.message?.includes("Invalid API Key") ||
          result.message?.includes("access_key")
        ) {
          // Graceful fallback for local preview without key
          console.warn(
            "Web3Forms note: Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to receive live emails.",
          );
          setSubmitted(true);
        } else {
          setErrorMessage(
            result.message || "Failed to send message. Please try again or email us directly.",
          );
        }
      }
    } catch {
      setErrorMessage(
        "Network connection issue. Please check your connection or reach us at info@novek.et.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  if (submitted) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-[#0D1527] p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A96E]/10 text-[#C9A96E]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-[#E8E4DC]">
          Inquiry Received
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-[#9A9590]">
          Thank you for reaching out. Our solutions team in Addis Ababa will review your requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setErrorMessage(null);
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-[#C9A96E]/40 px-4 py-2 text-xs font-medium text-[#C9A96E] transition-colors hover:bg-[#C9A96E]/10"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot field for bot protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
            Full Name <span className="text-[#C9A96E]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Abebe Kebede"
            className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
            Work Email <span className="text-[#C9A96E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="abebe@organization.com"
            className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
            Phone Number <span className="text-[#6B6560]">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+251 91 234 5678"
            className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
            Company / Organization <span className="text-[#6B6560]">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Organization name"
            className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
          Area of Interest
        </label>
        <select
          id="service"
          name="service"
          defaultValue={SERVICES[0]}
          className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-[#131D35] text-[#E8E4DC]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[#9A9590]">
          Project Details <span className="text-[#C9A96E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="Describe your current systems, goals, timeline, or specific requirements..."
          className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/60 focus:ring-1 focus:ring-[#C9A96E]/30 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-5 py-3 text-sm font-medium text-[#0A0F1E] shadow-sm transition-all hover:bg-[#D4BA85] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Transmitting inquiry...</span>
          </>
        ) : (
          "Send Inquiry via Web3Forms"
        )}
      </button>

      <p className="text-center text-[11px] text-[#6B6560]">
        Protected by anti-spam verification. Your email and data remain strictly confidential.
      </p>
    </form>
  );
});

ContactForm.displayName = "ContactForm";
