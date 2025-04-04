import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const BlockearUsuarioAutenticado = ({ to }) => {
  const { usuario } = useAut();
  return usuario ? <Navigate to={to} /> : <Outlet />;
};

export default BlockearUsuarioAutenticado;
