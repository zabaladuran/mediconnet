import { Stethoscope } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonDashboard from "../componentes/btton-dashboard";
import ButtonCitas from "../componentes/btton-citas";
import ButtonHistorialMedico from "../componentes/btton-Historialmedico";
import ButtonConfiguracion from "../componentes/btton-configuracion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useAut } from "@/funcionalidades/autenticacion/hooks";
import { Home, Calendar, FileText, Pill, Settings } from "lucide-react";

// Función para obtener iniciales
function getInitials(nombre = "") {
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const BarraNav = () => {
  const { cerrarSesion, credenciales } = useAut();

  // Simulación de datos de usuario (ajusta según tu backend)
  const nombre = credenciales?.nombreCompleto || "Usuario";
  const rol =
    credenciales?.tipoUsuario === "Medico"
      ? "Doctor"
      : credenciales?.tipoUsuario === "Paciente"
      ? "Paciente"
      : "Usuario";
  const foto = credenciales?.fotoPerfil; // Debe venir del backend si existe

  return (
    <Tabs defaultValue="Dashboard" className="w-full">
      <header className="bg-gray-100 shadow-md w-full mb-3">
        <nav>
          <TabsList className="flex items-center justify-between px-6 py-4 w-full bg-white">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <a
                className="flex items-center gap-2 text-xl font-bold text-green-600 hover:underline"
                href="/home"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#16a34a] text-white">
                  <Stethoscope className="size-4" />
                </div>
                Mediconnet
              </a>
            </div>

            {/* Pestañas */}
            <div className="flex space-x-4">
              <TabsTrigger value="Dashboard">
                <Home className="inline-block mr-2 w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="Citas">
                <Calendar className="inline-block mr-2 w-4 h-4" />
                Citas
              </TabsTrigger>
              <TabsTrigger value="Configuracion">
                <Settings className="inline-block mr-2 w-4 h-4" />
                Configuración
              </TabsTrigger>
            </div>

            {/* Perfil del usuario con Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-3 focus:outline-none">
                  {foto ? (
                    <img
                      src={foto}
                      alt="Perfil"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
                      {getInitials(nombre)}
                    </div>
                  )}
                  <div className="text-left hidden md:block">
                    <span className="block text-gray-600 font-medium">
                      {nombre}
                    </span>
                    <span className="block text-sm text-gray-500">{rol}</span>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={cerrarSesion}
                  className="flex items-center gap-2 text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TabsList>
        </nav>
      </header>

      {/* Contenido de las pestañas */}
      <TabsContent value="Dashboard">
        <ButtonDashboard /> {/* Muestra el contenido del componente */}
      </TabsContent>
      <TabsContent value="Citas">
        <ButtonCitas /> {/* Muestra el contenido del componente */}
      </TabsContent>
      <TabsContent value="Historial Medico">
        <ButtonHistorialMedico /> {/* Muestra el contenido del componente */}
      </TabsContent>
      <TabsContent value="Configuracion">
        <ButtonConfiguracion /> {/* Muestra el contenido del componente */}
      </TabsContent>
    </Tabs>
  );
};

export default BarraNav;
