import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import BarraNavegacionDoctor from "../componentes/barra-navegacion-doctor/barra-navegacion-doctor";

const DashboardPageDoctor = () => {
  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Barra de navegación del doctor */}
      <div className="col-span-12 mb-6">
        <BarraNavegacionDoctor />
      </div>

      {/* Columna Izquierda: Acciones rápidas */}
      <div className="col-span-12 lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-green-600 text-white hover:bg-green-700 mb-4">
              + Nueva Consulta
            </Button>
            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 mb-4">
              Ver Agenda
            </Button>
            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">
              Mensajes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Columna Central: Citas y pacientes */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        {/* Próximas Citas */}
        <Card>
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
            <CardDescription>
              Tienes 5 citas programadas para hoy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Juan Pérez - 09:00</span>
                <span>Consulta General</span>
              </li>
              <li className="flex justify-between items-center">
                <span>María Gómez - 10:30</span>
                <span>Pediatría</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Carlos Ruiz - 12:00</span>
                <span>Cardiología</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Laura Torres - 15:00</span>
                <span>Dermatología</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Pedro Sánchez - 16:30</span>
                <span>Control</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Pacientes Recientes */}
        <Card>
          <CardHeader>
            <CardTitle>Pacientes Recientes</CardTitle>
            <CardDescription>Últimos pacientes atendidos</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <span className="font-bold">Ana López</span>
                <span className="block text-sm text-gray-500">
                  Consulta: 12 Nov 2023
                </span>
              </li>
              <li>
                <span className="font-bold">Luis Martínez</span>
                <span className="block text-sm text-gray-500">
                  Consulta: 10 Nov 2023
                </span>
              </li>
              <li>
                <span className="font-bold">Sofía Herrera</span>
                <span className="block text-sm text-gray-500">
                  Consulta: 8 Nov 2023
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha: Documentos y recordatorios */}
      <div className="col-span-12 lg:col-span-3 space-y-6">
        {/* Documentos recientes */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" size={20} />
                  Informe de Juan Pérez
                </div>
                <Download className="cursor-pointer text-gray-500" />
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" size={20} />
                  Resultados de laboratorio
                </div>
                <Download className="cursor-pointer text-gray-500" />
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Recordatorios */}
        <Card>
          <CardHeader>
            <CardTitle>Recordatorios</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="bg-green-100 text-green-800 p-3 rounded">
              Reunión médica: 17:00
            </div>
            <div className="bg-green-100 text-green-800 p-3 rounded">
              Revisar resultados de Sofía Herrera
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPageDoctor;
