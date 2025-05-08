import { Stethoscope } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useEffect, useState } from "react";

export function AutHeader() {
  const [isSignInPage, setIsSignInPage] = useState(false);

  useEffect(() => {
    // Verifica si la URL actual es la de iniciar sesión o registrarse
    if (window.location.pathname === "/auth/sign-in") {
      setIsSignInPage(true);
    } else {
      setIsSignInPage(false);
    }
  }, []);

  return (
    <header className="w-full border-b border-slate-200 px-6 py-6 md:px-10 flex justify-between items-center">
      <a href="/home" className="flex items-center gap-2 font-medium text-emerald-600">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white">
          <Stethoscope className="size-4" />
        </div>
        MediconNet
      </a>
      <nav className="hidden md:flex gap-6">
        <div className="flex items-center space-x-4">
          <a href="/home" className="text-sm hover:underline">Inicio</a>
          {isSignInPage ? (
            <Button className="bg-[#16a34a] text-white hover:bg-green-700">
              <a href="/auth/sign-up">Registrarse</a>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="text-[#16a34a] border-[#16a34a] hover:bg-green-100">
              <a href="/auth/sign-in">Iniciar Sesión</a>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

