import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonDashboard from "../componentes/btton-dashboard";
import ButtonCitas from "../componentes/btton-citas";
import ButtonHistorialMedico from "../componentes/btton-Historialmedico";
import ButtonConfiguracion from "../componentes/btton-configuracion";

const BarraNav = () => {
  return (
    <Tabs defaultValue="Dashboard" className="w-full">
      <header className="bg-gray-100 shadow-md w-full mb-3">
        <nav>
          <TabsList className="flex items-center justify-between px-6 py-4 w-full bg-white">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <a
                className="text-xl font-bold text-green-600 hover:underline "
                href="/home"
              >
                Mediconnet
              </a>
            </div>

            {/* Pestañas */}
            <div className="flex space-x-4">
              <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="Citas">Citas</TabsTrigger>
              <TabsTrigger value="Historial Medico">
                Historial Médico
              </TabsTrigger>
              <TabsTrigger value="Configuracion">Configuración</TabsTrigger>
            </div>

            {/* Perfil del usuario */}
            <div className="flex items-center space-x-4 mb-3">
              <img
                src="https://i.pinimg.com/736x/29/3e/94/293e94cf6378d2af9ffa9295ef44dfb7.jpg"
                alt="Perfil"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="block text-gray-600 font-medium">Frieren</span>
                <span className="block text-sm text-gray-500">Admin</span>
              </div>
            </div>
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
