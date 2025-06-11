import { GetMedicalAssistanceForm } from "../componentes/forms/get-medical-assistance-form";
import { ScheduleProvider } from "../contexto/schedule-provider";
import { DashboardHeader } from "../componentes/ui/dashboard-header";
export function GetMedicalAssistancePage() {
  return (
    <ScheduleProvider>
      <DashboardHeader />
      <div className="w-full h-screen flex py-15 justify-center">
        <GetMedicalAssistanceForm />
      </div>
    </ScheduleProvider>
  );
}
