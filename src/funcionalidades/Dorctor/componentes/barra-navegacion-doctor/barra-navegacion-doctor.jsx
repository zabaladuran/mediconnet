import { Stethoscope, Home, LogOut, Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAut } from "@/funcionalidades/autenticacion/hooks";
import ConfiguracionDoctor from "../configuracion-doctor";
import { obtenerNombreDelUsuario } from "@/funcionalidades/autenticacion/servicios";

// Función para obtener iniciales
function getInitials(nombre = "") {
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const BarraNavegacionDoctor = ({ children }) => {
  const { cerrarSesion, credenciales } = useAut();
  const [nombre, setNombre] = useState("");
  const rol =
    credenciales?.tipoUsuario === "Medico"
      ? "Doctor"
      : credenciales?.tipoUsuario === "Paciente"
      ? "Paciente"
      : "Usuario";
  const foto = credenciales?.fotoPerfil;

  useEffect(() => {
    (async function () {
      if (credenciales?.token) {
        const res = await obtenerNombreDelUsuario({ token: credenciales.token });
        if (res?.nombre) setNombre(res.nombre);
        else setNombre("Doctor");
      }
    })();
  }, [credenciales?.token]);

  return (
    <Tabs defaultValue="Principal" className="w-full">
      <header className="bg-gray-100 shadow-md w-full mb-3">
        <nav>
          <TabsList className="flex items-center justify-between px-8 py-7 w-full bg-white">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <a
                className="flex items-center gap-2 text-xl font-bold text-green-600 hover:underline"
                href="/home"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16a34a] text-white">
                  <Stethoscope className="size-5" />
                </div>
                Mediconnet
              </a>
            </div>

            {/* Pestañas */}
            <div className="flex space-x-4">
              <TabsTrigger value="Principal">
                <Home className="inline-block mr-2 w-5 h-5" />
                Principal
              </TabsTrigger>
              <TabsTrigger value="Configuracion">
                <Settings className="inline-block mr-2 w-5 h-5" />
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
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
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

      {/* Contenido de la pestaña principal */}
      <TabsContent value="Principal">{children}</TabsContent>
      <TabsContent value="Configuracion">
        <ConfiguracionDoctor />
      </TabsContent>
    </Tabs>
  );
};

export default BarraNavegacionDoctor;
