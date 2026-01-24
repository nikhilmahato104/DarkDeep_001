import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/prices", label: "Prices" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-body bg-stone-50">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Left: Mobile Number */}
          <div className="flex items-center gap-2 text-primary font-medium">
            <Phone className="h-4 w-4" />
            <a href="tel:+919818931148" className="hover:underline tracking-wide text-sm md:text-base">
              +91 98189 31148
            </a>
          </div>

          {/* Center: Logo (Optional - Text for now) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Link href="/" className="font-display text-2xl font-bold tracking-wider text-stone-800 uppercase hover:text-primary transition-colors">
              Russian Spa Centre
            </Link>
          </div>

          {/* Right: Hamburger Menu */}
          <button 
            onClick={toggleMenu} 
            className="p-2 hover:bg-stone-100 rounded-full transition-colors group"
            aria-label="Toggle menu"
          >
            <div className="flex items-center gap-2 text-stone-600 group-hover:text-primary">
              <span className="hidden sm:inline font-medium uppercase text-xs tracking-widest">Menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 overflow-y-auto"
          >
            <div className="container mx-auto max-w-2xl">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-3xl md:text-5xl font-display font-medium transition-all duration-300 hover:text-primary hover:tracking-wider",
                      location === link.href ? "text-primary" : "text-stone-800"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="mt-12 flex flex-col items-center gap-4 text-stone-500">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98189 31148</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>info@russianspacentre.com</span>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-primary font-bold">Russian Spa Centre</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Experience authentic Russian Banya traditions in the heart of New Delhi. A sanctuary of relaxation and rejuvenation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-display text-xl text-white">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi, Delhi 110037</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+919818931148" className="hover:text-white">+91 98189 31148</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:info@russianspacentre.com" className="hover:text-white">info@russianspacentre.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-display text-xl text-white">Opening Hours</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <span>Open 24 Hours, Monday - Sunday</span>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline underline-offset-4">View larger map</a>
                </li>
              </ul>
            </div>

            {/* Popular Locations */}
            <div className="space-y-6">
              <h4 className="font-display text-xl text-white">Popular Locations</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Spa in Aerocity, Delhi</li>
                <li>Spa in Mahipalpur, Delhi</li>
                <li>Body Massage in Dwarka, Delhi</li>
                <li>Russian Spa in Delhi</li>
                <li>Luxury Spa Near Airport</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-xs opacity-50">
            <p>&copy; 2026 Russian Spa Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
