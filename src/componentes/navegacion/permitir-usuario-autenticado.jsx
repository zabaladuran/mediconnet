import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";

const PermitirUsuarioAutenticado = ({ to }) => {
  const { usuario } = useAut(); // Verifica si el usuario está autenticado
  return usuario ? <Outlet /> : <Navigate to={to} />; // Redirige si no está autenticado
};

export default PermitirUsuarioAutenticado;
