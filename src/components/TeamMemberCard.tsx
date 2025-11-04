import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  id: string;
}

const TeamMemberCard = ({ name, id }: TeamMemberCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarFallback className="bg-muted text-2xl">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{id}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
