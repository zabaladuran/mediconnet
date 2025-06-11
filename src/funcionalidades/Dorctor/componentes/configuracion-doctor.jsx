import React, { useState } from "react";
import { useAut } from "@/funcionalidades/autenticacion/hooks";

const ConfiguracionDoctor = () => {
  const { credenciales } = useAut();

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState(credenciales?.nombreCompleto || "");
  const [email, setEmail] = useState(credenciales?.email || "");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulación de actualización de datos
  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("");
    if (password && password !== passwordConfirm) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMensaje("Cambios guardados correctamente.");
      setPassword("");
      setPasswordConfirm("");
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#16a34a]">
        Configuración de Perfil
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>
        <hr className="my-4" />
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nueva contraseña
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Confirmar nueva contraseña
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Repite la nueva contraseña"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            minLength={6}
          />
        </div>
        {mensaje && (
          <div
            className={`text-sm mt-2 ${
              mensaje.includes("correctamente")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {mensaje}
          </div>
        )}
        <button
          type="submit"
          className="bg-[#16a34a] text-white px-6 py-2 rounded hover:bg-green-700 transition w-full"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar cambios"}
        </button>
      </form>
      <div className="mt-8 text-gray-500 text-sm text-center">
        Si necesitas actualizar otros datos, comunícate con soporte.
      </div>
    </div>
  );
};

export default ConfiguracionDoctor;
