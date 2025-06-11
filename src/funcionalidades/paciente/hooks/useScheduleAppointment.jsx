import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useScheduleForm } from "./useScheduleForm";
import { agendarCita } from "../servicios/citas-paciente";
import * as z from "zod";
import { useAut } from "../../autenticacion/hooks";

const AppointmentSchema = z.object({
  observaciones: z
    .string()
    .max(200, "Máximo 500 caracteres")
    .optional()
    .transform((val) =>
      val == null || val.trim() == "" ? "No se especifican" : val
    ),
});

export function useScheduleAppointment() {
  // FORM LOADER
  const [validando, definirValidando] = useState(false);

  // FORM HOOKS
  const { next, dataForm } = useScheduleForm();
  const { credenciales } = useAut();
  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    values: {
      observaciones: dataForm.observaciones || "",
    },
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS Y NORMALIZACION
      definirValidando(true);

      // FORM ACTION
      const confirmacion = await agendarCita({
        token: credenciales.token,
        idCita: dataForm.idCita,
        observacioenes: data.observaciones,
      });

      if (confirmacion.exito) {
        toast.success("Cita agendada con éxito");
        next();
      } else {
        toast.error(confirmacion.sms);
      }
    } finally {
      definirValidando(false);
    }
  }

  return {
    loading: validando,
    form: form,
    enviarData,
  };
}
