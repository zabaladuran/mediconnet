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
export const ContextoDeAutenticacion = createContext({
  usuario: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const [usuario, definirUsuario] = useState(null);

  const iniciarSesion = ({ usuario }) => {
    try {
      definirUsuario(usuario); // Error
      // guardar las credenciales de autenticacion necesarias para mantener la sesion
      guardarEnLocalStorage({
        clave: CLAVE_CORREO_USUARIO,
        data: usuario.correo,
      });
      guardarEnLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
        data: usuario.tk,
      });
    } catch (error) {
      console.error(`Error durante incio de sesion: ${error}`);
    }
  };

  const cerrarSesion = () => {
    definirUsuario(null);
    // eliminar las credenciales de autenticacion
    eliminarDeLocalStorage(CLAVE_CORREO_USUARIO);
    eliminarDeLocalStorage(CLAVE_TOKEN_AUTENTICACION_USUARIO);
  };

  byPassAut();
  useEffect(() => {
    try {
      const autToken = obtenerDeLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      });

      // Si el existe un token de autenticacion almacenado en el navegador del usuario intentar inciar sesion
      // Si existe un token de auntenticacion invalido eliminarlo del navegador del usuario
      if (autToken) {
        const autTkEsValido = true;
        if (autTkEsValido) {
          // ======================================
          const correo = obtenerDeLocalStorage({
            clave: CLAVE_CORREO_USUARIO,
          });
          // ======================================
          const usuario = { correo, tk: autToken };
          iniciarSesion({ usuario });
        } else
          eliminarDeLocalStorage({ clave: CLAVE_TOKEN_AUTENTICACION_USUARIO });
      }
    } catch (e) {
      console.error(e);
    }
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
