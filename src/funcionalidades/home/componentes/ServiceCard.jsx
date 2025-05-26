import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../../../components/ui/card";

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center">
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="text-[#16a34a] text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
