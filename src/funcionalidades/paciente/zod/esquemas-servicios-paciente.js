import { z } from "zod";

export const EsquemaPerfilPaciente = z.object({
  cell: z
    .string()
    .regex(/^(\+57)?3\d{9}$/, "Número de teléfono colombiano inválido"),
  tipoId: z.enum(["CC", "TI", "CE"], {
    required_error: "Tipo de identificación es obligatorio",
  }),
  personalId: z
    .string()
    .regex(/^\d+$/, "El número de identificación solo puede contener números")
    .min(5, "Debe tener al menos 5 dígitos"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  direccion: z.string().min(1, "La dirección es obligatoria"),
  alergiasGeneral: z
    .array(z.string())
    .min(1, "Debe especificar al menos una alergia general"),
  alergiasMedications: z
    .array(z.string())
    .min(1, "Debe especificar al menos una alergia a medicamentos"),
});
