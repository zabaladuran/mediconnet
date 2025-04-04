import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAut } from "../../funcionalidades/autenticacion/hooks";
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
      // Here you would typically make an API call to authenticate
      // For demo purposes, we'll just show a success toast
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
    <>
      <h1>Dashboard/home</h1>
    </>
  );
}

export default DashboardPage;
