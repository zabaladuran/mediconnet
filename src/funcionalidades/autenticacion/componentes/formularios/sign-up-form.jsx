import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Lock } from "lucide-react";
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

        <FormField
          control={formulario.control}
          name="nombreCompleto"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">
                Nombre Completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingresa tu nombre completo"
                  {...field}
                  className="border rounded-md p-2"
                />
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
              <FormLabel className="text-sm font-semibold">
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  {...field}
                  className="border rounded-md p-2"
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
              <FormLabel className="text-sm font-semibold">
                Contraseña
              </FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="pl-10 border rounded-md p-2"
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
              <FormLabel className="text-sm font-semibold">
                Confirmar contraseña
              </FormLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="pl-10 border rounded-md p-2"
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
              <FormLabel className="text-sm font-semibold">
                Tipo de usuario
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={PACIENTE} id="paciente" className="border border-black data-[state=checked]:border-2 data-[state=checked]:border-emerald-600"
                    />
                    <Label htmlFor="paciente" className="text-sm">
                      Paciente
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={DOCTOR} id="doctor"className="border border-black data-[state=checked]:border-2 data-[state=checked]:border-emerald-600"
                    />
                    <Label htmlFor="doctor" className="text-sm">
                      Doctor
                    </Label>
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
                  className="border border-black"

                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm">
                  Acepto los términos y condiciones
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={validando}
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
        >
          {validando ? "Verificando..." : "Registrarse"}
        </Button>

        <div className="text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <a
            href="/auth/sign-in"
            className="text-emerald-600 hover:underline underline-offset-4"
          >
            Iniciar sesión
          </a>
        </div>
      </form>
    </Form>
  );
}
