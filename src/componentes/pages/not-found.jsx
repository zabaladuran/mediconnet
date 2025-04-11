import { Button } from "@/components/ui/button"; // Asegúrate de tener este componente en tu proyecto
import React from "react";

function NotFoundPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-center overflow-hidden">
      {/* Cuadrados animados */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="absolute w-16 h-16 bg-green-500 opacity-50 rounded-lg animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button
        variant="default"
        className="bg-green-600 text-white hover:bg-green-700"
        onClick={() => (window.location.href = "/")}
      >
        Volver al inicio
      </Button>
      <div className="flex gap-4 mt-6 text-sm text-gray-500">
        <a href="/contacto" className="hover:underline hover:text-green-600">
          Contactar soporte
        </a>
        <a href="/reporte" className="hover:underline hover:text-green-600">
          Reportar problema
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
