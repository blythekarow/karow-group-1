import { Linkedin, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.webp";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logoIcon}
                alt="The Karow Advisory Group"
                className="h-12 w-12"
              />
            </div>
            <span className="font-semibold text-base tracking-wider text-accent-foreground uppercase block mb-4">
              The Karow Advisory Group
            </span>
            <a
              href="mailto:connect@thekarowgroup.com"
              className="text-accent-foreground/80 hover:text-primary transition-colors text-sm"
            >
              connect@thekarowgroup.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/blythe-karow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-primary transition-colors"
                aria-label="Schedule a Call"
              >
                <Calendar className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Product & Business Case Definition
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Commercialization Planning & Execution
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Strategic Advisory & Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Thought Leadership */}
          <div>
            <h4 className="font-bold text-lg mb-4">Thought Leadership</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/insights"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  The Device Files
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Speaking Engagements
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  Articles & Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:connect@thekarowgroup.com"
                  className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
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
              <li>
                <a
                  href="https://www.linkedin.com/in/blythe-karow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
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
