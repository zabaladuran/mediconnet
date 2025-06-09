import { useForm } from "react-hook-form";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { AppointmentInfoCard } from "../ui/appointment-info-card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
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
  idCita: z.number(),
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

  const availableServices = [
    {
      idCita: 1,
      nombreMedico: "Pepe M.",
      horaInicio: "9:00 am",
      horaFinal: "10:00am",
    },
    {
      idCita: 2,
      nombreMedico: "Pepe M.",
      horaInicio: "9:00 am",
      horaFinal: "10:00am",
    },
    {
      idCita: 3,
      nombreMedico: "Pepe M.",
      horaInicio: "9:00 am",
      horaFinal: "10:00am",
    },
    {
      idCita: 4,
      nombreMedico: "Pepe M.",
      horaInicio: "9:00 am",
      horaFinal: "10:00am",
    },
    {
      idCita: 5,
      nombreMedico: "Pepe M.",
      horaInicio: "9:00 am",
      horaFinal: "10:00am",
    },
  ];
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
                    <ScrollArea className="h-[260px]">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col w-full p-3"
                      >
                        {availableServices.map((service) => {
                          const isSelected = field.value === service.idCita; // Check if the current item is selected
                          return (
                            <FormItem
                              className="flex w-full items-center gap-4"
                              key={service.idCita}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  className="opacity-0 w-0 h-0 p-0 m-0 overflow-hidden absolute"
                                  value={service.idCita}
                                />
                              </FormControl>
                              <FormLabel
                                className={`font-normal w-full ${
                                  isSelected
                                    ? "border-2 rounded-sm border-green-600"
                                    : ""
                                }`}
                              >
                                <AppointmentInfoCard
                                  nombreMedico={service.nombreMedico}
                                  horaFinal={service.horaFinal}
                                  horaInicio={service.horaInicio}
                                  fechaSugerida={"Fecha sugerida"}
                                />
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </ScrollArea>
                  </FormControl>
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
      ) : (
        <p>No hay servicios disponibles para el dato ingresado.</p>
      )}
    </FormWrapper>
  );
}
