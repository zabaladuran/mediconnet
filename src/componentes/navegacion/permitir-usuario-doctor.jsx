import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { DOCTOR } from "../../funcionalidades/autenticacion/data";
import { LoadingPage } from "../pages";
const PermitirUsuarioDoctor = () => {
  const { credenciales, cargando } = useAut();
  const { cuentaVerificada, token, tipoUsuario } = credenciales;
  if (cargando) return <LoadingPage />;
  if (!token) return <Navigate to="/auth/sign-in" />;
  if (!cuentaVerificada) return <Navigate to="/verification/email" />;
  if (!tipoUsuario == DOCTOR) return <Navigate to="/paciente/dashboard/home" />;
  return <Outlet />;
};

export default PermitirUsuarioDoctor;
