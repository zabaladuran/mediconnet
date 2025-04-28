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
  const { iniciarSesion } = useAut();
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
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { email, password } = data;

      // LOGIN Y OBTENCION DE CREDENCIALES (BACKEND)
      let {
        exito: exitoSignIn,
        token,
        verficado: usuarioVerificado,
      } = await signInUsuario({
        email: email,
        pass: password,
      });
      if (!exitoSignIn) return toast.error("Crendenciales invalidas");
      const { exito: exitoTipoUsuario, tipoUsuario } = await obtenerTipoUsuario(
        {
          token: token,
        }
      );
      if (!exitoTipoUsuario) return toast.error("Crendenciales invalidas");
      iniciarSesion({
        correo: email,
        token: token,
        tipoUsuario: tipoUsuario,
        usuarioVerificado: usuarioVerificado,
      });

      // REDIRECCION CONDICIONAL
      if (!usuarioVerificado)
        return navigate("/verfication", { replace: true });
      if (tipoUsuario == "paciente")
        return navigate("/paciente/dashboard/home", { replace: true });
      if (tipoUsuario == "doctor")
        return navigate("/doctor/dashboard/home", { replace: true });
    } catch (e) {
    } finally {
      definirValidando(false);
    }
  }
  return { validando: validando, formulario: form, enviarData: enviarData };
}
