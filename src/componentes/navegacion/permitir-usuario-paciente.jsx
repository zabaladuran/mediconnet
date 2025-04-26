import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const PermitirUsuarioPaciente = ({ to }) => {
  const usuario = true;
  return usuario ? <Outlet /> : <Navigate to={to} />;
};

export default PermitirUsuarioPaciente;
