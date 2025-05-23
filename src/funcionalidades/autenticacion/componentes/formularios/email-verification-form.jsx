import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../components/ui/input-otp";
import { Button } from "../../../../components/ui/button";
import { useVerificationCodeForm } from "../../hooks";
export function EmailVerificationForm() {
  const { validando, formulario, verificarCodigo } = useVerificationCodeForm();

  return (
    <Form {...formulario}>
      <form
        onSubmit={formulario.handleSubmit(verificarCodigo)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={formulario.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Codigo de Verificacion:</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={validando}>
          {validando ? "Verificando..." : "Verificar código"}
        </Button>
      </form>
    </Form>
  );
}
