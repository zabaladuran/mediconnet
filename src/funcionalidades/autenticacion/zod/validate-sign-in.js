import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Correo inválido"),
  pass: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});