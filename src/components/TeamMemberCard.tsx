import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  id: string;
}

const TeamMemberCard = ({ name, id }: TeamMemberCardProps) => {
  return (
    <Card className="group p-6 hover-lift relative overflow-hidden border-2 border-transparent hover:border-primary/30 bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-0 flex flex-col items-center space-y-4 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <Avatar className="w-24 h-24 transform group-hover:scale-110 transition-transform duration-500 border-4 border-primary/10 group-hover:border-primary/30">
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-2xl font-bold text-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h4>
          <p className="text-sm text-muted-foreground">{id}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
