import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, X, Phone, MapPin, Mail, Clock, 
  ChevronDown, ChevronRight, Sparkles, Heart, Users, Award,
  Facebook, Instagram, Twitter, Linkedin, Globe,
  Sun, Moon, Star, Shield, Clock3, Wifi, Coffee, BookOpen, Camera
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

// All locations from your list
const allLocations = [
  "delhi",
  "Dwarka", "Aerocity", "Janakpuri", "Uttam Nagar", "Adarsh Colony", 
  "Alaknanda", "Anand Vihar", "Ashok Nagar", "Azadpur", "Babarpur",
  "Bali", "Bara Hindu Rao", "Bawana", "Begumpur", "Mayapuri",
  "Saket", "Munirka", "Pari Chowk", "Safdarjung", "South Extension",
  "Rohini", "Mahipalpur", "Mukherjee Nagar", "Cantonment",
  "Chanakyapuri", "Chandni Chowk", "Chawri Bazar", "Chhattarpur",
  "Chittaranjan Park", "Civil Lines", "Connaught Place", "Dabri",
  "Rajendra Nagar", "RK Puram", "Sadatpur", "Timarpur", "Tughlakabad",
  "Vasant Kunj", "Vasant Vihar", "Karol Bagh", "Lajpat Nagar",
  "Paharganj", "Pitampura", "Defence", "Dhaula Kuan", "Dilshad Garden",
  "East of Kailash", "Ghitorni", "Golf Links", "Govindpuri",
  "Greater Kailash", "Green Park", "Nehru Vihar", "Nizamuddin",
  "Okhla", "Partap", "Vikaspuri", "Wazirabad", "Rajouri Garden",
  "Tilak Nagar", "Rajendra Place", "Kamla Nagar", "Hauz Khas",
  "Jasola", "Kalkaji", "Khan Market", "Khanpur", "Malviya Nagar",
  "Mandoli", "Mehrauli", "Patel Nagar", "Ashok Vihar", "Chhatpur",
  "Mayur Vihar", "Nehru Place", "Vasundhara Enclave", "Manesar"
];

// Popular locations for dropdown
const popularLocations = allLocations.slice(0, 12);

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locationPath] = useLocation();

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: <Sparkles className="w-5 h-5" /> },
    { href: "/about", label: "About Us", icon: <Users className="w-5 h-5" /> },
    { href: "/services", label: "Services", icon: <Award className="w-5 h-5" /> },
    { href: "/prices", label: "Pricing", icon: <span className="text-lg">₹</span> },
    { href: "/gallery", label: "Gallery", icon: <Camera className="w-5 h-5" /> },
    { href: "/blog", label: "Journal", icon: <BookOpen className="w-5 h-5" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);
  
  const toSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  const handleLocationSelect = (locationName: string) => {
    const slug = toSlug(locationName);
    window.location.href = `/${slug}-spa-service`;
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {/* Floating Contact Buttons - Premium Minimal */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.a
          href="tel:+9195252 93190"
          aria-label="Call Now"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.9 }}
          className="w-14 h-14 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="https://wa.me/9195252 93190"
          target="_blank"
          aria-label="WhatsApp"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
          className="w-14 h-14 flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
          </svg>
        </motion.a>
      </div>

      {/* Top Bar - Professional Info */}
      <div className="hidden lg:block bg-neutral-900 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-300">24/7 Open - Always Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-300">70+ Locations Across Delhi NCR</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@russianspacentre.com" className="text-neutral-300 hover:text-white transition-colors">
                info@russianspacentre.com
              </a>
              <span className="text-neutral-700">|</span>
              <a href="tel:+9195252 93190" className="text-neutral-300 hover:text-white transition-colors font-medium">
                +91 95252 93190
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "sticky top-0 z-50 bg-white border-b transition-all duration-300",
          isScrolled ? "border-neutral-200 shadow-sm" : "border-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-neutral-900">
                  Mahipalpur Spa Centre
                </span>
                <span className="text-xs text-neutral-500">Authentic Russian Banya</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  locationPath === link.href
                    ? "text-neutral-900 bg-neutral-100"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Location Dropdown - Desktop */}
            <div className="relative hidden lg:block">
              <button
                onClick={toggleLocationDropdown}
                onMouseEnter={() => setIsLocationDropdownOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLocationDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-xl shadow-xl z-50 overflow-hidden"
                    onMouseLeave={() => setIsLocationDropdownOpen(false)}
                  >
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-3">
                        Popular Locations
                      </h3>
                      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                        {popularLocations.map((loc, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleLocationSelect(loc)}
                            className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <Link href="/locations">
                          <button className="w-full text-center px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-200">
                            View All Locations
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Number - Desktop */}
            <a
              href="tel:+9195252 93190"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-20 px-4 overflow-y-auto"
          >
            <div className="container mx-auto py-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
                        locationPath === link.href 
                          ? "bg-neutral-100 text-neutral-900" 
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-lg transition-all",
                        locationPath === link.href ? "bg-white" : "bg-neutral-100"
                      )}>
                        {link.icon}
                      </div>
                      <span className="text-lg font-medium">{link.label}</span>
                      <ChevronRight className="w-5 h-5 ml-auto text-neutral-400" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Location Section */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-4 px-2">
                    Our Locations
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {popularLocations.slice(0, 8).map((loc, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          handleLocationSelect(loc);
                          setIsMenuOpen(false);
                        }}
                        className="text-left px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                  <Link href="/locations">
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full mt-4 px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all duration-200"
                    >
                      View All Locations
                    </button>
                  </Link>
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

      {/* Stats Section - Minimal */}
      <div className="bg-neutral-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-neutral-100 mb-2">10+</div>
              <div className="text-sm text-neutral-400 tracking-wide">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-neutral-100 mb-2">50+</div>
              <div className="text-sm text-neutral-400 tracking-wide">Expert Therapists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-neutral-100 mb-2">70+</div>
              <div className="text-sm text-neutral-400 tracking-wide">Premium Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-neutral-100 mb-2">24/7</div>
              <div className="text-sm text-neutral-400 tracking-wide">Always Open</div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid Section */}
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              Find Your Nearest Spa
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              With over 70 locations across Delhi NCR, experience premium wellness services 
              at a centre near you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {allLocations.slice(0, 30).map((location, idx) => (
              <button
                key={idx}
                onClick={() => handleLocationSelect(location)}
                className="group p-4 bg-white border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-200 text-left hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900 group-hover:text-neutral-700">
                    {location}
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
                <p className="text-xs text-neutral-500 mt-1">Spa Centre</p>
              </button>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Link href="/locations">
              <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 px-8 py-6 rounded-lg text-base font-medium">
                Explore All Locations
              </Button>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-neutral-50 py-16 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl text-neutral-900 mb-6">Contact Us</h2>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-900 font-medium">Office No - 118, Defence Enclave,</p>
                    <p className="text-neutral-600">Adjoining Aerocity, Mahipalpur,</p>
                    <p className="text-neutral-600">New Delhi, Delhi 110037</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-neutral-400" />
                  <a href="tel:+9195252 93190" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    +91 95252 93190
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-neutral-400" />
                  <a href="mailto:info@russianspacentre.com" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    info@russianspacentre.com
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-900 font-medium">Opening Hours</p>
                    <p className="text-neutral-600">Open 24 Hours</p>
                    <p className="text-neutral-600">Monday - Sunday</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://maps.google.com/?q=118+Defence+Enclave+Mahipalpur+Delhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>View larger map</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Book Appointment */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-serif text-2xl text-neutral-900 mb-4">Book Your Appointment</h3>
                <p className="text-neutral-600 mb-6">
                  Call us at <a href="tel:+9195252 93190" className="text-neutral-900 font-medium">+91 95252 93190</a> or fill out our Online Form to reserve your spot.
                </p>
                <p className="text-neutral-600 mb-6">
                  Open daily 24 hours, we offer 24-Hour Massage Services and Couples Packages for maximum flexibility.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-6 rounded-lg">
                    Book Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Spa Locations */}
      <div className="bg-white py-12 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Popular Spa Locations in Delhi</h3>
          <p className="text-sm text-neutral-600">
            Spa in Aerocity, Delhi - Spa in Mahipalpur, Delhi - Body Massage in Dwarka, Delhi
          </p>
        </div>
      </div>

      {/* Our Keywords Section */}
      <div className="bg-neutral-50 py-8 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <h3 className="text-sm font-medium text-neutral-700 mb-4">
            Our Keywords
          </h3>
          <div className="text-xs text-neutral-600 leading-relaxed">
            {[
              "Mahipalpur Spa Centre",
              "Authentic Russian Banya",
              "Body Massage",
              "Full Body Massage",
              "Spa Services",
              "Deep Tissue Massage",
              "Swedish Massage",
              "Aromatherapy Massage",
              "Hot Stone Massage",
              "Aroma Oil Massage",
              "Balinese Massage",
              "Thai Massage",
              "Relaxation Therapy",
              "Beauty Treatments",
              "Wellness Services",
              "Couples Package",
              "Professional Therapists",
              "Mahipalpur",
              "Aerocity",
              "Dwarka",
              "Delhi NCR",
            ].join(", ")}
          </div>
        </div>
      </div>

      {/* Serving Areas */}
      <div className="bg-white py-8 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="text-xs text-neutral-500 space-y-2">
            <p>
              <span className="font-medium text-neutral-700">Serving areas:</span>{" "}
              Mahipalpur, Aerocity, Defence Colony, South Delhi
            </p>
            <p>
              <span className="font-medium text-neutral-700">Pincodes:</span>{" "}
              110001, 110011, 110089, 110075, 110070, 110005, 110049, 11048,
              122001, 122002, 201014, 201002, 201301, 121001, 110037, 110097,
              110067, 110057
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Mahipalpur Spa Centre
                  </h3>
                  <p className="text-xs text-neutral-500">Authentic Russian Banya</p>
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Experience authentic Russian Banya traditions in the heart of New Delhi. 
                Premium wellness services with 70+ locations across Delhi NCR.
              </p>

              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="p-2 bg-neutral-100 text-neutral-600 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 bg-neutral-100 text-neutral-600 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2 bg-neutral-100 text-neutral-600 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-neutral-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/prices" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Prices
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mahipalpur Spa Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-neutral-900 mb-4">
                Mahipalpur Spa
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Russian Body
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Massage Centres
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Beauty Spas For Men
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Russian Body Massage Centres
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    24 Hours Beauty Spas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Mahipalpur Spa in mahipalpur
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Mahipalpur Spa in aerocity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Mahipalpur Spa Mahipalpur
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-neutral-900 mb-4">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600">
                    Office No. 118, Defence Enclave,<br />
                    Adjoining Aerocity, Mahipalpur,<br />
                    New Delhi - 110037
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neutral-400" />
                  <a href="tel:+9195252 93190" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    +91 95252 93190
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-400" />
                  <a href="mailto:info@russianspacentre.com" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    info@russianspacentre.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-neutral-500">
                © 2026 Mahipalpur Spa Centre. All rights reserved. | 
                <a href="/privacy-policy" className="hover:text-neutral-900 ml-2">Privacy</a> • 
                <a href="/terms-of-service" className="hover:text-neutral-900 ml-2">Terms</a> • 
                <a href="/sitemap.xml" className="hover:text-neutral-900 ml-2">Sitemap</a>
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span>Mahipalpur Spa • Banya • Massage • Therapy</span>
              </div>
            </div>
            
            {/* Hidden SEO Links - Helps with internal linking */}
            <div className="hidden">
              <a href="/sitemap.xml">Sitemap</a>
              <a href="/dwarka-spa-center">Dwarka Spa</a>
              <a href="/aerocity-spa-center">Aerocity Spa</a>
              <a href="/mahipalpur-spa-center">Mahipalpur Spa</a>
              <a href="/saket-spa-center">Saket Spa</a>
              <a href="/rohini-spa-center">Rohini Spa</a>
              <a href="/russian-body-massage">Russian Body Massage</a>
              <a href="/beauty-spas-men">Beauty Spas For Men</a>
              <a href="/24-hours-massage">24 Hour Massage Services</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}