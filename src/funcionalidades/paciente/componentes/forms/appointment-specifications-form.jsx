import { Calendar } from "../../../../components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/ui/button";
import { CalendarIcon } from "lucide-react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../ui/form-wrapper";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { Field } from "@tanstack/react-form";

// Esquemas de validación para cada paso
const AppointmentSpecificationsSchema = z.object({
  fechaSugerida: z.date({
    required_error: "La fecha es requerida.",
  }),
  cargoMedico: z.string().min(1, {
    message: "Por favor, selecciona un cargo médico.",
  }),
});

export function AppointmentSpecificationsForm() {
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

  const medicalPositions = ["Medico", "Enfermero", "internista"];

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
              <FormItem className="flex flex-col">
                <FormLabel>Dia de la cita</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"}>
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Elige un fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Selecciona la fecha en la que deseas agendar tu cita
                </FormDescription>
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
                    {medicalPositions.map((position) => {
                      return (
                        <SelectItem value={position}>{position}</SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
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
