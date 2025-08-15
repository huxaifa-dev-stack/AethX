import { ShoppingBag, Shield, Check, Mail, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SoftwareStore</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Your trusted source for professional software. Discover, download, and manage applications with confidence.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {["About Us", "Terms of Service", "Privacy Policy", "Contact", "Support", "FAQ"].map((link) => (
                <div key={link}>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-3">
              {["Productivity", "Development", "Security", "Games", "Multimedia", "Utilities"].map((category) => (
                <div key={category}>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new software releases and exclusive deals.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Security Badges and Copyright */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Malware Scanned</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Verified Downloads</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 SoftwareStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};