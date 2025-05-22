import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../..//components/ui/card";
import { Button } from "../../..//components/ui/button";
import { Download, FileText } from "lucide-react";

export const MedicalHistoryPage = () => {
  return (
    <div className="container mx-auto px-6 py-8 space-y-6">
      {/* Información del paciente */}
      <Card>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-sm">
          <div>
            <p className="font-semibold text-gray-600">Nombre completo</p>
            <p>Juan Pérez González</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">ID del paciente</p>
            <p>123456789</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Edad</p>
            <p>35 años</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Grupo sanguíneo</p>
            <p>O+</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-gray-600">Alergias</p>
            <div className="flex gap-2 mt-1">
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                Penicilina
              </span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                Aspirina
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Última visita, Próxima cita, Medicamentos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Última visita</CardTitle>
          </CardHeader>
          <CardContent>
            <p>15 de octubre, 2023</p>
            <p className="text-sm text-gray-500">Dr. Martínez - Cardiología</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próxima cita</CardTitle>
          </CardHeader>
          <CardContent>
            <p>3 de diciembre, 2023</p>
            <p className="text-sm text-gray-500">
              Dra. García - Chequeo general
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medicamentos actuales</CardTitle>
          </CardHeader>
          <CardContent>
            <p>2 medicamentos activos</p>
            <p className="text-sm text-gray-500">
              Última actualización: 10/11/2023
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de consultas */}
      <Card>
        <CardHeader>
          <CardTitle>Consultas médicas</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2 pr-4">Fecha</th>
                <th className="py-2 pr-4">Especialidad</th>
                <th className="py-2 pr-4">Doctor</th>
                <th className="py-2 pr-4">Diagnóstico</th>
                <th className="py-2">Tratamiento</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4">15/10/2023</td>
                <td className="pr-4">Cardiología</td>
                <td className="pr-4">Dr. Martínez</td>
                <td className="pr-4">Hipertensión</td>
                <td>Cardipil 10mg</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">03/09/2023</td>
                <td className="pr-4">Medicina General</td>
                <td className="pr-4">Dra. García</td>
                <td className="pr-4">Gripe estacional</td>
                <td>Paracetamol 500mg</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Gráfico + Documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Presión arterial */}
        <Card>
          <CardHeader>
            <CardTitle>Presión Arterial</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Aquí va el componente de gráfico */}
            <p className="text-sm text-gray-500">
              Gráfico de ejemplo (inserta tu componente aquí)
            </p>
            <div className="bg-gray-100 h-32 flex items-center justify-center text-gray-400">
              [Gráfico]
            </div>
          </CardContent>
        </Card>

        {/* Documentos */}
        <Card>
          <CardHeader>
            <CardTitle>Últimos Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" size={20} />
                  Resultados análisis de sangre
                </div>
                <Download className="cursor-pointer text-gray-500" />
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" size={20} />
                  Electrocardiograma
                </div>
                <Download className="cursor-pointer text-gray-500" />
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recordatorios */}
      <Card>
        <CardHeader>
          <CardTitle>Recordatorios importantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="bg-green-100 text-green-800 p-3 rounded">
            Próxima cita: 3 de diciembre, 2023 con Dra. García
          </div>
          <div className="bg-green-100 text-green-800 p-3 rounded">
            Renovar receta: Enalapril antes del 25 de noviembre, 2023
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
