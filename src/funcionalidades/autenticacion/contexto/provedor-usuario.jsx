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
import { coerce } from "zod";
import { obtenerTipoUsuario, validarAutenticidadToken } from "../servicios/";

export const ContextoDeAutenticacion = createContext({
  usuario: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const [usuario, definirUsuario] = useState(null);

  function cerrarSesion() {
    definirUsuario(null);
    eliminarDeLocalStorage({ clave: CLAVE_TOKEN_AUTENTICACION_USUARIO });
    toast.success("Su sesion ha sido cerrada");
  }

  function iniciarSesion({ token, correo, tipoUsuario }) {
    if (
      !token ||
      !correo ||
      !tipoUsuario ||
      typeof token != "string" ||
      typeof correo != "string" ||
      typeof tipoUsuario != "string"
    )
      throw Error(
        "Ops, ocurrio un error. Parametros insuficientes para iniciar sesion"
      );
    definirUsuario({ token, tipoUsuario });
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

  useEffect(() => {
    const token = obtenerDeLocalStorage({
      clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
    });
    if (!token) return;

    const { exito: exitoAutenticidad, autenticidad } = validarAutenticidadToken(
      { token: token }
    );
    if (!exitoAutenticidad) return;
    if (!autenticidad) return toast.error("Estas intentando hackearnos?");
    const { exito: exitoTipoUsuario, tipoUsuario } = obtenerTipoUsuario({
      token: token,
    });
    if (!exitoTipoUsuario) return;

    definirUsuario({ token, tipoUsuario });
    return;
  }, []);

  const recursosDeContexto = { usuario, iniciarSesion, cerrarSesion };
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
