import { createContext, useState, useEffect } from "react";
import {
  eliminarDeLocalStorage,
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "../../../servicios";
import {
  CLAVE_CORREO_USUARIO,
  CLAVE_TOKEN_AUTENTICACION_USUARIO,
} from "../data/variables-de-autenticacion";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import {
  obtenerTipoUsuario,
  validarAutenticidadToken,
  validarCuentaVerificada,
} from "../servicios/";

export const ContextoDeAutenticacion = createContext({
  credenciales: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const [credenciales, definirCredenciales] = useState({
    token: null,
    tipoUsuario: null,
    cuentaVerificada: null,
  });
  const navigate = useNavigate();
  function cerrarSesion() {
    definirCredenciales({
      token: null,
      tipoUsuario: null,
      cuentaVerificada: null,
    });
    eliminarDeLocalStorage({ clave: CLAVE_TOKEN_AUTENTICACION_USUARIO });
    toast.success("Su sesion ha sido cerrada");
  }
  function iniciarSesion({ token, correo, tipoUsuario, cuentaVerificada }) {
    if (
      !token ||
      !correo ||
      !tipoUsuario ||
      typeof token != "string" ||
      typeof correo != "string" ||
      typeof tipoUsuario != "string" ||
      typeof cuentaVerificada != "boolean"
    )
      throw Error(
        "Ops, ocurrio un error. Parametros insuficientes para iniciar sesion"
      );
    definirCredenciales({
      token: token,
      tipoUsuario: tipoUsuario,
      cuentaVerificada: cuentaVerificada,
    });
    guardarEnLocalStorage({
      clave: CLAVE_CORREO_USUARIO,
      data: correo,
    });
    guardarEnLocalStorage({
      clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      data: token,
    });
    toast.success("Sesion iniciada");
  }

  function autenticarUsuario() {
    definirCredenciales({
      token: credenciales.token,
      tipoUsuario: credenciales.tipoUsuario,
      cuentaVerificada: true,
    });
  }

  useEffect(() => {
    async function intentarRestaurarSesion() {
      // ENTRADA DE CREDENCIALES LOCALES
      const token = obtenerDeLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      });
      if (!token) return;

      // ENTRADA DE CREDENCIALES BACKEND
      const { exito: exitoAutenticidad, autentico } =
        await validarAutenticidadToken({ token: token });
      if (!exitoAutenticidad)
        return toast.error(
          "Estamos experimentando unos errores durante la carga de tus credenciales."
        );
      if (!autentico) return toast.error("Estas intentando hackearnos?");
      const { exito: exitoTipoUsuario, tipoUsuario } = await obtenerTipoUsuario(
        {
          token: token,
        }
      );
      const { exito: exitoVerificacion, verificado: cuentaVerificada } =
        await validarCuentaVerificada({
          token,
        });
      if (!exitoTipoUsuario || !exitoVerificacion)
        return toast.error(
          "Estamos experimentando unos errores durante la carga de tus credenciales"
        );

      // INICIAR SESION
      definirCredenciales({
        token: token,
        tipoUsuario: tipoUsuario,
        cuentaVerificada: cuentaVerificada,
      });
    }
    intentarRestaurarSesion();
  }, []);

  const recursosDeContexto = {
    credenciales,
    iniciarSesion,
    cerrarSesion,
    autenticarUsuario,
  };
  return (
    <ContextoDeAutenticacion.Provider
      children={children}
      value={recursosDeContexto}
    />
  );
};

function byPassAut() {
  guardarEnLocalStorage({
    clave: CLAVE_CORREO_USUARIO,
    data: "nicolascardenas@gmail.com",
  });
  guardarEnLocalStorage({
    clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
    data: "nicolascardenas@gmail.com",
  });
}
