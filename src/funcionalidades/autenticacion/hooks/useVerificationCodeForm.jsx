import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { codeVerificationSchema } from "../zod";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAut } from "./useAut";
import { PACIENTE, DOCTOR } from "../data";
import { useQueryCodeVerification } from "../hooks";

export function useVerificationCodeForm({ validarCodigoQuery }) {
  const { validarCodigoDeAutenticacion } = useQueryCodeVerification();
  const [validando, definirValidando] = useState(false);
  const { credenciales, autenticarUsuario } = useAut();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(codeVerificationSchema),
  });

  async function verificarCodigo(data) {
    try {
      //  ENTRADA DE DATOS DE INICIO DE SESION
      definirValidando(true);
      const { code } = data;

      // VERIFICACION DEL CODIGO (BACKEND)
      const response = await validarCodigoQuery({ codigo: code });
      if (response.exito) {
        toast.success(response.sms);
        autenticarUsuario();
      } else {
        toast.error(response.sms);
      }

      const { tipoUsuario, cuentaVerificada } = credenciales;
      // REDIRECCION CONDICIONAL
      if (tipoUsuario == PACIENTE && cuentaVerificada)
        return navigate("/paciente/dashboard/home", { replace: true });
      if (tipoUsuario == DOCTOR && cuentaVerificada)
        return navigate("/doctor/dashboard/home", { replace: true });
    } catch (e) {
      toast.error(
        "Lo sentimos, nuestros servicios internos estan presentando fallas"
      );
      console.error(e);
    } finally {
      definirValidando(false);
    }
  }

  return {
    validando: form.formState.isSubmitting,
    formulario: form,
    verificarCodigo: verificarCodigo,
  };
}
