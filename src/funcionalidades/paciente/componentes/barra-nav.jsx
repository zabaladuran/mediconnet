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
import { useEffect } from "react";
import { obtenerNombreDelUsuario } from "../../autenticacion/servicios";
import { AvatarFallback, Avatar } from "../../../components/ui/avatar";
import { useState } from "react";
const BarraNav = () => {
  const { cerrarSesion, credenciales } = useAut();
  const [nombre, definirNombre] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");

  // Obtener nombre del usuario desde el backend
  useEffect(() => {
    (async function () {
      if (credenciales?.token) {
        const res = await obtenerNombreDelUsuario({ token: credenciales.token });
        // res.nombre puede ser el nombre completo o un objeto, ajusta según tu backend
        if (res?.nombre) {
          definirNombre(res.nombre[0].toUpperCase());
          setNombreCompleto(res.nombre);
        } else {
          definirNombre("U");
          setNombreCompleto(credenciales?.nombreCompleto || "Usuario");
        }
      }
    })();
  }, [credenciales?.token, credenciales?.nombreCompleto]);

  const rol =
    credenciales?.tipoUsuario === "Medico"
      ? "Doctor"
      : credenciales?.tipoUsuario === "Paciente"
      ? "Paciente"
      : "Usuario";
  const foto = credenciales?.fotoPerfil;

  return (
    <Tabs defaultValue="Dashboard" className="w-full">
      <header className="bg-gray-100 shadow-md w-full mb-3">
        <nav>
          <TabsList className="flex items-center justify-between px-8 py-7 w-full bg-white">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <a
                className="flex items-center gap-2 text-2xl font-bold text-green-600 hover:underline"
                href="/home"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16a34a] text-white">
                  <Stethoscope className="size-5" />
                </div>
                Mediconnet
              </a>
            </div>

            {/* Pestañas */}
            <div className="flex space-x-6">
              <TabsTrigger value="Dashboard" className="text-lg px-5 py-3">
                <Home className="inline-block mr-2 w-5 h-5" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="Configuracion" className="text-lg px-5 py-3">
                <Settings className="inline-block mr-2 w-5 h-5" />
                Configuración
              </TabsTrigger>
            </div>

            {/* Perfil del usuario con Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-3 focus:outline-none">
                  <Avatar>
                    <AvatarFallback>{nombre}</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <span className="block text-gray-600 font-medium">
                      {nombreCompleto || credenciales?.nombreCompleto || "Usuario"}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {rol}
                    </span>
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
        <ButtonDashboard />
      </TabsContent>
      <TabsContent value="Citas">
        <ButtonCitas />
      </TabsContent>
      <TabsContent value="Historial Medico">
        <ButtonHistorialMedico />
      </TabsContent>
      <TabsContent value="Configuracion">
        <ButtonConfiguracion />
      </TabsContent>
    </Tabs>
  );
};

export default BarraNav;
