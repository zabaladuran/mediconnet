import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const BlockearUsuarioAutenticado = ({ to }) => {
  const usuario = false;
  return usuario ? <Navigate to={to} /> : <Outlet />;
};

export default BlockearUsuarioAutenticado;
