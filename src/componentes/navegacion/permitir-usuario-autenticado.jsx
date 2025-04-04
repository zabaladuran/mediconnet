import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const PermitirUsuarioAutenticado = ({ to }) => {
  const { usuario } = useAut();
  return usuario ? <Outlet /> : <Navigate to={to} />;
};

export default PermitirUsuarioAutenticado;
