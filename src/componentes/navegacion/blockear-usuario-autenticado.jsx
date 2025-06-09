import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { DOCTOR } from "../../funcionalidades/autenticacion/data";
import { LoadingPage } from "../pages";
const BlockearUsuarioAutenticado = () => {
  const { credenciales, cargando } = useAut();
  const { token, tipoUsuario } = credenciales;
  console.log(cargando);
  if (cargando) return <LoadingPage />;
  if (token == null) return <Outlet />;
  return tipoUsuario == DOCTOR ? (
    <Navigate to="/doctor/dashboard/home" />
  ) : (
    <Navigate to="/paciente/dashboard/home" />
  );
};

export default BlockearUsuarioAutenticado;
