import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { PACIENTE } from "../../funcionalidades/autenticacion/data";
const PermitirUsuarioPaciente = () => {
  const { credenciales } = useAut();
  const { cuentaVerificada, token, tipoUsuario } = credenciales;
  if (!token) return <Navigate to="/auth/sign-in" />;
  if (!cuentaVerificada) return <Navigate to="/verification/email" />;
  if (!tipoUsuario == PACIENTE) return <Navigate to="/doctor/dashboard/home" />;
  return <Outlet />;
};

export default PermitirUsuarioPaciente;
