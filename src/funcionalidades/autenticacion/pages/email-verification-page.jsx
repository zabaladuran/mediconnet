// import { OTPInput,  } from "input-otp";
// export default function EmailVerification() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="w-full max-w-md p-6 border rounded-2xl shadow-sm text-center space-y-6">
//         <h2 className="text-lg font-semibold">Verificación de Correo</h2>
//         <div className="flex justify-center gap-2">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <Input
//               key={i}
//               maxLength={1}
//               className="w-12 h-12 text-center text-xl font-bold"
//               type="text"
//             />
//           ))}
//         </div>
//         <div>
//           <p className="text-lg font-bold">¡Verificando Correo !</p>
//           <p className="text-sm text-gray-500 mt-1">
//             Tu dirección de correo electrónico está siendo verificada. Para que
//             puedas usar nuestros servicios.
//           </p>
//         </div>
//         <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//           Verificar código
//         </Button>
//       </div>
//     </div>
//   );
// }
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../components/ui/input-otp";
import { useVerificationCodeForm } from "../hooks";
export default function EmailVerification() {
  const { validando, formulario, enviarData } = useVerificationCodeForm();
  return (
    <Form {...formulario}>
      <form
        onSubmit={formulario.handleSubmit(enviarData)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={formulario.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
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
