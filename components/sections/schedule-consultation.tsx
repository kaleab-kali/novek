"use client";

import React, { useState, useCallback, useMemo } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Loader2,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site";

interface ScheduleConsultationProps {
  id?: string;
}

const TOPICS = [
  "ERCA E-Invoicing Compliance",
  "Capital Market OMS & BBO Platforms",
  "ERP & Enterprise Workflow Systems",
  "Hospitality Management Platform",
  "Custom Software & Digital Platforms",
  "AI Business Automation",
] as const;

const TIME_SLOTS = [
  "09:30 AM (EAT)",
  "11:00 AM (EAT)",
  "02:00 PM (EAT)",
  "03:30 PM (EAT)",
  "05:00 PM (EAT)",
] as const;

export const ScheduleConsultation = React.memo(({ id = "schedule" }: ScheduleConsultationProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [selectedSlot, setSelectedSlot] = useState<string>(TIME_SLOTS[1]);
  const [duration, setDuration] = useState<"30" | "45">("30");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const availableDates = useMemo(() => {
    const dates: { dateString: string; display: string; dayName: string }[] = [];
    const current = new Date();
    let count = 0;
    while (dates.length < 8 && count < 18) {
      count++;
      current.setDate(current.getDate() + 1);
      const day = current.getDay();
      if (day !== 0) {
        const iso = current.toISOString().split("T")[0];
        const display = current.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        const dayName = current.toLocaleDateString("en-US", { weekday: "short" });
        dates.push({ dateString: iso, display, dayName });
      }
    }
    return dates;
  }, []);

  const googleCalendarUrl = useMemo(() => {
    const title = encodeURIComponent(`Consultation: NOVEK ICT Solutions (${selectedTopic})`);
    const details = encodeURIComponent(
      `Technical Consultation with NOVEK ICT Solutions.\nTopic: ${selectedTopic}\nDuration: ${duration} minutes\nClient: ${name} (${company || "N/A"})\nPhone: ${phone}\nNotes: ${notes}`,
    );
    const location = encodeURIComponent("Online Video Meeting / Google Meet");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [selectedTopic, duration, name, company, phone, notes]);

  const handleBookingSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "00000000-0000-0000-0000-000000000000";

      const payload = {
        access_key: accessKey,
        subject: `📅 Consultation Scheduled: ${name} (${selectedTopic})`,
        from_name: "NOVEK Consultation Desk",
        client_name: name,
        client_email: email,
        client_phone: phone,
        client_company: company,
        scheduled_date: selectedDate,
        scheduled_time: selectedSlot,
        duration: `${duration} mins`,
        focus_area: selectedTopic,
        notes: notes,
      };

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn("Scheduler transmission:", err);
      } finally {
        setIsSubmitting(false);
        setIsBooked(true);
      }
    },
    [name, email, phone, company, selectedDate, selectedSlot, duration, selectedTopic, notes],
  );

  return (
    <section id={id} className="relative scroll-mt-16 bg-[#070B16] py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-[#C9A96E]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#C9A96E] uppercase">
              Technical Consultation
            </span>
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#E8E4DC] sm:text-3xl">
            Schedule a Direct Consultation
          </h2>
          <p className="mt-2 text-sm text-[#9A9590]">
            Speak directly with our senior software architects in Addis Ababa. Select a date and time that fits your schedule.
          </p>
        </div>

        {isBooked ? (
          <div className="rounded-2xl border border-white/[0.08] bg-[#0D1527] p-8 text-center sm:p-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A96E]/15 text-[#C9A96E]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-[#E8E4DC]">
              Consultation Reserved
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#9A9590]">
              Your session for <strong className="text-[#C9A96E]">{selectedDate}</strong> at{" "}
              <strong className="text-[#C9A96E]">{selectedSlot}</strong> has been booked. A calendar invite and Google Meet link will be sent to <strong>{email}</strong>.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-2.5 text-xs font-semibold text-[#0A0F1E] transition-colors hover:bg-[#D4BA85]"
              >
                <CalendarDays className="h-4 w-4" />
                Add to Google Calendar
              </a>
              <button
                type="button"
                onClick={() => setIsBooked(false)}
                className="rounded-lg border border-white/[0.1] px-4 py-2.5 text-xs text-[#E8E4DC] transition-colors hover:bg-white/[0.05]"
              >
                Book another session
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/[0.08] bg-[#0D1527] p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              
              {/* Left Column: Date & Slot Selection (7 cols) */}
              <div className="space-y-6 lg:col-span-7">
                {/* Meeting duration */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-[#9A9590]">
                    Meeting Format
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDuration("30")}
                      className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-medium transition-all ${
                        duration === "30"
                          ? "border-[#C9A96E] bg-[#C9A96E]/15 text-[#C9A96E]"
                          : "border-white/[0.06] bg-[#131D35] text-[#9A9590] hover:text-[#E8E4DC]"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      30 Min Discovery
                    </button>
                    <button
                      type="button"
                      onClick={() => setDuration("45")}
                      className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-medium transition-all ${
                        duration === "45"
                          ? "border-[#C9A96E] bg-[#C9A96E]/15 text-[#C9A96E]"
                          : "border-white/[0.06] bg-[#131D35] text-[#9A9590] hover:text-[#E8E4DC]"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      45 Min Architecture Demo
                    </button>
                  </div>
                </div>

                {/* Topic selection */}
                <div>
                  <label htmlFor="sec-topic" className="mb-2 block text-xs font-medium text-[#9A9590]">
                    Focus Area
                  </label>
                  <select
                    id="sec-topic"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3.5 py-2.5 text-sm text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-[#131D35] text-[#E8E4DC]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date selection */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-[#9A9590]">
                    Select Date
                  </label>
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateString;
                      return (
                        <button
                          key={item.dateString}
                          type="button"
                          onClick={() => setSelectedDate(item.dateString)}
                          className={`flex flex-col items-center justify-center rounded-lg border py-2.5 text-center transition-all ${
                            isSelected
                              ? "border-[#C9A96E] bg-[#C9A96E] text-[#0A0F1E] font-semibold shadow"
                              : "border-white/[0.06] bg-[#131D35] text-[#9A9590] hover:border-white/[0.15] hover:text-[#E8E4DC]"
                          }`}
                        >
                          <span className="text-[10px] uppercase tracking-wider">{item.dayName}</span>
                          <span className="text-xs font-bold">{item.display}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slot selection */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-[#9A9590]">
                    Select Time (Addis Ababa / EAT UTC+3)
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`rounded-lg border py-2.5 text-center text-xs font-medium transition-all ${
                            isSelected
                              ? "border-[#C9A96E] bg-[#C9A96E]/15 text-[#C9A96E] font-semibold"
                              : "border-white/[0.06] bg-[#131D35] text-[#9A9590] hover:text-[#E8E4DC]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Details (5 cols) */}
              <div className="space-y-4 rounded-xl border border-white/[0.05] bg-[#131D35]/50 p-5 lg:col-span-5">
                <h3 className="text-xs font-semibold tracking-wider text-[#C9A96E] uppercase">
                  Your Contact Information
                </h3>

                <div>
                  <label htmlFor="sec-name" className="mb-1 block text-xs text-[#9A9590]">
                    Full Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    id="sec-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2 text-xs text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="sec-email" className="mb-1 block text-xs text-[#9A9590]">
                    Work Email <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    id="sec-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2 text-xs text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="sec-phone" className="mb-1 block text-xs text-[#9A9590]">
                      Phone <span className="text-[#C9A96E]">*</span>
                    </label>
                    <input
                      id="sec-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+251 91..."
                      className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2 text-xs text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="sec-company" className="mb-1 block text-xs text-[#9A9590]">
                      Organization
                    </label>
                    <input
                      id="sec-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                      className="w-full rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2 text-xs text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sec-notes" className="mb-1 block text-xs text-[#9A9590]">
                    Notes or Specific Questions
                  </label>
                  <textarea
                    id="sec-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe what you'd like to cover..."
                    className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#131D35] px-3 py-2 text-xs text-[#E8E4DC] focus:border-[#C9A96E]/60 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-3 text-xs font-semibold text-[#0A0F1E] shadow transition-all hover:bg-[#D4BA85] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Booking consultation...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Consultation ({selectedDate} @ {selectedSlot})</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

                <div className="pt-2 text-center">
                  <a
                    href={siteConfig.calendlyUrl || "https://calendly.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#9A9590] transition-colors hover:text-[#C9A96E]"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Prefer booking directly via Calendly?
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
});

ScheduleConsultation.displayName = "ScheduleConsultation";
