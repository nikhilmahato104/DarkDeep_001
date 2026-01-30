// import { ReactNode, useState } from "react";
// import { Link, useLocation } from "wouter";
// import { Menu, X, Phone, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface LayoutProps {
//   children: ReactNode;
// }

// export function Layout({ children }: LayoutProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [location] = useLocation();

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/prices", label: "Prices" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact Us" },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     // <div className="min-h-screen flex flex-col font-body bg-stone-50">
//     <div className="min-h-screen flex flex-col font-body bg-stone-50 overflow-x-hidden">
//       {/* Top Navbar */}
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all duration-300">
//         <div className="container mx-auto px-4 h-20 flex items-center justify-between">
//           {/* Left: Mobile Number */}
//           <div className="flex items-center gap-2 text-primary font-medium">
//             <Phone className="h-4 w-4" />
//             <a href="tel:+919818931148" className="hover:underline tracking-wide text-sm md:text-base">
//               +91 98189 31148
//             </a>
//           </div>

//           {/* Center: Logo (Optional - Text for now) */}
//           <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
//             <Link href="/" className="font-display text-2xl font-bold tracking-wider text-stone-800 uppercase hover:text-primary transition-colors">
//               Russian Spa Centre
//             </Link>
//           </div>

//           {/* Right: Hamburger Menu */}
//           <button 
//             onClick={toggleMenu} 
//             className="p-2 hover:bg-stone-100 rounded-full transition-colors group"
//             aria-label="Toggle menu"
//           >
//             <div className="flex items-center gap-2 text-stone-600 group-hover:text-primary">
//               <span className="hidden sm:inline font-medium uppercase text-xs tracking-widest">Menu</span>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </div>
//           </button>
//         </div>
//       </header>

//       {/* Full Screen Navigation Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-40 bg-white pt-24 px-4 overflow-y-auto"
//           >
//             <div className="container mx-auto max-w-2xl">
//               <nav className="flex flex-col items-center gap-6">
//                 {navLinks.map((link) => (
//                   <Link 
//                     key={link.href} 
//                     href={link.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={cn(
//                       "text-3xl md:text-5xl font-display font-medium transition-all duration-300 hover:text-primary hover:tracking-wider",
//                       location === link.href ? "text-primary" : "text-stone-800"
//                     )}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
                
//                 <div className="mt-12 flex flex-col items-center gap-4 text-stone-500">
//                   <div className="flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 98189 31148</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     <span>info@russianspacentre.com</span>
//                   </div>
//                 </div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Content */}
//       <main className="flex-grow">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//             {/* Brand Column */}
//             <div className="space-y-6">
//               <h3 className="font-display text-2xl text-primary font-bold">Russian Spa Centre</h3>
//               <p className="text-sm leading-relaxed opacity-80">
//                 Experience authentic Russian Banya traditions in the heart of New Delhi. A sanctuary of relaxation and rejuvenation.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
//                 <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-6">
//               <h4 className="font-display text-xl text-white">Contact Us</h4>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex items-start gap-3">
//                   <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
//                   <span>Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi, Delhi 110037</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Phone className="h-5 w-5 text-primary shrink-0" />
//                   <a href="tel:+919818931148" className="hover:text-white">+91 98189 31148</a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail className="h-5 w-5 text-primary shrink-0" />
//                   <a href="mailto:info@russianspacentre.com" className="hover:text-white">info@russianspacentre.com</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-6">
//               <h4 className="font-display text-xl text-white">Opening Hours</h4>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex items-center gap-3">
//                   <Clock className="h-5 w-5 text-primary shrink-0" />
//                   <span>Open 24 Hours, Monday - Sunday</span>
//                 </li>
//                 <li>
//                   <a href="#" className="text-primary hover:underline underline-offset-4">View larger map</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Popular Locations */}
//             <div className="space-y-6">
//               <h4 className="font-display text-xl text-white">Popular Locations</h4>
//               <ul className="space-y-2 text-sm opacity-80">
//                 <li>Spa in Aerocity, Delhi</li>
//                 <li>Spa in Mahipalpur, Delhi</li>
//                 <li>Body Massage in Dwarka, Delhi</li>
//                 <li>Russian Spa in Delhi</li>
//                 <li>Luxury Spa Near Airport</li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-stone-800 pt-8 text-center text-xs opacity-50">
//             <p>&copy; 2026 Russian Spa Centre. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





//V2
import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Mail, Clock, Instagram, Facebook, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const [locationPath] = useLocation();

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
  const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);

  // Function to handle location selection
  const handleLocationSelect = (locationName: string) => {
    const formattedLocation = locationName.toLowerCase().replace(/\s+/g, '');
    window.location.href = `/loc?loc=${formattedLocation}`;
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-stone-50 overflow-x-hidden">
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

          {/* Center: Logo */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Link href="/" className="font-display text-2xl font-bold tracking-wider text-stone-800 uppercase hover:text-primary transition-colors">
              Russian Spa Centre
            </Link>
          </div>

          {/* Right: Hamburger Menu and Location Dropdown */}
          <div className="flex items-center gap-4">
            {/* Location Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={toggleLocationDropdown}
                onMouseEnter={() => setIsLocationDropdownOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-stone-700 hover:text-primary transition-colors group"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 bg-white border border-stone-200 rounded-lg shadow-xl z-50"
                  onMouseLeave={() => setIsLocationDropdownOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="font-semibold text-stone-900 mb-3 text-lg">Our Locations</h3>
                    <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                      {popularLocations.map((loc, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLocationSelect(loc)}
                          className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-primary rounded transition-colors text-nowrap"
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <Link href="/contact">
                        <button className="w-full text-center px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded transition-colors font-medium">
                          View All Locations →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile: Location Button */}
            <div className="md:hidden">
              <button
                onClick={() => window.location.href = "/contact"}
                className="flex items-center gap-2 px-4 py-2 text-stone-700 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Locations</span>
              </button>
            </div>

            {/* Hamburger Menu Button */}
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
                      locationPath === link.href ? "text-primary" : "text-stone-800"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Location Link in Mobile Menu */}
                <div className="mt-8">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = "/contact";
                    }}
                    className="text-2xl md:text-4xl font-display font-medium text-stone-800 hover:text-primary transition-all duration-300 hover:tracking-wider flex items-center gap-3"
                  >
                    <MapPin className="h-6 w-6" />
                    Locations
                  </button>
                </div>
                
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

      {/* Second Footer - Locations Only */}
      <div className="bg-stone-800 text-stone-300 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Our Locations</h2>
              <p className="text-stone-400 max-w-2xl">
                Russian Spa Centre has multiple branches across Delhi NCR to serve you better. 
                Find your nearest location for authentic Russian Banya and premium spa services.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Your Location
              </Button>
            </Link>
          </div>
          
          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allLocations.slice(0, 36).map((location, idx) => (
              <button
                key={idx}
                onClick={() => handleLocationSelect(location)}
                className="group p-4 bg-stone-900/50 hover:bg-stone-700 rounded-lg transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-200 group-hover:text-white">{location}</span>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-xs text-stone-500 mt-2 group-hover:text-stone-300">
                  Spa Centre
                </p>
              </button>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-6">
                View All {allLocations.length}+ Locations
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
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

            {/* Opening Hours */}
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

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-display text-xl text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-white hover:underline">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white hover:underline">Our Services</Link></li>
                <li><Link href="/prices" className="hover:text-white hover:underline">Price List</Link></li>
                <li><Link href="/gallery" className="hover:text-white hover:underline">Photo Gallery</Link></li>
                <li><Link href="/blog" className="hover:text-white hover:underline">Blog & Tips</Link></li>
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