import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../../../components/ui/card";
import { useScheduleForm } from "../../hooks/useScheduleForm";
import { Progress } from "../../../../components/ui/progress";
export function FormWrapper({ title, description, children }) {
  const { currentStepIndex, steps } = useScheduleForm();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="">
          <Progress
            value={((currentStepIndex + 1) / steps.length) * 100}
            className="transition-all duration-500 ease-in-out"
          />
        </div>
      </CardHeader>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}
