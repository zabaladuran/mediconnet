import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { DOCTOR } from "../../funcionalidades/autenticacion/data";
const PermitirUsuarioDoctor = () => {
  const { credenciales } = useAut();
  const { cuentaVerificada, token, tipoUsuario } = credenciales;
  if (!token) return <Navigate to="/auth/sign-in" />;
  if (!cuentaVerificada) return <Navigate to="/auth/verification" />;
  if (!tipoUsuario == DOCTOR) return <Navigate to="/paciente/dashboard/home" />;
  return <Outlet />;
};

export default PermitirUsuarioDoctor;
