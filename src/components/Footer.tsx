import { Linkedin, Mail, Calendar } from "lucide-react";
import logoIcon from "@/assets/logo-icon.webp";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";
const SUBSTACK_URL = "https://blythekarow.substack.com/";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logoIcon}
                alt="The Karow Advisory Group"
                className="h-12 w-12"
              />
              <span className="font-semibold text-lg tracking-wider text-accent-foreground uppercase">
                The Karow Advisory Group
              </span>
            </div>
            <p className="text-accent-foreground/80 leading-relaxed">
              Strategic leadership for MedTech, wearables, and digital therapeutics.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:connect@thekarowgroup.com"
                  className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  connect@thekarowgroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/blythekarow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/60">
              © {new Date().getFullYear()} The Karow Advisory Group. All rights reserved.
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
