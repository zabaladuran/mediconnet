import React from "react";
import BarraNavegacionDoctor from "../componentes/barra-navegacion-doctor/barra-navegacion-doctor";
import { Calendar, Clock, UserCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardPageDoctor = () => {
  return (
    <BarraNavegacionDoctor>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, Doctor</h1>
        <p className="mb-8 text-gray-600">Este es tu panel principal.</p>

        {/* Próximas Citas para el Doctor */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg">Tus Próximas Citas</CardTitle>
              <CardDescription>
                Tienes 3 pacientes agendados para esta semana.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-300 text-gray-700 font-medium"
            >
              <Calendar className="w-4 h-4" />
              Ver Calendario
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Cita 1 */}
            <div className="flex items-center bg-green-50 border border-gray-200 rounded-lg px-4 py-3">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <UserCircle className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">Paciente: Ana Torres</p>
                <p className="text-sm text-gray-500">
                  Motivo: Control de presión
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  12 Jun 2025
                </div>
                <span className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  09:30
                </span>
              </div>
            </div>
            {/* Cita 2 */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <UserCircle className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">Paciente: Luis Gómez</p>
                <p className="text-sm text-gray-500">
                  Motivo: Consulta general
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  13 Jun 2025
                </div>
                <span className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  11:00
                </span>
              </div>
            </div>
            {/* Cita 3 */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <UserCircle className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">Paciente: Marta Ruiz</p>
                <p className="text-sm text-gray-500">
                  Motivo: Revisión dermatológica
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  15 Jun 2025
                </div>
                <span className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  15:45
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BarraNavegacionDoctor>
  );
};

export default DashboardPageDoctor;
