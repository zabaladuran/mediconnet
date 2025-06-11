import { ScrollArea } from "../../../../components/ui/scroll-area";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { AppointmentInfoCard } from "../ui/appointment-info-card";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { useAppointmentSelector } from "../../hooks";
import { FormWrapper } from "../ui/form-wrapper";
import { Loader2Icon } from "lucide-react";

export function SelectAppointmentForm() {
  const { loading, form, availableAppointments, enviarData, loadingData } =
    useAppointmentSelector();
  const { back, next, isFirstStep, isLastStep, dataForm, updateDataForm } =
    useScheduleForm();

  return (
    <FormWrapper
      title={"Tus Preferencias"}
      description={"Selecciona tus preferencias"}
    >
      {loadingData ? (
        <div className="text-center flex flex-col items-center">
          <Loader2Icon className="w-10 h-10 text-green-600 animate-spin" />
          <p className="mt-4 text-lg font-medium text-gray-700">
            Cargando citas disponibles...
          </p>
        </div>
      ) : availableAppointments.length > 0 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(enviarData)} className="space-y-4">
            <FormField
              control={form.control}
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
                        {availableAppointments.map((service) => {
                          const isSelected = field.value === service.id; // Check if the current item is selected
                          return (
                            <FormItem
                              className="flex w-full items-center gap-4"
                              key={service.id}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  className="opacity-0 w-0 h-0 p-0 m-0 overflow-hidden absolute"
                                  value={service.id}
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
                                  nombreMedico={service.nombre}
                                  horaFinal={service.fechaInicio}
                                  horaInicio={service.fechaFinal}
                                  fechaSugerida={service.fecha}
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
              <Button type="submit" disabled={loading}>
                {isLastStep ? "Agendar" : "Siguiente"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-8 w-full">
          <p className="text-gray-600 text-lg">
            No hay servicios disponibles para la fecha especificada.
          </p>
          <div className="flex w-full">
            {!isFirstStep && (
              <Button variant="outline" onClick={back}>
                Back
              </Button>
            )}
          </div>
        </div>
      )}
    </FormWrapper>
  );
}
