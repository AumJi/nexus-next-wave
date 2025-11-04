import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-primary">P2</span>
            <span className="text-foreground">R</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-accent font-medium hover:text-accent/80 transition-colors">
            About
          </Link>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-full">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
