import { useForm } from "react-hook-form";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { FormWrapper } from "../ui/form-wrapper";
// Esquemas de validación para cada paso
const SelectAppointmentSchema = z.object({
  idCita: z.string().min(1, {
    message: "Por favor, selecciona un servicio.",
  }),
});

export function SelectAppointmentForm() {
  // use  avialble appointment
  const { back, next, isFirstStep, isLastStep, dataForm, updateDataForm } =
    useScheduleForm();
  const SelectAppointmentForm = useForm({
    resolver: zodResolver(SelectAppointmentSchema),
    values: {
      idCita: dataForm.idCita || "",
    },
  });

  const availableServices = [{ id: "2", name: "Dr Ikari" }];
  const onSubmit = async (values) => {
    updateDataForm(values);
    next();
  };

  return (
    <FormWrapper
      title={"Tus Preferencias"}
      description={"Selecciona tus preferencias"}
    >
      {availableServices.length > 0 ? (
        <Form {...SelectAppointmentForm}>
          <form
            onSubmit={SelectAppointmentForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={SelectAppointmentForm.control}
              name="idCita"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Servicio disponible</FormLabel>
                  <FormControl>
                    <select
                      value={field.value}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="">Selecciona un servicio</option>
                      {availableServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
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
      ) : (
        <p>No hay servicios disponibles para el dato ingresado.</p>
      )}
    </FormWrapper>
  );
}
