import { enviarCorreoDeVerificacion } from "../servicios/";
import { toast } from "sonner";
import { useAut } from "./useAut";
import { useState } from "react";

export function useQueryCodeVerification() {
  // RETRY SETTINGS
  const MAX_INTENTOS = 10;
  const INTERVALO_SEGUNDOS = 60;

  // HOOKS
  const { credenciales } = useAut();

  // METHODS
  function superoEnviosMaximos() {
    return true;
  }
  function superoElIntervaloDeReenvio() {
    try {
      return true;
    } catch (e) {}
  }
  async function sendCode() {
    try {
      // VALIDACION DE CONNECION
      if (superoEnviosMaximos() || !superoElIntervaloDeReenvio()) return;

      // CONEXION CON EL BACKEND
      const response = await enviarCorreoDeVerificacion({
        token: credenciales.token,
      });

      // FEEBACK DE LA TRANSACCION
      response.exito ? toast.success(response.sms) : toast.error(response.sms);

      return response;
    } catch (e) {}
  }
  async function validarCodigoDeAutenticacion({ code }) {
    try {
      const response = await validarCodigoDeAutenticacion({
        token: credenciales.token,
        codigo: code,
      });
      return response;
    } catch (e) {}
  }

  return { sendCode, validarCodigoDeAutenticacion };
}
