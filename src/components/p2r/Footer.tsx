import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-primary">P2</span>
              <span className="text-foreground">R</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Prompt2Room - IT23, KMITL
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse-slow" />
              <span>by</span>
            </p>
            <p className="text-sm font-medium text-foreground mt-1">
              Aum.ji | PeePong | Newchang | Fovy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
