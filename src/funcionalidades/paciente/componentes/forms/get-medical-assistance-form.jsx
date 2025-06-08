import { useScheduleForm } from "../../hooks/useScheduleForm";

export function GetMedicalAssistanceForm() {
  const { Stepper } = useScheduleForm();
  return <div className="w-3/4 lg:w-1/2">{Stepper}</div>;
}
