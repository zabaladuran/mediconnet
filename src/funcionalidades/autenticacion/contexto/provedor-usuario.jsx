import { createContext, useState, useEffect, useRef } from "react";
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
  confirmarTokenValido,
  obtenerEstadoDeVerificacion,
} from "../servicios/";

export const ContextoDeAutenticacion = createContext({
  credenciales: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const seIntentoVerificacion = useRef(false);
  const [cargando, definirCargando] = useState(true);
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
      typeof token !== "string" ||
      typeof correo !== "string" ||
      typeof tipoUsuario !== "string" ||
      typeof cuentaVerificada !== "boolean"
    ) {
      throw Error(
        "Ops, ocurrio un error. Parametros insuficientes para iniciar sesion"
      );
    }

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
      const token = obtenerDeLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      });

      if (!token) {
        definirCargando(false);
        return;
      }

      const { exito: exitoAutenticidad, sms } = await confirmarTokenValido({
        token,
      });
      if (!exitoAutenticidad) {
        definirCargando(false);
        return toast.error(sms || "Error al validar autenticidad del token");
      }

      const { exito: exitoTipoUsuario, tipoUsuario } = await obtenerTipoUsuario(
        {
          token,
        }
      );

      const {
        exito: exitoVerificacion,
        estado: cuentaVerificada,
        sms: smsVerificacion,
      } = await obtenerEstadoDeVerificacion({ token });

      if (!exitoTipoUsuario || !exitoVerificacion) {
        definirCargando(false);
        return toast.error(
          smsVerificacion || sms || "Error al obtener datos del usuario"
        );
      }

      definirCredenciales({
        token: token,
        tipoUsuario: tipoUsuario,
        cuentaVerificada: cuentaVerificada,
      });

      definirCargando(false);
    }

    if (!seIntentoVerificacion.current) {
      intentarRestaurarSesion();
    }

    seIntentoVerificacion.current = true;
  }, []);

  const recursosDeContexto = {
    credenciales,
    cargando,
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
