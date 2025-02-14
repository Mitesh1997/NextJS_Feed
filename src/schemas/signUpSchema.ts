import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username Must be atleast 2 characters")
  .max(20, "Username must be no more then 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not constain special character");

export const singUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6,{message:"password must be at least 6 characters"}),
});
