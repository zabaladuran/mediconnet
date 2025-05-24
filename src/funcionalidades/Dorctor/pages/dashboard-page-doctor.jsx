import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
import BarraNav from "../../funcionalidades/paciente/componentes/barra-nav"; // Importa BarraNav

return (
  <div className="min-h-screen bg-white-100">
    <div className="py-4 flex justify-between items-center w-full">
      <BarraNav />
    </div>
  </div>
);

export default DashboardPage;
