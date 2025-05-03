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
import BarraNav from "../dashboard/barra-nav"; // Importa BarraNav

function DashboardPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { usuario } = useAut();

  console.log(usuario);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    function foo() {
      throw new Error("This is an error in foo");
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let secEmail = foo();
      console.log("Email:", secEmail);
      setEmail(secEmail);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white-100">
        <div className="py-4 flex justify-between items-center w-full">
          <BarraNav />
        </div>
    </div>
  );
}

export default DashboardPage;
