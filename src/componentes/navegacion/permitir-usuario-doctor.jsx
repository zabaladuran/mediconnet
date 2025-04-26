import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const PermitirUsuarioDoctor = ({ to }) => {
  const usuario = true;
  return usuario ? <Outlet /> : <Navigate to={to} />;
};

export default PermitirUsuarioDoctor;
