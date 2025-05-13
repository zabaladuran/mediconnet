import { z } from "zod";

const IDENTIFICACIONES_DISPONIBLES = ["CC"];

const EsquemaPerfilPaciente = z.object({
  nombreCompleto: z.string().min(1, "El nombre completo es obligatorio"),
  fechaNacimiento: z.coerce.date({
    errorMap: () => ({ message: "Fecha de nacimiento inválida" }),
  }),
  numeroIndentificacion: z
    .string()
    .min(1, "El número de identificación es obligatorio"),
  // Expresión regular para teléfonos colombianos (+57 y 10 dígitos)
  telefono: z
    .string()
    .regex(/^(\+57)?3\d{9}$/, "Número de teléfono colombiano inválido"),
  identificacionTipo: z.enum(IDENTIFICACIONES_DISPONIBLES),
  alergias: z
    .array(z.string())
    .nonempty("Debe especificar al menos una alergia"),
  grupoSanguineo: z.string().min(1, "El grupo sanguíneo es obligatorio"),
  correoElectronico: z.string().email("Correo electrónico inválido"),
  residencia: z.string().min(1, "La residencia es obligatoria"),
});

export function validarPerfilPaciente(perfil) {
  try {
    EsquemaPerfilPaciente.parse(perfil);
    return { valido: true };
  } catch (error) {
    return { valido: true, sms: error.errors };
  }
}
