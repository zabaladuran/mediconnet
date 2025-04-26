import { useForm } from "react-hook-form";
import { obtenerDeLocalStorage } from "../../../servicios";
import { zodResolver } from "@hookform/resolvers/zod";
import { CLAVE_CORREO_USUARIO } from "../data/variables-de-autenticacion";
import { signUpSchema } from "../zod";
import { toast } from "sonner";
export function useSignUpForm() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: obtenerDeLocalStorage({ clave: CLAVE_CORREO_USUARIO } || ""),
    },
  });
  function enviarData(data) {
    toast.success("Iniciando sesion...");
  }
  return { formulario: form, enviarData: enviarData };
}
