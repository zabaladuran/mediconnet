import { useForm } from "react-hook-form";
import { obtenerDeLocalStorage } from "../../../servicios";
import { zodResolver } from "@hookform/resolvers/zod";
import { CLAVE_CORREO_USUARIO } from "../data";
import { signInSchema } from "../zod";
import { useAut } from "../hooks";
import { toast } from "sonner";
import { obtenerTipoUsuario, signInUsuario } from "../servicios/";
import { useNavigate } from "react-router";
import { useState } from "react";

export function useSignInForm() {
  const { usuario, inciarSesion } = useAut();
  const [validando, definirValidando] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: obtenerDeLocalStorage({ clave: CLAVE_CORREO_USUARIO }) || "",
    },
  });

  async function enviarData(data) {
    try {
      definirValidando(true);
      const { email, password } = data;
      let { exito, tk } = await signInUsuario({
        email: email,
        pass: password,
      });

      if (exito) {
        const { exito, tipoUsuario } = await obtenerTipoUsuario({
          token: "kjkj",
        });
        if (exito) {
          if (tipoUsuario == "paciente")
            navigate("/paciente/dashboard/home", { replace: true });
          else if (tipoUsuario == "doctor")
            navigate("/doctor/dashboard/home", { replace: true });
          toast.success("Iniciando sesion...");
        } else {
          toast.error("Ops. ocuririo un error surante el envio de sus datos");
        }
      } else {
        toast.error("Crendenciales invalidas");
      }
      definirValidando(false);
    } catch (e) {
      toast.error(e);
    }
  }
  return { validando: validando, formulario: form, enviarData: enviarData };
}
