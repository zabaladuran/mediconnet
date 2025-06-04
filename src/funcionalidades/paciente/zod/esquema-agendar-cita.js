import { z } from "zod";

export const EsquemaAgendarCita = z.object({
  cargo: z
    .string({
      required_error: "El cargo es obligatorio",
      invalid_type_error: "El cargo debe ser una cadena de texto",
    })
    .min(1, "Selecciona un cargo"),

  fecha: z
    .string({
      required_error: "La fecha es obligatoria",
      invalid_type_error: "La fecha debe ser una cadena de texto",
    })
    .min(1, "Selecciona una fecha"),

  citaId: z
    .string({
      required_error: "Debes seleccionar una cita",
      invalid_type_error: "La cita debe ser una cadena de texto",
    })
    .min(1, "Selecciona una cita disponible"),

  observaciones: z
    .string()
    .max(500, "Las observaciones no deben exceder los 500 caracteres")
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
