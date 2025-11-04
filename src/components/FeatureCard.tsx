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
    <Card className="group p-8 hover-lift relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-0 flex flex-col items-center text-center space-y-4 relative">
        <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
