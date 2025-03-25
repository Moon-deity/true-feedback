import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "Username shouldn't be less than 3 characters")
    .max(20, "Username shouldn't be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username shouldn't contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Email should be valid"}),
    password: z.string().min(6, {message: "Password should be at least 6 characters"})
})