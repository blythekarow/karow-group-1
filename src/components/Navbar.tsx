import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.webp";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on homepage, navigate there first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-foreground shadow-lg py-3"
          : "bg-foreground py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logoIcon}
              alt="The Karow Advisory Group"
              className={`transition-all duration-300 ${
                isScrolled ? "h-12 w-12" : "h-14 w-14"
              }`}
            />
            <span
              className={`font-semibold text-background uppercase transition-all duration-300 hidden sm:block ${
                isScrolled ? "text-base tracking-wider" : "text-lg tracking-wider"
              }`}
            >
              The Karow Advisory Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-background hover:text-primary font-medium transition-colors"
            >
              About
            </button>
            <Link
              to="/services"
              className="text-background hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/insights"
              className="text-background hover:text-primary font-medium transition-colors"
            >
              Insights
            </Link>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Let's Talk
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-background/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-background hover:text-primary font-medium transition-colors text-left"
              >
                About
              </button>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="text-background hover:text-primary font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                to="/insights"
                onClick={closeMobileMenu}
                className="text-background hover:text-primary font-medium transition-colors"
              >
                Insights
              </Link>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors w-full"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
