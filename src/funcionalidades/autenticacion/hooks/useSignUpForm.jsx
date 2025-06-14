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
      const signUpResponse = await signUpUsuario({
        email: email,
        pass: password,
        nombreCompleto: nombreCompleto,
        tipoUsuario: tipoUsuario,
      });
      if (!signUpResponse.exito) {
        return toast.error(signUpResponse.sms);
      }

      // LOADING LOCAL CREDENTIALS
      iniciarSesion({
        correo: email,
        token: signUpResponse.token,
        tipoUsuario: tipoUsuario,
        cuentaVerificada: signUpResponse.verificado,
      });

      // REDIRECCION CONDICIONAL
      if (!signUpResponse.verificado == "No Verificado")
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
