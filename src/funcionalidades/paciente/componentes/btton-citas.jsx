import React from "react";

import { Calendar } from "@/components/ui/calendar";

const BttonCitas = () => {
  return (
    <div className="p-6 bg-white-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Calendario de Citas</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
          + Agendar Nueva Cita
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Sección del calendario */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Calendario</h2>
          <Calendar />
        </div>

        {/* Sección de citas del día */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Citas del Día</h3>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm font-medium">09:30 - Dr. García Martínez</p>
              <p className="text-sm text-gray-500">Consultorio 103</p>
              <p className="text-sm text-gray-500">
                Medicina General - Consulta Regular
              </p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm font-medium">
                11:45 - Dra. Rodríguez López
              </p>
              <p className="text-sm text-gray-500">Consultorio 205</p>
              <p className="text-sm text-gray-500">
                Cardiología - Control Rutinaro
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">15:00 - Dr. Sánchez Pérez</p>
              <p className="text-sm text-gray-500">Consultorio 308</p>
              <p className="text-sm text-gray-500">Traumatología - Revisión</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de próximas citas */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Próximas Citas</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm font-medium">Consulta Regular</p>
              <p className="text-sm text-gray-500">
                Dr. García Martínez - Medicina General
              </p>
            </div>
            <p className="text-sm font-medium">09:30 - Consultorio 103</p>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm font-medium">Control Rutinaro</p>
              <p className="text-sm text-gray-500">
                Dra. Rodríguez López - Cardiología
              </p>
            </div>
            <p className="text-sm font-medium">11:45 - Consultorio 205</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Revisión</p>
              <p className="text-sm text-gray-500">
                Dr. Sánchez Pérez - Traumatología
              </p>
            </div>
            <p className="text-sm font-medium">15:00 - Consultorio 308</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BttonCitas;
