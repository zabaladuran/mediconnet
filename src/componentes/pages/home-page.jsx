import { Stethoscope } from "lucide-react";
import { Button } from "../../components/ui/button";
import ServiceCard from "../../funcionalidades/home/componentes/ServiceCard";

function HomePage() {
  console.log("home");
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
            MediconNet
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
            <Button
              variant="outline"
              className="text-[#16a34a] border-[#16a34a] hover:bg-green-100"
            >
              <a href="/auth/sign-in">Iniciar Sesión</a>
            </Button>
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="/auth/sign-up">Registrarse</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="inicio"
        className="relative bg-cover bg-center bg-no-repeat text-center py-16"
        style={{
          backgroundImage:
            "url('https://www.diagnosticorojas.com.ar/wp-content/uploads/2023/09/habitos-que-perjudican-la-salud-scaled.jpg')",
        }}
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido encima de la imagen */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">
            Tu salud en las mejores manos
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Sistema de gestión médica inteligente y segura para una atención más
            eficiente
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="/auth/sign-in">Agendar Cita</a>
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

      {/* Nuestros Servicios Section */}
      <div id="servicios" className="bg-gray-100 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <ServiceCard
            title="Gestión de Citas"
            description="Agenda, cancela y reprograma citas médicas fácilmente"
          />
          <ServiceCard
            title="Historial Clínico"
            description="Accede a tu historial médico completo"
          />
          <ServiceCard
            title="Gestión de Medicamentos"
            description="Control y seguimiento de medicamentos"
          />
          <ServiceCard
            title="Datos Seguros"
            description="Información protegida con encriptación"
          />
        </div>
      </div>

      {/* Sobre Nosotros Section */}
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
              En Mediconnet, nos dedicamos a revolucionar la atención médica a
              través de tecnología innovadora. Nuestro sistema integral permite
              una gestión eficiente y segura de la información médica.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Atención médica personalizada</li>
              <li>Equipo profesional altamente calificado</li>
              <li>Tecnología de vanguardia</li>
              <li>Compromiso con la excelencia</li>
            </ul>
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="#contacto">Conoce Nuestro Equipo</a>
            </Button>
          </div>
        </div>
      </div>

      {/* ¿Por qué elegirnos? Section */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          ¿Por qué elegirnos?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Atención 24/7"
            description="Acceso a tu información médica en cualquier momento y lugar"
          />
          <ServiceCard
            title="Equipo Especializado"
            description="Profesionales de la salud altamente calificados a tu servicio"
          />
          <ServiceCard
            title="Cuidado Integral"
            description="Seguimiento completo de tu salud y tratamientos médicos"
          />
        </div>
      </div>
      {/* Call to Action Section */}
      <div id="contacto" className="bg-green-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Comienza tu experiencia médica digital
        </h2>
        <p className="text-gray-600 mb-6">
          Únete a miles de pacientes que ya confían en nuestro sistema de
          gestión médica
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#16a34a] text-white hover:bg-green-700">
            <a href="/auth/sign-up">Registrarse</a>
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <h3 className="text-[#16a34a] text-xl font-bold mb-4">
              Mediconnet
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#16a34a]">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <i className="fas fa-phone-alt mr-2"></i> +1 234 567 890
              </li>
              <li className="text-gray-600">
                <i className="fas fa-envelope mr-2"></i> info@mediconnet.com
              </li>
              <li className="text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i> Calle Principal
                123, Ciudad
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4">
              Boletín Informativo
            </h4>
            <p className="text-gray-600 mb-4">
              Suscríbete para recibir noticias y actualizaciones
            </p>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-8">
          © 2024 Mediconnet. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default HomePage;
