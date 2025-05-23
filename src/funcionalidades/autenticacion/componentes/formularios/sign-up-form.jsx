import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { useSignUpForm } from "../../hooks";
import { PACIENTE, DOCTOR } from "../../data";

export function SignUpForm() {
  const { formulario, enviarData, validando } = useSignUpForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Form {...formulario}>
      <form
        onSubmit={formulario.handleSubmit(enviarData)}
        className="space-y-6 bg-white p-8 rounded-xl shadow-md"
      >
        <div className="flex flex-col gap-2 mb-2">
          <h2 className="text-2xl font-bold">Crear una cuenta</h2>
          <p className="text-sm text-muted-foreground">
            Ingresa tus datos para comenzar
          </p>
        </div>

        {/* Nombre */}
        <FormField
          control={formulario.control}
          name="nombreCompleto"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={formulario.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="correo@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contraseña */}
        <FormField
          control={formulario.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Contraseña</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    placeholder="********"
                  />
                </FormControl>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirmar contraseña */}
        <FormField
          control={formulario.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Confirmar contraseña</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    placeholder="********"
                  />
                </FormControl>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tipo de usuario */}
        <FormField
          control={formulario.control}
          name="tipoUsuario"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Tipo de usuario</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={PACIENTE}
                      id="paciente"
                      className="border border-black data-[state=checked]:border-2 data-[state=checked]:border-emerald-600"
                    />
                    <Label htmlFor="paciente" className="text-sm">Paciente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={DOCTOR}
                      id="doctor"
                      className="border border-black data-[state=checked]:border-2 data-[state=checked]:border-emerald-600"
                    />
                    <Label htmlFor="doctor" className="text-sm">Doctor</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Términos */}
        <FormField
          control={formulario.control}
          name="terminos"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border border-black"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm">Acepto los términos y condiciones</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botón */}
        <Button
          disabled={validando}
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
        >
          {validando ? "Verificando..." : "Registrarse"}
        </Button>

        {/* Link a login */}
        <div className="text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <a href="/auth/sign-in" className="text-emerald-600 hover:underline underline-offset-4">
            Iniciar sesión
          </a>
        </div>
      </form>
    </Form>
  );
}
