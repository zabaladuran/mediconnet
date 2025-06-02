import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EsquemaPerfilPaciente } from "../zod/esquemas-servicios-paciente";

export function useFormularioPaciente(onSubmitCallback) {
  const form = useForm({
    resolver: zodResolver(EsquemaPerfilPaciente),
    defaultValues: {
      cell: "",
      tipoId: "CC",
      personalId: "",
      bloodGroup: "",
      direccion: "",
      alergiasGeneral: [],
      alergiasMedications: [],
    },
  });

  const onSubmit = (data) => {
    onSubmitCallback(data);
  };

  return { form, onSubmit };
}
