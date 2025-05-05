import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";

const PermitirUsuarioAutenticado = () => {
  const { usuario } = useAut(); // Verifica si el usuario está autenticado
  return usuario?.token ? <Outlet /> : <Navigate to="/auth/sign-in" />; // Redirige si no está autenticado
};

export default PermitirUsuarioAutenticado;
