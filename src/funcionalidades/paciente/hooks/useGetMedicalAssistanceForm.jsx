import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EsquemaAgendarCita } from "../zod";
import { useAut } from "../hooks";
import { toast } from "sonner";
import { signInUsuario } from "../servicios/";
import { useNavigate } from "react-router";
import { useState } from "react";

export function useSignInForm() {
  const { credenciales } = useAut();
  const [validando, definirValidando] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(EsquemaAgendarCita),
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { servicio, profesional, cargo, observaciones } = data;

      //

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
