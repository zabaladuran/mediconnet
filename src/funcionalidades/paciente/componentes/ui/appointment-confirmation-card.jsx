import { CheckCircle } from "lucide-react";
export function AppointmentConfirmationCard() {
  return (
    <div
      className="
        font-sans text-center p-10 max-w-sm mx-auto mt-12
        border border-gray-200 rounded-lg shadow-lg
        bg-white
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-green-600 mb-4 dark:text-green-400">
        ¡Confirmado!
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
        Tu acción ha sido completada exitosamente.
      </p>
      <p className="text-sm text-gray-600 mt-8 dark:text-gray-400">
        Gracias por tu paciencia.
      </p>
    </div>
  );
}
