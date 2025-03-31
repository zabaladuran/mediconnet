import { createContext, useState } from "react";
import { eliminarDeLocalStorage } from "../../../servicios";
export const ContextoDeAutenticacion = createContext({
  usuario: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export const ProveedorUsuario = ({ children }) => {
  const [usuario, definirUsuario] = useState(null);

  const iniciarSesion = ({ usuario }) => {
    definirUsuario(usuario);
    // guardar las credenciales de autenticacion necesarias para mantener la sesion
    guardarEnLocalStorage({
      clave: CLAVE_CORREO_USUARIO,
      valor: usuario.correo,
    });
    guardarEnLocalStorage({
      clave: CLAVE_TOKEN_AUTENTICACION_USUARIO,
      valor: usuario.tk,
    });
  };

  const cerrarSesion = () => {
    definirUsuario(null);
    // eliminar las credenciales de autenticacion
    eliminarDeLocalStorage(CLAVE_CORREO_USUARIO);
    eliminarDeLocalStorage(CLAVE_TOKEN_AUTENTICACION_USUARIO);
  };

  const recursosDeContexto = { usuario, iniciarSesion, cerrarSesion };
  return (
    <ContextoDeAutenticacion.Provider
      children={children}
      value={recursosDeContexto}
    />
  );
};
