import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/ui/button";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../ui/form-wrapper";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { data } from "react-router";

// Esquemas de validación para cada paso
const AppointmentSpecificationsSchema = z.object({
  fechaSugerida: z.string({
    required_error: "La fecha es requerida.",
  }),
  cargoMedico: z.string().min(1, {
    message: "Por favor, selecciona un cargo médico.",
  }),
});

export function AppointmentSpecificationsForm() {
  // update use available appointments
  // obtener cargos disponibles

  const { back, next, isFirstStep, isLastStep, updateDataForm, dataForm } =
    useScheduleForm();
  const form = useForm({
    resolver: zodResolver(AppointmentSpecificationsSchema),
    values: {
      fechaSugerida: dataForm.fechaSugerida || "",
      cargoMedico: dataForm.cargoMedico || "",
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
            name="fechaSugerida"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha (ej: 13 de marzo)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ej: 13 de marzo"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cargoMedico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo Médico</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar cargo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="medico_general">
                      Médico General
                    </SelectItem>
                    <SelectItem value="enfermera">Enfermera</SelectItem>
                    <SelectItem value="especialista">Especialista</SelectItem>
                  </SelectContent>
                </Select>
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
    </FormWrapper>
  );
}
