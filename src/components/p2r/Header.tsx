import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-primary">P2</span>
            <span className="text-foreground">R</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/generate" className="text-foreground hover:text-primary transition-colors font-medium">
            Generate
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-accent font-medium hover:text-accent/80 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
