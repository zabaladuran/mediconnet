import { Calendar } from "../../components/ui/calendar";
import { ServicioTarjeta } from "../../funcionalidades/home/componentes/tarjeta-servicio";
import HomeSVG from "./home-svg";
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <HomeSVG />
      <div className="flex flex-row justify-between">
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
      </div>
    </>
  );
}
export default HomePage;
