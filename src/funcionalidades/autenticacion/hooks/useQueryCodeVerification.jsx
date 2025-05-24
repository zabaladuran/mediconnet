import {
  enviarCorreoDeVerificacion,
  validarCodigoDeAutenticacion,
} from "../servicios/";
import { toast } from "sonner";
import { useAut } from "./useAut";
import { useState } from "react";

// FALTA MANEJO DE CARGA (VALIDANDO)
export function useQueryCodeVerification() {
  // RETRY SETTINGS
  const MAX_INTENTOS = 10;
  const INTERVALO_SEGUNDOS = 60;

  // HOOKS
  const { credenciales } = useAut();
  const [usuarioFueAut, definirUsuarioFueAut] = useState(false);
  const [exitoValidacion, definirExitoValidacion] = useState();

  // METHODS
  function superoEnviosMaximos() {
    return false;
  }
  function superoElIntervaloDeReenvio() {
    try {
      return true;
    } catch (e) {}
  }
  function superoIntentosMaximos() {
    return false;
  }
  async function sendCode() {
    try {
      // VALIDACION DE CONNECION
      if (superoEnviosMaximos() || !superoElIntervaloDeReenvio())
        return toast.error("Superaste el numero maximo de envios permitidos");

      // CONEXION CON EL BACKEND
      const response = await enviarCorreoDeVerificacion({
        token: credenciales.token,
      });

      // FEEBACK DE LA TRANSACCION
      response.exito ? toast.success(response.sms) : toast.error(response.sms);
    } catch (e) {
      // FEEDBACK
      console.error("useQueryCode", e);
      toast.error("Lo sentimos, no se puedo enviar el codigo de verificacion");
    }
  }
  async function validarCodigo({ codigo }) {
    try {
      // VALIDACION DE CONNECION
      if (!codigo || typeof codigo != "string") {
        throw Error("No se envio parametro 'codigo'");
      }
      if (superoIntentosMaximos())
        return toast.error("Superaste el numero maximo de intentos permitidos");

      // CONEXION CON EL BACKEND
      const response = await validarCodigoDeAutenticacion({
        token: credenciales.token,
        codigo: codigo,
      });

      // FEEBACK DE LA TRANSACCION
      if (response.exito) {
        toast.success(response.sms);
        definirUsuarioFueAut(true);
        definirExitoValidacion(true);
      } else {
        toast.error(response.sms);
        definirExitoValidacion(false);
      }
      return response;
    } catch (e) {
      // FEEDBACK
      console.error("useQueryCode", e);
      toast.error("Lo sentimos, no se puedo validar el codigo de verificacion");
    }
  }

  return {
    sendCode,
    validarCodigo,
    usuarioFueAut,
    exitoValidacion,
  };
}
