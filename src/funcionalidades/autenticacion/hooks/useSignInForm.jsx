import { useForm } from "react-hook-form";
import { obtenerDeLocalStorage } from "../../../servicios";
import { zodResolver } from "@hookform/resolvers/zod";
import { CLAVE_CORREO_USUARIO } from "../data";
import { signInSchema } from "../zod";
export function useSignInForm() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: obtenerDeLocalStorage({ clave: CLAVE_CORREO_USUARIO }),
    },
  });
  function enviarData(data) {
    console.log(data);
  }
  return { formulario: form, enviarData: enviarData };
}
