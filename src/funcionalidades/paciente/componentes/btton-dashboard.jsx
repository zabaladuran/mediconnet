import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ButtonDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Columna Izquierda: Acciones Rápidas */}
      <div className="col-span-12 lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-green-600 text-white hover:bg-green-700 mb-4">
              + Agendar Nueva Cita
            </Button>
            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 mb-4">
              Ver Historial
            </Button>
            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">
              Gestionar Medicamentos
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Columna Central */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        {/* Próximas Citas */}
        <Card>
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
            <CardDescription>
              Tienes 3 citas programadas para esta semana.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Dr. Carlos Ruiz - Cardiología</span>
                <span>15 Nov 2023 - 09:30</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Dra. María López - Dermatología</span>
                <span>17 Nov 2023 - 11:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Dr. Juan Pérez - Medicina General</span>
                <span>20 Nov 2023 - 15:45</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Historial Médico Reciente */}
        <Card>
          <CardHeader>
            <CardTitle>Historial Médico Reciente</CardTitle>
            <CardDescription>Últimas consultas y diagnósticos</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <p className="font-bold">10 Oct 2023</p>
                <p className="text-gray-600">Revisión general anual</p>
                <p className="text-sm text-gray-500">
                  Resultados normales. Próxima revisión en 12 meses.
                </p>
              </li>
              <li>
                <p className="font-bold">25 Sep 2023</p>
                <p className="text-gray-600">Dolor lumbar</p>
                <p className="text-sm text-gray-500">
                  Prescripción de antiinflamatorios y terapia física.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha */}
      <div className="col-span-12 lg:col-span-3 space-y-6"></div>
    </div>
  );
};

export default ButtonDashboard;
