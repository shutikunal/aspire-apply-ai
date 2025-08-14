import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/cfe4f679-2af5-4228-b06f-93c1fce6587d.png"
              alt="AspireMatch Logo"
              className="h-8"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#extension" className="text-muted-foreground hover:text-foreground transition-colors">
              Extension
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="outline" className="border-brand-purple/20 hover:bg-brand-purple/5">
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;