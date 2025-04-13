import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-green-600 text-xl font-bold">Mediconnet</div>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="text-gray-800 hover:text-green-600">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-green-600">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-green-600">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-green-600">
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <link href="/sign-in" className="text-gray-800 hover:text-green-600"> 
            
            </link>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
              Iniciar Sesión
            </Button>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Registrarse
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-cover bg-center bg-no-repeat text-center py-16"
          style={{
          backgroundImage: "url('https://wallpapers.com/images/high/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.webp')",
          }}
      >
        <h1 className="text-4xl font-bold text-green-600">
          Tu salud en las mejores manos
        </h1>
        <p className="text-gray-600 mt-4">
          Sistema de gestión médica inteligente y segura para una atención más eficiente
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Agendar Cita
          </Button>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
            Conoce más
          </Button>
        </div>
      </div>

      {/* Servicios Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Gestión de Citas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Agenda, cancela y reprograma citas médicas fácilmente</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Historial Clínico</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Accede a tu historial médico completo</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Gestión de Medicamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Control y seguimiento de medicamentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Datos Seguros</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Información protegida con encriptación</p>
            </CardContent>
          </Card>
        </div>
      </div>
            {/* Sobre Nosotros Section */}
            <div className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://wallpapers.com/images/hd/hd-medical-health-icon-with-nurse-v1txjiifhv3bssoo.jpg"
              alt="Sobre Nosotros"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-4">
              En Mediconnet, nos dedicamos a revolucionar la atención médica a través de
              tecnología innovadora. Nuestro sistema integral permite una gestión eficiente y
              segura de la información médica.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Atención médica personalizada</li>
              <li>Equipo profesional altamente calificado</li>
              <li>Tecnología de vanguardia</li>
              <li>Compromiso con la excelencia</li>
            </ul>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Conoce Nuestro Equipo
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
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Atención 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Acceso a tu información médica en cualquier momento y lugar</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Equipo Especializado</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Profesionales de la salud altamente calificados a tu servicio</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Cuidado Integral</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Seguimiento completo de tu salud y tratamientos médicos</p>
            </CardContent>
          </Card>
        </div>
      </div>
            {/* Call to Action Section */}
            <div className="bg-green-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Comienza tu experiencia médica digital
        </h2>
        <p className="text-gray-600 mb-6">
          Únete a miles de pacientes que ya confían en nuestro sistema de gestión médica
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Registrarse
          </Button>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
            Contactar
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <h3 className="text-green-600 text-xl font-bold mb-4">Mediconnet</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
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
                <i className="fas fa-map-marker-alt mr-2"></i> Calle Principal 123, Ciudad
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Boletín Informativo</h4>
            <p className="text-gray-600 mb-4">
              Suscríbete para recibir noticias y actualizaciones
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700"
              >
                Suscribir
              </button>
            </form>
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
