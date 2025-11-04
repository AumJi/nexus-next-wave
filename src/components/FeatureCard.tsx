import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const FeatureCard = ({ icon, title, description, iconBg }: FeatureCardProps) => {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
