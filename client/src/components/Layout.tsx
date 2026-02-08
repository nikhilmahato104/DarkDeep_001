import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Mail, Clock, Instagram, Facebook, ChevronDown, ChevronRight, Sparkles, Heart, Users, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

// All locations from your list
const allLocations = [
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
  "Mayur Vihar", "Nehru Place", "Vasundhara Endave", "Manesar"
];

// Popular locations (first 10 for dropdown)
const popularLocations = allLocations.slice(0, 10);

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
    { href: "/prices", label: "Prices", icon: "₹" },
    { href: "/gallery", label: "Gallery", icon: "📷" },
    { href: "/blog", label: "Blog", icon: "✍️" },
    { href: "/contact", label: "Contact Us", icon: <Phone className="w-5 h-5" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);

  // Function to handle location selection
  const handleLocationSelect = (locationName: string) => {
    const formattedLocation = locationName.toLowerCase().replace(/\s+/g, '');
    window.location.href = `/loc?loc=${formattedLocation}`;
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-gradient-to-br from-rose-50/30 via-stone-50 to-amber-50/20 overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      {/* <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="https://wa.me/919525293190"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <div className="flex items-center gap-2">
          <span className="font-bold">💬</span>
          <span className="hidden sm:inline font-medium">WhatsApp...</span>
        </div>
      </motion.a> */}




      {/* Floating WhatsApp + Call Buttons */}
<div
  className="
    fixed 
    bottom-8 
    right-8 
    z-50 
    flex 
    items-center 
    gap-4
  "
>
  {/* Call Button */}
  <motion.a
    href="tel:+919525293190"
    aria-label="Call Now"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", delay: 0.9 }}
    className="
      w-14 h-14
      flex items-center justify-center
      bg-rose-500 hover:bg-rose-600
      text-white
      rounded-full
      shadow-xl
      hover:scale-110
      transition-all
    "
  >
    <FaPhone className="text-xl" />
  </motion.a>

  {/* WhatsApp Button */}
  <motion.a
    href="https://wa.me/919525293190"
    target="_blank"
    aria-label="Chat on WhatsApp"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", delay: 1 }}
    className="
      w-14 h-14
      flex items-center justify-center
      bg-green-500 hover:bg-green-600
      text-white
      rounded-full
      shadow-xl
      hover:scale-110
      transition-all
    "
  >
    <FaWhatsapp className="text-2xl" />
  </motion.a>
</div>



      


      


      



      {/* Top Navbar */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={cn(
          "sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500",
          isScrolled 
            ? "bg-white/90 border-rose-100 shadow-lg" 
            : "bg-gradient-to-r from-white via-white to-rose-50/30 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Left: Brand Logo with gradient */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Escort Service Centre
                </span>
                {/* <span className="text-xs text-stone-500">9525293190</span> */}
                <a href="tel:+919525293190" className="text-xs text-stone-500">
  +91 9525293190
</a>

              </div>
            </div>
          </Link>

          {/* Right: Navigation */}
          <div className="flex items-center gap-6">
            {/* Location Dropdown */}
            <div className="relative hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLocationDropdown}
                onMouseEnter={() => setIsLocationDropdownOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-50 to-amber-50 rounded-full text-stone-700 hover:text-rose-600 transition-all duration-300 group border border-rose-100 shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLocationDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 bg-white border border-rose-100 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    onMouseLeave={() => setIsLocationDropdownOpen(false)}
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-rose-500" />
                        <h3 className="font-semibold text-stone-900 text-lg">Our Locations</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                        {popularLocations.map((loc, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleLocationSelect(loc)}
                            className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-amber-50 hover:text-rose-600 rounded-lg transition-all duration-200 text-nowrap"
                          >
                            {loc}
                          </motion.button>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-rose-100">
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="w-full text-center px-3 py-2 text-sm bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full transition-all duration-300 font-medium hover:shadow-lg hover:shadow-rose-500/30"
                          >
                            View All Locations →
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Number */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+919525293190"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </motion.a>

            {/* Hamburger Menu Button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu} 
              className="p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-full hover:shadow-lg transition-all duration-300 group border border-rose-100"
              aria-label="Toggle menu"
            >
              <div className="flex items-center gap-2 text-stone-600 group-hover:text-rose-600">
                <span className="hidden sm:inline font-medium text-xs tracking-widest">MENU</span>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-white via-rose-50/50 to-amber-50/30 backdrop-blur-sm pt-32 px-4 overflow-y-auto"
          >
            <div className="container mx-auto max-w-4xl">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full max-w-md"
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-6 p-6 rounded-2xl transition-all duration-500 group w-full",
                        locationPath === link.href 
                          ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xl shadow-rose-500/30" 
                          : "bg-white/80 hover:bg-white border border-rose-100 hover:border-rose-200 hover:shadow-lg"
                      )}
                    >
                      <div className={cn(
                        "p-3 rounded-full transition-all duration-300",
                        locationPath === link.href 
                          ? "bg-white/20" 
                          : "bg-gradient-to-r from-rose-100 to-amber-100 text-rose-600 group-hover:scale-110"
                      )}>
                        {link.icon}
                      </div>
                      <span className="text-2xl md:text-3xl font-display font-medium">
                        {link.label}
                      </span>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                      >
                        <ChevronRight className={cn(
                          "w-6 h-6 transition-transform group-hover:translate-x-2",
                          locationPath === link.href ? "text-white" : "text-rose-400"
                        )} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Contact Info in Menu */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md"
                >
                  <div className="p-6 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl text-white">
                    <h3 className="font-display text-xl mb-4">Contact Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <a href="tel:+919525293190" className="hover:underline">+91 9525293190</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5" />
                        <a href="mailto:info@russianspacentre.com" className="hover:underline">info@russianspacentre.com</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white rounded-2xl border border-rose-100">
                    <h3 className="font-display text-xl mb-4 text-stone-800">Social Media</h3>
                    <div className="flex gap-3">
                      <a href="#" className="p-3 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-3 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div> */}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90">Expert Therapists</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold">70+</div>
              <div className="text-sm opacity-90">Locations</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Open All Days</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Footer - Locations Only */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-rose-900/20 text-stone-300 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                Find Your Nearest{" "}
                <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                  Spa Centre
                </span>
              </h2>
              <p className="text-stone-400 max-w-2xl text-lg leading-relaxed">
                With over 70 locations across Delhi NCR, we bring authentic Russian Banya 
                and premium spa services closer to you. Each centre maintains our gold 
                standard of luxury and relaxation.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-10 py-7 rounded-full flex items-center gap-3 shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-medium">Find Your Location</span>
              </Button>
            </Link>
          </motion.div>
          
          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allLocations.slice(0, 36).map((location, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                onClick={() => handleLocationSelect(location)}
                className="group p-6 bg-gradient-to-br from-stone-900/50 to-stone-800/30 hover:from-rose-900/30 hover:to-amber-900/20 rounded-2xl transition-all duration-500 text-left border border-stone-700/30 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-200 group-hover:text-white text-lg">
                    {location}
                  </span>
                  <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p className="text-sm text-stone-500 group-hover:text-amber-300">
                    call Girls
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-12 py-7 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300">
                View All {allLocations.length}+ Locations
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-300 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            {/* <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-30"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" fill="white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Escort Service Centre</h3>
                  <p className="text-sm text-stone-400">Luxury Redefined</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80 max-w-md">
                Experience the perfect blend of ancient Russian Banya traditions and 
                modern wellness techniques. Your sanctuary for ultimate relaxation 
                and rejuvenation in the heart of Delhi.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 hover:text-white transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 hover:text-white transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div> */}


            <div className="space-y-8">
  {/* Brand */}
  <div className="flex items-center gap-4">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-30"></div>
      <div className="relative w-14 h-14 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center">
        <Heart className="w-7 h-7 text-white" fill="white" />
      </div>
    </div>
    <div>
      <h3 className="font-display text-2xl font-bold text-white">
        Escort Service Centre
      </h3>
      <p className="text-sm text-stone-400">Luxury Redefined</p>
    </div>
  </div>

  {/* SEO Optimized Description */}
  <p className="text-sm leading-relaxed opacity-80 max-w-md">
    Escort Service Centre is a premium{" "}
    <strong>escort service in Delhi</strong> providing{" "}
    <strong>Mahipalpur escort service</strong>,{" "}
    <strong>Aerocity call girls</strong>,{" "}
    <strong>Dwarka escorts</strong> and{" "}
    <strong>independent escorts in Delhi NCR</strong>.
    We offer safe, private and{" "}
    <strong>24/7 luxury escort services</strong> tailored
    for elite clientele.
  </p>

  {/* SEO Keyword Links */}
  <div className="text-xs text-stone-400 leading-relaxed">
    Popular Searches:&nbsp;
    <a
      href="/escort-service/mahipalpur"
      className="hover:text-amber-300 transition-colors"
    >
      Mahipalpur Escort Service
    </a>{" "}
    |{" "}
    <a
      href="/escort-service/aerocity"
      className="hover:text-amber-300 transition-colors"
    >
      Aerocity Call Girls
    </a>{" "}
    |{" "}
    <a
      href="/escort-service/delhi"
      className="hover:text-amber-300 transition-colors"
    >
      Escort Service in Delhi
    </a>{" "}
    |{" "}
    <a
      href="/escort-service/dwarka"
      className="hover:text-amber-300 transition-colors"
    >
      Dwarka Escorts
    </a>{" "}
    |{" "}
    <a
      href="/escort-service/independent"
      className="hover:text-amber-300 transition-colors"
    >
      Independent Escorts
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex gap-4 pt-2">
    <a
      href="#"
      aria-label="Instagram"
      className="p-3 bg-stone-800 rounded-full hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 hover:text-white transition-all duration-300"
    >
      <Instagram className="h-5 w-5" />
    </a>
    <a
      href="#"
      aria-label="Facebook"
      className="p-3 bg-stone-800 rounded-full hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 hover:text-white transition-all duration-300"
    >
      <Facebook className="h-5 w-5" />
    </a>
  </div>
</div>

            

            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="font-display text-xl text-white">Get In Touch</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-gradient-to-r from-rose-900/30 to-amber-900/30 rounded-lg group-hover:from-rose-500 group-hover:to-amber-500 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-rose-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-sm opacity-90">Address</span>
                    <span className="text-sm">Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 bg-gradient-to-r from-rose-900/30 to-amber-900/30 rounded-lg group-hover:from-rose-500 group-hover:to-amber-500 transition-all duration-300">
                    <Phone className="h-5 w-5 text-rose-400 group-hover:text-white" />
                  </div>
                  <a href="tel:+919525293190" className="text-lg font-medium hover:text-amber-300 transition-colors">
                    +91 9525293190
                  </a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 bg-gradient-to-r from-rose-900/30 to-amber-900/30 rounded-lg group-hover:from-rose-500 group-hover:to-amber-500 transition-all duration-300">
                    <Mail className="h-5 w-5 text-rose-400 group-hover:text-white" />
                  </div>
                  <a href="mailto:info@russianspacentre.com" className="text-sm hover:text-amber-300 transition-colors">
                    info@russianspacentre.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-8">
              <h4 className="font-display text-xl text-white">Working Hours</h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 group">
                  <div className="p-2 bg-gradient-to-r from-rose-900/30 to-amber-900/30 rounded-lg group-hover:from-rose-500 group-hover:to-amber-500 transition-all duration-300">
                    <Clock className="h-5 w-5 text-amber-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-lg font-medium">24/7 Open</span>
                    <span className="text-sm opacity-90">Monday - Sunday</span>
                  </div>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 hover:gap-3 transition-all duration-300">
                    <span>View larger map</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h4 className="font-display text-xl text-white">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                  { href: "/prices", label: "Price List" },
                  { href: "/gallery", label: "Photo Gallery" },
                  { href: "/blog", label: "Blog & Tips" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <Link href={link.href} className="flex items-center gap-3 text-sm hover:text-amber-300 transition-colors">
                      <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-10 text-center">
            <p className="text-sm opacity-60">
              &copy; 2026 Escort Service Centre. All rights reserved. | 
              <a href="#" className="hover:text-amber-300 transition-colors ml-2">Privacy Policy</a> • 
              <a href="#" className="hover:text-amber-300 transition-colors ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}