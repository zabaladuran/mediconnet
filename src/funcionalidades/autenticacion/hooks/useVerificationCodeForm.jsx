import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { codeVerificationSchema } from "../zod";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAut } from "./useAut";
import { PACIENTE, DOCTOR } from "../data";
export function useVerificationCodeForm() {
  const [validando, definirValidando] = useState(false);
  const { credenciales, autenticarUsuario } = useAut();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(codeVerificationSchema),
  });

  async function enviarData(data) {
    try {
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { code } = data;

      // VERIFICACION DEL CODIGO (BACKEND)
      if (!code) return;
      autenticarUsuario();
      const { tipoUsuario, cuentaVerificada } = credenciales;

      // REDIRECCION CONDICIONAL
      if (!cuentaVerificada)
        return navigate("/auth/verfication", { replace: true });
      if (tipoUsuario == PACIENTE)
        return navigate("/paciente/dashboard/home", { replace: true });
      if (tipoUsuario == DOCTOR)
        return navigate("/doctor/dashboard/home", { replace: true });
    } catch (e) {
      toast.error("Error al verificar el código");
      console.error(e);
    } finally {
      definirValidando(false);
    }
  }
  return { validando: validando, formulario: form, enviarData: enviarData };
}
