import { z } from "zod";

export const messageSchema = z.object({
    message: z
        .string()
        .min(6, {message: "Message should be at least 6 characters"})
        .max(500, {message: "Message shouldn't be more than 5 00 characters"})
})
