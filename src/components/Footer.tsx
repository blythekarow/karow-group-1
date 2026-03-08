import { Linkedin, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.webp";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img
              src={logoIcon}
              alt="The Karow Advisory Group"
              className="h-12 w-12"
            />
            <span className="font-semibold text-base tracking-wider text-accent-foreground uppercase">
              The Karow Advisory Group
            </span>
          </div>

          {/* Connect */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:info@thekarowgroup.com"
              className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors text-sm"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/in/blythe-karow/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors text-sm"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/60">
              © 2026 The Karow Advisory Group. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-accent-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-accent-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
