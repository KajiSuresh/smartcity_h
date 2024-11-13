import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail
} from 'lucide-react';

const Footer = () => {
  const links = {
    company: ['About Us', 'Careers', 'Contact'],
    resources: ['Blog', 'Documentation', 'Help Center'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <p className="text-sm opacity-90">
              Creating amazing experiences through innovative technology solutions.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm opacity-90 hover:opacity-100 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p className="opacity-90">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Mail className="h-4 w-4" />
            <span className="opacity-90">contact@company.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;