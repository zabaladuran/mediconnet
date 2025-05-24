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

const EsquemaAgendarCitaServicioProps = z.object({
  idCita: z.int({
    required_error: "El parametro 'idCita' no se envio",
    invalid_type_error: "El servicio debe ser una cadena de texto",
  }),
  token: z
    .string({
      invalid_type_error: "El parametro 'token' no se envio",
    })
    .min(1, "El parametro 'token' no tiene la longitud minima esperada"),
  observaciones: z
    .string({
      invalid_type_error: "Las observaciones deben ser una cadena de texto",
    })
    .optional()
    .default("No se especifan."),
  ubicacionPaciente: z
    .string({
      invalid_type_error: "El parametro 'ubicacionPaciente' no se envio",
    })
    .min(
      1,
      "El parametro 'ubicacionPaciente' no tiene la longitud minima esperada"
    ),
});

export function pipePropsAgendarCita({ cita }) {
  try {
    const result = EsquemaAgendarCitaServicioProps.parse(cita);
    return { valido: true, cita: result };
  } catch (error) {
    return { valido: false, sms: error.errors };
  }
}
