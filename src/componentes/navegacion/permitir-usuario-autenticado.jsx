import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import { LoadingPage } from "../pages";

const PermitirUsuarioAutenticado = () => {
  const { credenciales, cargando } = useAut();
  if (cargando) return <LoadingPage />;
  return credenciales?.token ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};

export default PermitirUsuarioAutenticado;
