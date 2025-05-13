import React from 'react';

const PersonalInfoForm = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-6">Información Personal</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número de identificación</label>
          <input
            type="text"
            placeholder="Ingrese su número de identificación"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de identificación</label>
          <input
            type="text"
            placeholder="Seleccione el tipo de grupo"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            placeholder="Ingrese su teléfono"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Alergias</label>
          <input
            type="text"
            placeholder="Ingrese alergias"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Alergias a medicamentos</label>
          <input
            type="text"
            placeholder="Ingrese alergias a medicamentos"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Grupo Sanguíneo</label>
          <select className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option>Seleccione el tipo de grupo</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
      </form>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
        <button className="w-full md:w-auto bg-white border border-green-600 text-green-600 font-semibold px-5 py-2 rounded-md hover:bg-green-50">
          ✏️ Editar
        </button>
        <button className="w-full md:w-auto bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700">
          💾 Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
