"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  }, []);

  if (submitted) {
    return (
      <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-8 text-center">
        <h3 className="mb-2 font-heading text-lg font-semibold text-[#E8E4DC]">
          Message sent
        </h3>
        <p className="mb-4 text-sm text-[#9A9590]">
          We will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#C9A96E]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-[#9A9590]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Your name"
          className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/40 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-[#9A9590]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/40 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm text-[#9A9590]">
          Company <span className="text-[#6B6560]">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/40 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-[#9A9590]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2.5 text-sm text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/40 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-5 py-2.5 text-sm font-medium text-[#0A0F1E] transition-colors hover:bg-[#D4BA85] disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
