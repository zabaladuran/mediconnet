import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ButtonDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-6 gap-6">
      {/* Acciones Rápidas */}
      <div className="col-span-2">
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

      {/* Próximas Citas */}
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
            <CardDescription>Tienes 3 citas programadas para esta semana.</CardDescription>
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
      </div>

      {/* Historial Médico Reciente */}
      <div className="col-span-4">
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

      {/* Control de Medicamentos */}
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Control de Medicamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <span className="block font-semibold">Omeprazol</span>
                <span className="text-sm text-gray-600">1 vez al día</span>
              </li>
              <li>
                <span className="block font-semibold">Vitamina D</span>
                <span className="text-sm text-gray-600">1 vez al día</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de Salud */}
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Métricas de Salud</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Adherencia a Medicamentos:{" "}
              <span className="font-bold text-green-600">92%</span>
            </p>
            <p>
              Citas Completadas:{" "}
              <span className="font-bold text-green-600">85%</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Notificaciones */}
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>Recordatorio de Cita: Dr. Carlos Ruiz mañana a las 09:30</li>
              <li>Resultados Disponibles: Tus resultados de laboratorio están listos</li>
              <li>Recordatorio de Medicamento: Tomar Omeprazol a las 08:00</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ButtonDashboard;