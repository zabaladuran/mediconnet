import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../../../../components/ui/form";
import { FormWrapper } from "../ui/form-wrapper";
import { Textarea } from "../../../../components/ui/textarea";
import { useScheduleAppointment, useScheduleForm } from "../../hooks";

export function ScheduleAppointmentForm() {
  const { loading, form, enviarData } = useScheduleAppointment();
  const { back, isFirstStep, isLastStep } = useScheduleForm();

  return (
    <FormWrapper
      title={"Tus Preferencias"}
      description={"Selecciona tus preferencias"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(enviarData)} className="space-y-6">
          <FormField
            control={form.control}
            name="observaciones"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observaciones</FormLabel>
                <FormControl>
                  <Textarea
                    value={field.value}
                    placeholder="Envianos tus observaciones"
                    className="resize-none h-max-[400px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Puedes enviar observaciones y el profesional que te atendera
                  las podra leer
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-2">
            {!isFirstStep && (
              <Button variant="outline" onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit" disabled={loading}>
              {isLastStep ? "Agendar" : "Siguiente"}
            </Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
}
