import { useScheduleForm } from "../../hooks/useScheduleForm";

export function GetMedicalAssistanceForm() {
  const { Stepper } = useScheduleForm();
  return <div>{Stepper}</div>;
}
