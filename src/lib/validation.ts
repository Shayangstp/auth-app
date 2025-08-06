import { z } from 'zod';

export const phoneSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/, "Phone number must start with 09 and be 11 digits"),
});

export type PhoneSchema = z.infer<typeof phoneSchema>;
