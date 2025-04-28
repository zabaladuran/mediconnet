import { Card, CardHeader, CardContent, CardTitle } from "../../../components/ui/card";

function ServiceCard({ title, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-[#16a34a]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
