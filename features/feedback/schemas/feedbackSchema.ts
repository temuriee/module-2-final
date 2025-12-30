import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(1, "Name Is Required").min(5, "Too Short Name"),
  email: z.email("Wrong Email Address").min(1, "Email Is Required"),
  message: z
    .string()
    .min(1, "Message Is Required")
    .min(10, "Message is too short")
    .max(70, "Message Too Long"),
});

export type FeedbackInputs = z.infer<typeof feedbackSchema>;
