import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Mail, Lock, LogIn, User } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { signUpSchema } from "../../zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { obtenerDeLocalStorage } from "../../../../servicios";
import { CLAVE_CORREO_USUARIO } from "../../data/variables-de-autenticacion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "../../../../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useSignUpForm } from "../../hooks";
export function SignUpForm() {
  const { formulario, enviarData } = useSignUpForm();
  return (
    <Form {...formulario}>
      <form onSubmit={formulario.handleSubmit(enviarData)}>
        <FormField
          control={formulario.control}
          name="nombreCompleto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formulario.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formulario.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="pl-10 flex "
                    placeholder="********"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formulario.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar contraseña</FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="pl-10"
                    placeholder="********"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formulario.control}
          name="tipoUsuario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de usuario</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paciente" id="paciente" />
                    <Label htmlFor="paciente">Paciente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="doctor" id="doctor" />
                    <Label htmlFor="doctor">Médico</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formulario.control}
          name="terminos"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Acepto los términos y condiciones</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
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
          onChange={(e) => setPassword(e.target.value)}
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
