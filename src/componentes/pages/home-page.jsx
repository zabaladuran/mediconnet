import { Calendar } from "../../components/ui/calendar";
import { ServicioTarjeta } from "../../funcionalidades/home/componentes/tarjeta-servicio";
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-row justify-between">
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
        <ServicioTarjeta titulo="Atencio" descripcion="atencio en caso" />
      </div>
    </>
  );
}
export default HomePage;
