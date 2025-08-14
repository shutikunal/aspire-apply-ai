import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/cfe4f679-2af5-4228-b06f-93c1fce6587d.png"
                alt="AspireMatch Logo"
                className="h-8"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered job application copilot helping candidates apply smarter, faster, 
              and more successfully to competitive roles.
            </p>
            
            {/* Email signup */}
            <div className="flex gap-3 max-w-sm">
              <Input
                type="email"
                placeholder="Stay updated"
                className="flex-1"
              />
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 AspireMatch. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;