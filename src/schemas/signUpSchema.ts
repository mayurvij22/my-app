import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username atlest two character ")
  .max(18, "1*")
  .regex(/^[a=zA-Z0-9_]+$/);

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({
    message: "Invalide email address",
  }),

  password: z.string().min(6, { message: "passwordd must alest 6 charater" }),
});
