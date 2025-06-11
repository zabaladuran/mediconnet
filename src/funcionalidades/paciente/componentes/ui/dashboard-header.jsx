import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useAut } from "../../../autenticacion/hooks";
import { DOCTOR } from "../../../autenticacion/data";
import { Stethoscope } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";

export function DashboardHeader() {
  const { cerrarSesion, credenciales } = useAut();
  const dashboardRoute =
    credenciales.tipoUsuario == DOCTOR
      ? "/doctor/dashboard/home/"
      : "/paciente/dashboard/home/";
  return (
    <header className="bg-gray-100 shadow-md w-full mb-3">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-4">
            <div>
              <a
                className="flex items-center gap-2 text-2xl font-bold text-green-600 hover:underline"
                href="/home"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16a34a] text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
                Mediconnet
              </a>
            </div>
            <div>
              <a
                className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                href={dashboardRoute}
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-3 focus:outline-none hover:bg-gray-200 p-2 rounded-lg transition">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <DropdownMenuItem
              onClick={cerrarSesion}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 p-2 rounded-md transition"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
