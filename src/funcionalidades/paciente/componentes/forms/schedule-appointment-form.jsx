import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/ui/button";
import * as z from "zod";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../../../../components/ui/form";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../ui/form-wrapper";
import { Textarea } from "../../../../components/ui/textarea";

const AppointmentSchema = z.object({
  observaciones: z
    .string()
    .optional()
    .transform((val) =>
      val == null || val.trim() == "" ? "No se especifican" : val
    ),
});

export function ScheduleAppointmentForm() {
  const { back, next, isFirstStep, isLastStep, dataForm, updateDataForm } =
    useScheduleForm();
  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    values: {
      observaciones: dataForm.observaciones || "",
    },
  });

  const onSubmit = (values) => {
    updateDataForm(values);
    next();
  };

  return (
    <FormWrapper
      title={"Tus Preferencias"}
      description={"Selecciona tus preferencias"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="submit">
              {isLastStep ? "Agendar" : "Siguiente"}
            </Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
}
