import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, UserCircle, Clock, FileText } from "lucide-react";
import { useNavigate } from "react-router";

const ButtonDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Columna Izquierda: Acciones Rápidas */}
      <div className="col-span-12 lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() =>
                navigate("paciente/appointment/set", { replace: true })
              }
              className="pointer w-full bg-green-600 text-white hover:bg-green-700 mb-4"
            >
              + Agendar Nueva Cita
            </Button>
            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 mb-4">
              Configuracion
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Columna Central */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        {/* Próximas Citas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg">Próximas Citas</CardTitle>
              <CardDescription>
                Tienes 3 citas programadas para esta semana.
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
                <p className="font-bold text-gray-900">Dr. Carlos Ruiz</p>
                <p className="text-sm text-gray-500">Cardiología</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  15 Nov 2023
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
                <p className="font-bold text-gray-900">Dra. María López</p>
                <p className="text-sm text-gray-500">Dermatología</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  17 Nov 2023
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
                <p className="font-bold text-gray-900">Dr. Juan Pérez</p>
                <p className="text-sm text-gray-500">Medicina General</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  20 Nov 2023
                </div>
                <span className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  15:45
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historial Médico Reciente */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Historial Médico Reciente</CardTitle>
            <CardDescription>Últimas consultas y diagnósticos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Consulta 1 */}
            <div className="flex items-center bg-green-50 border border-gray-200 rounded-lg px-4 py-3">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <FileText className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">10 Oct 2023</p>
                <p className="text-sm text-gray-500">Revisión general anual</p>
                <p className="text-xs text-gray-400">
                  Resultados normales. Próxima revisión en 12 meses.
                </p>
              </div>
            </div>
            {/* Consulta 2 */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <FileText className="w-7 h-7 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">25 Sep 2023</p>
                <p className="text-sm text-gray-500">Dolor lumbar</p>
                <p className="text-xs text-gray-400">
                  Prescripción de antiinflamatorios y terapia física.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha */}
      <div className="col-span-12 lg:col-span-3 space-y-6"></div>
    </div>
  );
};

export default ButtonDashboard;
