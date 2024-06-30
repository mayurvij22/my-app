import { z } from "zod";

export const verifySchematsts = z.object({
  code: z.string().length(6, "Vertification code must be  6 digit"),
});
