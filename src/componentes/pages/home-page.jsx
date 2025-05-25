import { Stethoscope } from "lucide-react";
import { Button } from "../../components/ui/button";
import ServiceCard from "../../funcionalidades/home/componentes/ServiceCard";
import { useAut } from "../../funcionalidades/autenticacion/contexto";
import { DOCTOR, PACIENTE } from "../../funcionalidades/autenticacion/data";
import { useNavigate } from "react-router";

function HomePage() {
  const { credenciales, cerrarSesion } = useAut();
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a
            href="/home"
            className="flex items-center gap-2 font-medium text-[#16a34a]"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#16a34a] text-white">
              <Stethoscope className="size-4" />
            </div>
            Mediconet
          </a>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#inicio" className="text-gray-800 hover:text-[#16a34a]">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-gray-800 hover:text-[#16a34a]"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="text-gray-800 hover:text-[#16a34a]"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-gray-800 hover:text-[#16a34a]"
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {credenciales.token ? (
              <>
                <Button
                  variant="outline"
                  className="text-[#16a34a] border-[#16a34a] hover:bg-green-100"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Button>
                <Button
                  className="bg-[#16a34a] text-white hover:bg-green-700"
                  onClick={() => {
                    if (credenciales.tipoUsuario === DOCTOR) {
                      navigate("/doctor/dashboard/home");
                    } else if (credenciales.tipoUsuario === PACIENTE) {
                      navigate("/paciente/dashboard/home");
                    }
                  }}
                >
                  Ir al Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="text-[#16a34a] border-[#16a34a] hover:bg-green-100"
                >
                  <a href="/auth/sign-in">Iniciar Sesión</a>
                </Button>
                <Button className="bg-[#16a34a] text-white hover:bg-green-700">
                  <a href="/auth/sign-up">Registrarse</a>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div
        id="inicio"
        className="relative bg-cover bg-center bg-no-repeat text-center py-16"
        style={{
          backgroundImage:
            "url('https://www.diagnosticorojas.com.ar/wp-content/uploads/2023/09/habitos-que-perjudican-la-salud-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">
            Atención médica donde la necesites
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Servicios médicos a domicilio 24/7 en Bucaramanga, Cúcuta y Santa
            Marta
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="/auth/sign-in">Solicitar Servicio</a>
            </Button>
            <Button
              variant="outline"
              className="text-[#16a34a] border-[#16a34a] hover:bg-green-100"
            >
              <a href="#nosotros">Conoce más</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div id="servicios" className="bg-gray-100 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <ServiceCard
            title="Atención Médica Domiciliaria"
            description="Consulta médica en la comodidad de tu hogar"
          />
          <ServiceCard
            title="Ambulancia Básica y Medicalizada"
            description="Traslados seguros y oportunos para emergencias"
          />
          <ServiceCard
            title="Pediatría a Domicilio"
            description="Atención especializada para niños en casa"
          />
          <ServiceCard
            title="Exámenes de Laboratorio"
            description="Pruebas clínicas sin salir de tu hogar"
          />
        </div>
      </div>

      {/* Nosotros */}
      <div id="nosotros" className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://wallpapers.com/images/hd/hd-medical-health-icon-with-nurse-v1txjiifhv3bssoo.jpg"
              alt="Sobre Nosotros"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 mb-4">
              Somos AME Asistencia Médica, con más de 30 años ofreciendo
              atención médica domiciliaria de calidad. Nuestra experiencia,
              compromiso humano y cobertura nacional nos hacen líderes en salud.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Servicio 24/7</li>
              <li>Planes familiares y corporativos</li>
              <li>Ambulancias con personal especializado</li>
              <li>Equipo médico altamente capacitado</li>
            </ul>
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Por qué elegirnos */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          ¿Por qué elegirnos?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Cobertura Nacional"
            description="Presencia en varias ciudades del país"
          />
          <ServiceCard
            title="Atención Humanizada"
            description="Nos enfocamos en el bienestar y dignidad del paciente"
          />
          <ServiceCard
            title="Experiencia Certificada"
            description="Más de 30 años cuidando la salud de los colombianos"
          />
        </div>
      </div>

      {/* CTA */}
      <div id="contacto" className="bg-green-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Cuidamos tu salud estés donde estés!
        </h2>
        <p className="text-gray-600 mb-6">
          Comunícate con nosotros para recibir atención médica en casa, las 24
          horas.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#16a34a] text-white hover:bg-green-700">
            <a href="/auth/sign-up">Afíliate Ahora</a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y redes */}
          <div>
            <h3 className="text-[#16a34a] text-xl font-bold mb-4">
              Mediconnet
            </h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-[#16a34a] hover:text-green-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#16a34a] hover:text-green-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#16a34a] hover:text-green-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#16a34a] hover:text-green-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4">Enlaces de Interés</h4>
            <ul className="space-y-2">
              <li>Asistencia Medica S.A.S</li>
              <li>Política de protección de datos</li>
              <li>Estados Financieros</li>
              <li>Servicio de Asistencia Medica Inmediata SAMI S.A</li>
              <li>Política protección de datos</li>
              <li>Estados Financieros</li>
              <li>Línea ética</li>
            </ul>
          </div>
          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="mb-4">
              <span className="font-semibold text-[#16a34a]">Bucaramanga</span>
              <div className="text-gray-700 text-sm">
                Avenida González Valencia
                <br />
                Calle 53 No. 29-36
                <br />
                <strong>PBX:</strong> (607) 657 7171
                <br />
                <strong>Emergencias:</strong> (607) 657 7171 Opción 1
                <br />
                <strong>Cel:</strong> 316-4736949
                <br />
                <strong>Correo Judiciales:</strong> siau@amesalud.com
              </div>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-[#16a34a]">Santa Marta</span>
              <div className="text-gray-700 text-sm">
                Avenida del Libertador No. 16D – 21
                <br />
                <strong>PBX:</strong> (605) 4237201
                <br />
                <strong>Emergencias:</strong> PBX: (605) 4237201 Opción 1
                <br />
                <strong>Cel:</strong> 316-4736949
                <br />
                <strong>Correo Judiciales:</strong> siausantamarta@amesalud.com
              </div>
            </div>
            <div>
              <span className="font-semibold text-[#16a34a]">Cúcuta</span>
              <div className="text-gray-700 text-sm">
                Avenida 5E No. 9 – 07
                <br />
                Urbanización Sayago
                <br />
                <strong>PBX:</strong> (607) 574 8942 Opción 1
                <br />
                <strong>Emergencias:</strong> (607) 574 8942
                <br />
                <strong>Cel:</strong> 316-4736949
                <br />
                <strong>Correo Judiciales:</strong> siaucucuta@amesalud.com
              </div>
            </div>
          </div>
          {/* Boletín */}
          <div>
            <h4 className="font-bold mb-4">Boletín Informativo</h4>
            <p className="mb-4 text-gray-700">
              Suscríbete para recibir noticias y actualizaciones
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#16a34a] text-white px-4 py-2 rounded-r hover:bg-green-700"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2024 Mediconnet. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default HomePage;
