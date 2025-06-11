import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAut } from "../../autenticacion/hooks";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useScheduleForm } from "./useScheduleForm";
import { obtenerCitasDisponibles } from "../servicios/citas-paciente";
import * as z from "zod";

const SelectAppointmentSchema = z.object({
  idCita: z.number(),
});

export function useAppointmentSelector() {
  // FORM LOADER
  const [validando, definirValidando] = useState(false);

  // FORM HOOKS
  const { availableAppointments, cargando: loadingData } =
    useAvailableAppointments();
  const { next, updateDataForm, dataForm } = useScheduleForm();
  const form = useForm({
    resolver: zodResolver(SelectAppointmentSchema),
    values: {
      idCita: dataForm.idCita || "",
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
    loadingData: loadingData,
    form: form,
    availableAppointments: availableAppointments,
    enviarData,
  };
}

function useAvailableAppointments() {
  const { credenciales } = useAut();
  const [cargando, definirCargando] = useState(false);
  const { dataForm } = useScheduleForm();
  const [availableAppointments, setAvailableAppointments] = useState([]);

  useEffect(() => {
    definirCargando(true);
    (async function () {
      const data = await obtenerCitasDisponibles({
        token: credenciales.token,
        fechaSugerida: dataForm.fechaSugerida,
        especialidad: dataForm.cargoMedico,
      });

      if (data.exito) {
        setAvailableAppointments(data.citasDisponibles);
      } else {
        console.log(data.sms);
        toast.error(
          "Error durante la optencion de datos para el formulario..."
        );
      }
      definirCargando(false);
    })();
  }, []);

  return { availableAppointments, cargando };
}
