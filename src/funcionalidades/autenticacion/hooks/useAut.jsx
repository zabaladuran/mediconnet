import { useContext } from "react";
import { ContextoDeAutenticacion } from "../contexto/provedor-usuario";

export const useAut = () => {
  const contexto = useContext(ContextoDeAutenticacion);
  if (contexto === null)
    throw new Error("useAut debe estar dentro del ProveedorUsuario");
  return contexto;
};
