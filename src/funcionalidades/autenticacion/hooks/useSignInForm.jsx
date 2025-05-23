import { useForm } from "react-hook-form";
import { obtenerDeLocalStorage } from "../../../servicios";
import { zodResolver } from "@hookform/resolvers/zod";
import { CLAVE_CORREO_USUARIO, DOCTOR, PACIENTE } from "../data";
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
      pass: "", // contraseña vacía por defecto
    },
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { email, pass } = data;

      // SIGNIN REQUEST
      const signInResponse = await signInUsuario({
        email: email,
        pass: pass,
      });
      if (!signInResponse.exito) {
        return toast.error("Crendenciales invalidas");
      }

      // SIGN IN (LOCAL CREDENTIALS)
      iniciarSesion({
        correo: email,
        token: signInResponse.token,
        tipoUsuario: signInResponse.tipoUsuario,
        cuentaVerificada: signInResponse.cuentaVerificada,
      });

      // REDIRECCION CONDICIONAL
      if (!signInResponse.cuentaVerificada)
        return navigate("/verification/email", { replace: true });
      if (signInResponse.tipoUsuario == PACIENTE)
        return navigate("/paciente/dashboard/home", { replace: true });
      if (signInResponse.tipoUsuario == DOCTOR)
        return navigate("/doctor/dashboard/home", { replace: true });
    } catch (e) {
      toast.error("Error durante el envio de datos...");
      console.error(e);
    } finally {
      definirValidando(false);
    }
  }
  return { validando: validando, formulario: form, enviarData: enviarData };
}
