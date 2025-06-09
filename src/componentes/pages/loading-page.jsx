import { Loader2Icon } from "lucide-react";
export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center">
        <Loader2Icon className="animate-spin" />
        <p className="mt-4 text-gray-700">Cargando, por favor espera...</p>
      </div>
    </div>
  );
}
