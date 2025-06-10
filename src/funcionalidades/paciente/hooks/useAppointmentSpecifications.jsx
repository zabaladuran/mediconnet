import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAut } from "../../autenticacion/hooks";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useScheduleForm } from "./useScheduleForm";
import { obtenerEspecialidadesMedicas } from "../servicios/citas-paciente";
import * as z from "zod";

const AppointmentSpecificationsSchema = z.object({
  fechaSugerida: z.date({
    required_error: "La fecha es requerida.",
  }),
  cargoMedico: z.string().min(1, {
    message: "Por favor, selecciona un cargo médico.",
  }),
});

export function useAppointmentSpecifications() {
  // FORM LOADER
  const [validando, definirValidando] = useState(false);

  // FORM HOOKS
  const { specialtiesAvailable } = useAvailableSpecialties();
  const { next, updateDataForm, dataForm } = useScheduleForm();
  const form = useForm({
    resolver: zodResolver(AppointmentSpecificationsSchema),
    values: {
      fechaSugerida: dataForm.fechaSugerida || "",
      cargoMedico: dataForm.cargoMedico || "",
    },
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS
      definirValidando(true);

      // FORM ACTION
      updateDataForm(data);
      next();
    } finally {
      definirValidando(false);
    }
  }

  return {
    loading: validando,
    form: form,
    specialtiesAvailable: specialtiesAvailable,
    enviarData,
  };
}

export function useAvailableSpecialties() {
  const { credenciales } = useAut();
  const [specialtiesAvailable, setAvailableSpecialties] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await obtenerEspecialidadesMedicas({
        token: credenciales.token,
      });

      if (data.exito) {
        setAvailableSpecialties(data.listaEspecialidades);
      } else {
        console.log(data.sms);
        toast.error(
          "Error durante la optencion de datos para el formulario..."
        );
      }
    })();
  }, []);

  return { specialtiesAvailable };
}
