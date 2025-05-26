import { Globe, HeartHandshake, BadgeCheck } from "lucide-react";
import {
  Stethoscope,
  Ambulance,
  Baby,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
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
                  className="text-[#16a34a] border-[#16a34a] hover:bg-green-100 cursor-pointer"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Button>
                <Button
                  className="bg-[#16a34a] text-white hover:bg-green-700 cursor-pointer"
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
                  className="text-[#16a34a] border-[#16a34a] hover:bg-green-100 cursor-pointer"
                  onClick={() => (window.location.href = "/auth/sign-in")}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  className="bg-[#16a34a] text-white hover:bg-green-700 cursor-pointer"
                  onClick={() => (window.location.href = "/auth/sign-up")}
                >
                  Registrarse
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
            <Button
              className="bg-[#16a34a] text-white hover:bg-green-700 cursor-pointer"
              onClick={() => (window.location.href = "/auth/sign-in")}
            >
              Solicitar Servicio
            </Button>
            <Button
              variant="outline"
              className="text-[#16a34a] border-[#16a34a] hover:bg-green-100 cursor-pointer"
              onClick={() => (window.location.href = "#nosotros")}
            >
              Conoce más
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
            icon={
              <Stethoscope className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />
            }
            title="Atención Médica Domiciliaria"
            description="Consulta médica en la comodidad de tu hogar"
          />
          <ServiceCard
            icon={
              <Ambulance className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />
            }
            title="Ambulancia Básica y Medicalizada"
            description="Traslados seguros y oportunos para emergencias"
          />
          <ServiceCard
            icon={<Baby className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />}
            title="Pediatría a Domicilio"
            description="Atención especializada para niños en casa"
          />
          <ServiceCard
            icon={
              <FlaskConical className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />
            }
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
            <Button
              className="bg-[#16a34a] text-white hover:bg-green-700 cursor-pointer"
              onClick={() => (window.location.href = "#contacto")}
            >
              Contáctanos
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
            icon={<Globe className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />}
            title="Cobertura Nacional"
            description="Presencia en varias ciudades del país"
          />
          <ServiceCard
            icon={
              <HeartHandshake className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />
            }
            title="Atención Humanizada"
            description="Nos enfocamos en el bienestar y dignidad del paciente"
          />
          <ServiceCard
            icon={
              <BadgeCheck className="text-[#16a34a] w-10 h-10 mb-2 mx-auto" />
            }
            title="Experiencia Certificada"
            description="Más de 30 años cuidando la salud de los colombianos"
          />
        </div>
      </div>

      {/* CTA */}
      <div
        id="contacto"
        className="bg-green-50 py-16 text-center relative overflow-hidden"
      >
        {/* Fondo decorativo */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20"></div>
        {/* Icono central */}
        <HeartPulse className="mx-auto mb-6 w-16 h-16 text-[#16a34a] animate-bounce" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Cuidamos tu salud estés donde estés!
        </h2>
        <p className="text-gray-600 mb-6">
          Comunícate con nosotros para recibir atención médica en casa, las 24
          horas.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-4 mb-6 text-[#16a34a] font-medium">
          <li className="flex items-center gap-2">
            <i className="fas fa-user-md"></i> Atención personalizada
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-clock"></i> Disponibilidad 24/7
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-shield-heart"></i> Confidencialidad y seguridad
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          <Button
            className="bg-[#16a34a] text-white hover:bg-green-700 cursor-pointer"
            type="button"
            onClick={() => (window.location.href = "/auth/sign-up")}
          >
            Afíliate Ahora
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8">
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
          {/* Contacto horizontal */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              {/* Bucaramanga */}
              <div>
                <span className="font-semibold text-[#16a34a] block mb-1">
                  Bucaramanga
                </span>
                <div className="text-gray-700 text-sm">
                  <span>Avenida González Valencia, Calle 53 No. 29-36</span>
                  <br />
                  <span>
                    <strong>PBX:</strong> (607) 657 7171
                  </span>
                  <br />
                  <span>
                    <strong>Emergencias:</strong> (607) 657 7171 Opción 1
                  </span>
                  <br />
                  <span>
                    <strong>Cel:</strong> 316-4736949
                  </span>
                  <br />
                  <span>
                    <strong>Correo Judiciales:</strong> siau@amesalud.com
                  </span>
                </div>
              </div>
              {/* Santa Marta */}
              <div>
                <span className="font-semibold text-[#16a34a] block mb-1">
                  Santa Marta
                </span>
                <div className="text-gray-700 text-sm">
                  <span>Avenida del Libertador No. 16D – 21</span>
                  <br />
                  <span>
                    <strong>PBX:</strong> (605) 4237201
                  </span>
                  <br />
                  <span>
                    <strong>Emergencias:</strong> PBX: (605) 4237201 Opción 1
                  </span>
                  <br />
                  <span>
                    <strong>Cel:</strong> 316-4736949
                  </span>
                  <br />
                  <span>
                    <strong>Correo Judiciales:</strong>{" "}
                    siausantamarta@amesalud.com
                  </span>
                </div>
              </div>
              {/* Cúcuta */}
              <div>
                <span className="font-semibold text-[#16a34a] block mb-1">
                  Cúcuta
                </span>
                <div className="text-gray-700 text-sm">
                  <span>Avenida 5E No. 9 – 07, Urbanización Sayago</span>
                  <br />
                  <span>
                    <strong>PBX:</strong> (607) 574 8942 Opción 1
                  </span>
                  <br />
                  <span>
                    <strong>Emergencias:</strong> (607) 574 8942
                  </span>
                  <br />
                  <span>
                    <strong>Cel:</strong> 316-4736949
                  </span>
                  <br />
                  <span>
                    <strong>Correo Judiciales:</strong> siaucucuta@amesalud.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2024 Mediconnet. Todos los derechos reservados.
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
}

export default HomePage;
