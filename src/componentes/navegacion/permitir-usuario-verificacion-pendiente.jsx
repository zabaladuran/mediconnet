import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { DOCTOR, PACIENTE } from "../../funcionalidades/autenticacion/data";
const PermitirUsuarioVerificacionPendiente = () => {
  const { credenciales } = useAut();
  const { cuentaVerificada, token, tipoUsuario } = credenciales;
  if (!token) return <Navigate to="/auth/sign-in" />;
  if (tipoUsuario == PACIENTE && cuentaVerificada)
    return <Navigate to="/doctor/dashboard/home" />;
  if (tipoUsuario == DOCTOR && cuentaVerificada)
    return <Navigate to="/doctor/dashboard/home" />;
  return <Outlet />;
};

export default PermitirUsuarioVerificacionPendiente;
