import { useForm } from "react-hook-form";
import { obtenerDeLocalStorage } from "../../../servicios";
import { zodResolver } from "@hookform/resolvers/zod";
import { CLAVE_CORREO_USUARIO } from "../data";
import { signUpSchema } from "../zod";
import { useAut } from "../hooks";
import { toast } from "sonner";
import { obtenerTipoUsuario, signUpUsuario } from "../servicios/";
import { useNavigate } from "react-router";
import { useState } from "react";
import { PACIENTE, DOCTOR } from "../data";

export function useSignUpForm() {
  const { iniciarSesion } = useAut();
  const [validando, definirValidando] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: obtenerDeLocalStorage({ clave: CLAVE_CORREO_USUARIO }) || "",
    },
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { nombreCompleto, email, password, tipoUsuario } = data;

      // SIGNUP Y OBTENCION DE CREDENCIALES (BACKEND)
      let {
        exito: exitoSignUp,
        token,
        verificado: cuentaVerificada,
      } = await signUpUsuario({
        email: email,
        pass: password,
        nombreCompleto: nombreCompleto,
        tipoUsuario: tipoUsuario,
      });
      if (!exitoSignUp) return toast.error("Crendenciales invalidas");
      iniciarSesion({
        correo: email,
        token: token,
        tipoUsuario: tipoUsuario,
        cuentaVerificada: cuentaVerificada,
      });

      // REDIRECCION CONDICIONAL
      if (!cuentaVerificada)
        return navigate("/verification/email", { replace: true });
      if (tipoUsuario == PACIENTE)
        return navigate("/paciente/dashboard/home", { replace: true });
      if (tipoUsuario == DOCTOR)
        return navigate("/doctor/dashboard/home", { replace: true });
    } catch (e) {
    } finally {
      definirValidando(false);
    }
  }
  return { validando: validando, formulario: form, enviarData: enviarData };
}
