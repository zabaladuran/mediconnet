import { Stethoscope } from "lucide-react";

export function AutHeader() {
  return (
    <header className="w-full border-b border-slate-200 px-6 py-6 md:px-10 flex justify-between items-center">
      <a href="/" className="flex items-center gap-2 font-medium text-emerald-600">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white">
          <Stethoscope className="size-4" />
        </div>
        MediconNet
      </a>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm hover:underline">Inicio</a>
        <a href="#" className="text-sm hover:underline">Servicios</a>
        <a href="#" className="text-sm hover:underline">Contacto</a>
      </nav>
    </header>
  );
}
