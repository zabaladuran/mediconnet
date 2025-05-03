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
import { useSignInForm } from "../../hooks";

export function SignInForm() {
  const { validando, formulario, enviarData } = useSignInForm();
  return (
    <Form {...formulario}>
      <form onSubmit={formulario.handleSubmit(enviarData)} className="">
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
        <Button disabled={validando} type="submit">
          {validando ? "Cargando" : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
