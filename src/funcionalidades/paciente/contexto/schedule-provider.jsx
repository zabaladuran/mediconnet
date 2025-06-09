import { createContext, useState } from "react";
import { useMultiStepForm } from "../hooks";
import { AppointmentSpecificationsForm } from "../componentes/forms/appointment-specifications-form";
import { ScheduleAppointmentForm } from "../componentes/forms/schedule-appointment-form";
import { SelectAppointmentForm } from "../componentes/forms/select-appointment-form";

export const ScheduleFormContext = createContext({
  dataForm: null,
  Stepper: null,
  currentStepIndex: null,
  steps: null,
  isFirstStep: null,
  isLastStep: null,
  back: null,
  next: null,
  goTo: null,
  updateDataForm: null,
});

export const ScheduleProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    cargoMedico: null,
    fechaSugerida: null,
    idCita: null,
    observaciones: null,
  });
  const {
    Step,
    currentStepIndex,
    back,
    next,
    goTo,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm({
    stepsArray: [
      <AppointmentSpecificationsForm />,
      <SelectAppointmentForm />,
      <ScheduleAppointmentForm />,
    ],
  });

  function updateDataForm(data) {
    console.log("update: ", dataForm);
    setDataForm((oldData) => {
      return { ...oldData, ...data };
    });
    console.log(dataForm);
  }

  const recursosDeContexto = {
    dataForm: dataForm,
    Stepper: Step,
    currentStepIndex: currentStepIndex,
    steps: steps,
    isFirstStep: isFirstStep,
    isLastStep: isLastStep,
    back: back,
    next: next,
    goTo: goTo,
    updateDataForm: updateDataForm,
  };
  return (
    <ScheduleFormContext.Provider
      children={children}
      value={recursosDeContexto}
    />
  );
};
