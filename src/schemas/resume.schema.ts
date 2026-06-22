import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string(),
  linkedin: z.string(),
  github: z.string(),
  portfolio: z.string(),
  location: z.string(),
});

export const resumeSchema = z.object({
  personalInfo: personalInfoSchema,
  summary: z.string(),
});