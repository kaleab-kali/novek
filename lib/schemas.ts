import { z } from "zod/v4/mini";

export const contactFormSchema = z.object({
  name: z.string().check(z.minLength(2, "Name must be at least 2 characters")),
  email: z.email("Please enter a valid email address"),
  company: z.optional(z.string()),
  phone: z.optional(z.string()),
  service: z.optional(z.string()),
  budget: z.optional(z.string()),
  message: z.string().check(z.minLength(10, "Message must be at least 10 characters")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const applicationSchema = z.object({
  name: z.string().check(z.minLength(2, "Name must be at least 2 characters")),
  email: z.email("Please enter a valid email address"),
  linkedin: z.optional(z.string()),
  coverLetter: z.optional(z.string()),
  position: z.string(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
