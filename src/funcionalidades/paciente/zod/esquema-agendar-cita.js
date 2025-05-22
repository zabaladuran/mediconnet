import { z } from "zod";

export const EsquemaAgendarCita = z.object({
  servicio: z
    .string({
      required_error: "El servicio es obligatorio",
      invalid_type_error: "El servicio debe ser una cadena de texto",
    })
    .min(1, "No se completo el campo servicio"),

  profesional: z
    .string({
      invalid_type_error: "El profesional debe ser una cadena de texto",
    })
    .min(1, "No se completo el campo del profesional deseado"),

  cargo: z
    .string({
      invalid_type_error: "El cargo debe ser una cadena de texto",
    })
    .min(1, "No se completo el campo del cargo del profesional"),

  observaciones: z
    .string({
      invalid_type_error: "Las observaciones deben ser una cadena de texto",
    })
    .max(500, {
      message: "Las observaciones no deben exceder los 500 caracteres",
    })
    .optional(),
});
