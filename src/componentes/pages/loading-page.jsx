import { Loader2Icon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center flex flex-col items-center">
        <Loader2Icon className="w-10 h-10 text-green-600 animate-spin" />
        <p className="mt-4 text-lg font-medium text-gray-700">
          Cargando...Por favor espere
        </p>
      </div>
    </div>
  );
}
