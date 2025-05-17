import { z } from "zod";
export const codeVerificationSchema = z.object({
  code: z.string().regex(/^\d{6}$/, "El codigo debe tener 6 digitos numericos"),
});
