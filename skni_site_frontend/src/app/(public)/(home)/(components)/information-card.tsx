import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CornerDownRight } from "lucide-react";
import { Text } from "@/components/ui/text";

interface InformationCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const InformationCard = ({
  title,
  icon,
  description,
}: InformationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-x-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary rounded-full text-secondary">
            {icon}
          </div>
          <Text variant="h6">{title}</Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="p">{description}</Text>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant={"ghost"}>
          <CornerDownRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export { InformationCard };
