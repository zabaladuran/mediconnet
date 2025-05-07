import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
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
import { useSignInForm } from "../../hooks";

export function SignInForm() {
  const { validando, formulario, enviarData } = useSignInForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...formulario}>
      <form
        onSubmit={formulario.handleSubmit(enviarData)}
        className="space-y-6 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Bienvenido a MediconNet</h1>
          <p className="text-gray-500">Inicia sesión para gestionar tus citas médicas</p>
        </div>

        {/* Email */}
        <FormField
          control={formulario.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Correo electrónico</FormLabel>
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
                    placeholder="********"
                    className="pl-10 pr-10"
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

        {/* Recordarme + Olvidé contraseña si*/}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember"
              className="border border-black"
            />
            <label htmlFor="remember" className="text-gray-700">Recordarme</label>
          </div>
          <a href="/forgot-password" className="text-green-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón */}
        <Button
          disabled={validando}
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          {validando ? "Cargando..." : "Iniciar sesión"}
        </Button>

        {/* Registro */}
        <div className="text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <a href="/auth/sign-up" className="text-green-600 hover:underline">
            Regístrate aquí
          </a>
        </div>
      </form>
    </Form>
  );
}
