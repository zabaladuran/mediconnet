import {
  enviarCorreoDeVerificacion,
  validarCodigoDeAutenticacion,
} from "../servicios/";
import { toast } from "sonner";
import { useAut } from "./useAut";
import { useState } from "react";
import { CLAVE_TOKEN_PARA_VERIFICACION_CODIGO } from "../data";
import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "../../../servicios/local-storage-controlardor";
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
  function guardarTokenCodigoVerificacion({ token }) {
    guardarEnLocalStorage({
      clave: CLAVE_TOKEN_PARA_VERIFICACION_CODIGO,
      data: token,
    });
  }
  function leerTokenCodigoVerificacion() {
    const token = obtenerDeLocalStorage({
      clave: CLAVE_TOKEN_PARA_VERIFICACION_CODIGO,
    });
    return token;
  }
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
      if (superoEnviosMaximos() || !superoElIntervaloDeReenvio()) {
        return toast.error("Superaste el numero maximo de envios permitidos");
      }

      // CONEXION CON EL BACKEND
      const response = await enviarCorreoDeVerificacion({
        token: credenciales.token,
      });

      // SAVING TOKEN FOR CODE VERIFICATION
      if (response.exito) {
        guardarTokenCodigoVerificacion({ token: response.tokenCodigo });
        toast.success("Tu codigo de verificacion fue enviado");
      }
      return response;
    } catch (e) {
      // FEEDBACK
      console.error("useQueryCode", e);
      toast.error("Lo sentimos, no se pudo enviar el código de verificación");
    }
  }

  async function validarCodigo({ codigo }) {
    try {
      // VALIDACION DE CONNECION
      if (!codigo || typeof codigo != "string") {
        throw Error("No se envió parámetro 'codigo'");
      }
      if (superoIntentosMaximos()) {
        return toast.error("Superaste el número máximo de intentos permitidos");
      }

      // DATA INPUT
      const tokenCodigoAut = leerTokenCodigoVerificacion();
      // CONEXION CON EL BACKEND
      const response = await validarCodigoDeAutenticacion({
        token: tokenCodigoAut,
        codigo: codigo,
      });

      // FEEBACK DE LA TRANSACCION
      if (response?.exito) {
        toast.success(response.sms);
        definirUsuarioFueAut(true);
        definirExitoValidacion(true);
      } else {
        toast.error(response?.sms || "Código incorrecto");
        definirExitoValidacion(false);
      }

      return response;
    } catch (e) {
      // FEEDBACK
      console.error("useQueryCode", e);
      toast.error("Lo sentimos, no se pudo validar el código de verificación");
      return { exito: false, sms: "Error inesperado al validar código" }; // <- Agregado para coherencia
    }
  }

  return {
    sendCode,
    validarCodigo,
    usuarioFueAut,
    exitoValidacion,
  };
}
