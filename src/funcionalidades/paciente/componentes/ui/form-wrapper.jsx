import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../../../components/ui/card";
import { useScheduleForm } from "../../hooks/useScheduleForm";

export function FormWrapper({ title, description, children }) {
  const { currentStepIndex, steps } = useScheduleForm();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="absolute top-4 right-4 text-sm text-gray-500">
          {currentStepIndex + 1} / {steps.length}
        </div>
      </CardHeader>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}
