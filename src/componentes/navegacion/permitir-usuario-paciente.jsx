import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { PACIENTE } from "../../funcionalidades/autenticacion/data";
import { LoadingPage } from "../pages";
const PermitirUsuarioPaciente = () => {
  const { credenciales, cargando } = useAut();
  const { cuentaVerificada, token, tipoUsuario } = credenciales;
  if (cargando) return <LoadingPage />;
  if (!token) return <Navigate to="/auth/sign-in" />;
  if (cuentaVerificada == "No Verificad")
    return <Navigate to="/verification/email" />;
  if (!tipoUsuario == PACIENTE) return <Navigate to="/doctor/dashboard/home" />;
  return <Outlet />;
};

export default PermitirUsuarioPaciente;
