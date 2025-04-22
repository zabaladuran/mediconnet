import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn, User } from "lucide-react";
import { useState } from "react";
import { useAut } from "../../hooks";
import { redirect } from "react-router";

export function SignInForm() {
  const [correo, definirCorreo] = useState("");
  const [password, definirPassword] = useState("");
  const [cargando, definirCargando] = useState(false);
  const { iniciarSesion } = useAut();

  const handleSubmit = () => {
    definirCargando(true);
    try {
      //Validaciones
      const usuarioValidado = true;
      if (!usuarioValidado) throw new Error("usuario no tiene una cuenta");

      // Iniciar Sesion
      iniciarSesion({ tk: "02", correo: "nico@nico.com" });
      redirect("/dashboard/home");
    } catch (e) {
      console.error("Error on submit en inciar sesion...", e);
    }
    definirCargando(false);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-br from-background to-muted p-4 flex-grow">
        <Card className="w-full max-w-md bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              Bienvenido a Mediconnet
            </CardTitle>
            <CardDescription>
              Inicia sesión para gestionar tus citas médicas
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="flex-row space-y-4 my-5">
                <TextInput
                  label="Correo electrónico"
                  htmlFor="email"
                  id="email"
                  valor={correo}
                  placeholder="nombre@ejemplo.com"
                  actualizarValor={definirCorreo}
                  icon={Mail}
                  tipoDeCampo="email"
                />
                <PasswordInput
                  label="Contraseña"
                  htmlFor="password"
                  id="password"
                  password={password}
                  definirPassword={definirPassword}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={cargando}
              >
                {cargando ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                    <span>Iniciando sesión...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Inciar sesión</span>
                  </div>
                )}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                ¿No tienes una cuenta?{" "}
                <a href="/sign-up" className="text-primary hover:underline">
                  Regístrate aquí
                </a>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

function PasswordInput({ label, definirPassword, password, htmlFor, id }) {
  if (!label || !definirPassword)
    throw new Error("Password Input no recibio los parametros minimos");
  if (!(typeof label == "string") || !(typeof definirPassword == "function"))
    throw new Error("Password Input no recibio los parametros minimos");
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
        <Input
          id={id}
          type="password"
          placeholder="••••••••"
          className="pl-10"
          value={password}
          onChange={(e) => definirPassword(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

function TextInput({
  label,
  actualizarValor,
  valor,
  htmlFor = "",
  id = "",
  tipoDeCampo,
  placeholder = "",
  icon: Icon,
}) {
  if (!label || !actualizarValor || !tipoDeCampo)
    throw new Error("Text Input no recibio los parametros minimos");
  if (
    !(typeof label == "string") ||
    !(typeof tipoDeCampo == "string") ||
    !(typeof actualizarValor == "function")
  )
    throw new Error("Text Input no recibio los parametros minimos");

  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
        )}
        <Input
          id={id}
          type={tipoDeCampo}
          placeholder={placeholder}
          className="pl-10"
          value={valor}
          onChange={(e) => actualizarValor(e.target.value)}
          required
        />
      </div>
    </div>
  );
}
