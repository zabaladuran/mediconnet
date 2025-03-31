import { Outlet, Navigate } from "react-router";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
const RutasProtegidasPorAut = ({ to }) => {
  const { usuario } = useAut();
  return usuario ? <Outlet /> : <Navigate to={to} />;
};

export default RutasProtegidasPorAut;
