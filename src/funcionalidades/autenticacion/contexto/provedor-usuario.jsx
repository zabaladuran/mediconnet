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

export const ContextoDeAutenticacion = createContext({
  usuario: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const [usuario, definirUsuario] = useState(null);

  const guardarCrendencialesAut = ({ tk, correo }) => {
    try {
      if (!tk && !correo) throw Error("Parametros insuficientes");
      if (correo) {
        guardarEnLocalStorage({
          clave: CLAVE_CORREO_USUARIO,
          data: correo,
        });
      }
      if (tk) {
        guardarEnLocalStorage({
          clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
          data: tk,
        });
      }
    } catch (error) {
      toast.error(`Error durante guardado de credenciales: ${error}`);
    }
  };
  const eliminarCrendencialesAut = () => {
    try {
      eliminarDeLocalStorage({ clave: CLAVE_CORREO_USUARIO });
      eliminarDeLocalStorage({ clave: CLAVE_TOKEN_AUTENTICACION_USUARIO });
    } catch (error) {
      toast.error(
        `Error durante la eliminacion de crendenciales locales: ${error}`
      );
    }
  };
  const obtenerCrendencialesAut = () => {
    try {
      const tk = obtenerDeLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      });
      const correo = obtenerDeLocalStorage({
        clave: CLAVE_CORREO_USUARIO,
      });
      return { tk, correo };
    } catch (error) {
      toast.error(
        `Error durante obtencion de credenciales de usuario: ${error}`
      );
    }
  };
  const validarCrendenciales = () => {
    try {
      const { tk } = obtenerCrendencialesAut();
      if (!tk) return false;
      // Si existe un token de auntenticacion invalido eliminarlo del navegador del usuario
      // Validar tk
      // Si es valido reporta credenciales validas
      // Si no es valido eliminar crendenciales y reportas credenciales invalidas
      return true;
    } catch (error) {
      toast.error(`Error durante la validacion de crendenciales: ${error}`);
    }
  };
  const obtenerInfoUsuario = () => {
    return {
      correo: "jondoe@gmail.com",
      tk: "jondoe@gmail.com",
      grupoSanguineo: "O+",
    };
  };
  const iniciarSesion = ({ usuario }) => {
    const validacionDeCrendenciales = validarCrendenciales();
    try {
      const infoUsuario = obtenerInfoUsuario();
      if (!infoUsuario)
        throw Error("No se puedo obtener la informacion de su cuenta");
      definirUsuario(infoUsuario);
      guardarCrendencialesAut({ infoUsuario });

      // guardar las credenciales locales de autenticacion necesarias para mantener la sesion
      definirUsuario(usuario);
      guardarEnLocalStorage({
        clave: CLAVE_CORREO_USUARIO,
        data: usuario.correo,
      });
      guardarEnLocalStorage({
        clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
        data: usuario.tk,
      });
    } catch (error) {
      toast.error(`Error durante incio de sesion: ${error}`);
    }
  };

  const cerrarSesion = () => {
    // eliminar las credenciales locales de autenticacion
    definirUsuario(null);
    eliminarDeLocalStorage({ clave: CLAVE_CORREO_USUARIO });
    eliminarDeLocalStorage({ clave: CLAVE_TOKEN_AUTENTICACION_USUARIO });
  };

  // byPassAut();
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
