import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { DOCTOR } from "../../funcionalidades/autenticacion/data";
const BlockearUsuarioAutenticado = () => {
  const { credenciales } = useAut();
  const { token, tipoUsuario } = credenciales;
  if (!token) return <Outlet />;
  return tipoUsuario == DOCTOR ? (
    <Navigate to="/doctor/dashboard/home" />
  ) : (
    <Navigate to="/paciente/dashboard/home" />
  );
};

export default BlockearUsuarioAutenticado;
