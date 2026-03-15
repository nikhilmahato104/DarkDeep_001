// src/pages/LocationPage.jsx
import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, MapPin, Calendar, Star, ChevronRight, Clock, 
  Sparkles, Award, Users, Heart, ArrowRight, ArrowLeft, 
  Info, Building, Shield, Crown, CheckCircle, Flower2,
  Waves, Wind, Droplets, Gem 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- COMMON CONTENT ---------------- */

const commonContent = {
  description:
    "Experience authentic Russian Banya and premium spa services with expert therapists and luxury facilities in a serene environment.",
  services: [
    "Russian Banya Experience",
    "Deep Tissue Massage",
    "Aromatherapy Massage",
    "Hot Stone Therapy",
    "Couples Massage",
    "Ayurvedic Treatment"
  ],
  therapists: [
    { 
      name: "Dr. Soniya Sharma", 
      experience: "8 years", 
      specialty: "Russian Banya Specialist",
      rating: 4.9,
      bio: "Certified banya therapist trained in traditional Russian techniques. Expert in heat therapy and venik massage."
    },
    { 
      name: "Malaika Kapoor", 
      experience: "6 years", 
      specialty: "Deep Tissue Massage",
      rating: 4.8,
      bio: "Advanced certified massage therapist specializing in chronic pain relief and muscle tension treatment."
    },
    { 
      name: "Anjali Mehta", 
      experience: "5 years", 
      specialty: "Aromatherapy Expert",
      rating: 4.7,
      bio: "Certified aromatherapist with expertise in essential oil blends for holistic wellness and stress relief."
    },
  ],
};

/* ---------------- LOCATION-SPECIFIC DATA ---------------- */

const locationData = {
  dwarka: {
    name: "Dwarka",
    title: "Dwarka Luxury Spa & Wellness Centre",
    phone: "+91 95252 93190",
    address: "Sector 10, Dwarka, New Delhi - 110075",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Kavita Singh", 
        experience: "7 years", 
        specialty: "Herbal Therapy",
        rating: 4.9,
        bio: "Herbal therapy expert with 7+ years experience in traditional Ayurvedic treatments."
      },
      { 
        name: "Simran Kaur", 
        experience: "5 years", 
        specialty: "Swedish Massage",
        rating: 4.8,
        bio: "Specialized in full body relaxation techniques and therapeutic massage."
      },
    ],
    images: [
      "/mahipalpur9.jpeg",
      "/mahipalpur10.jpeg",
      "/mahipalpur11.jpeg",
      "/mahipalpur12.jpeg",
    ],
    features: ["Premium Private Rooms", "Steam & Sauna", "Ample Parking", "Couple Suites"],
    description: "Our Dwarka location offers a serene escape in the heart of the city. Spread across 5000 sq. ft., this premium wellness centre features traditional Russian Banya, modern spa treatments, and luxurious amenities designed to rejuvenate your mind and body."
  },

  mahipalpur: {
    name: "Mahipalpur",
    title: "Mahipalpur Premium Spa & Banya",
    phone: "+91 95252 93190",
    address: "Main Road, Mahipalpur Village, New Delhi - 110037",
    openingHours: "Open 24/7",
    images: [
      "/mahipalpur13.jpeg",
      "/mahipalpur14.jpeg",
      "/mahipalpur15.jpeg",
      "/mahipalpur16.jpeg",
    ],
    features: ["Airport Proximity", "Express Services", "VIP Lounge", "Jacuzzi"],
    description: "Conveniently located near Indira Gandhi International Airport, our Mahipalpur centre caters to travelers and locals alike. Featuring contemporary interiors, express services, and a wide range of treatments including authentic Russian Banya."
  },

  aerocity: {
    name: "Aerocity",
    title: "Aerocity Executive Spa & Wellness",
    phone: "+91 95252 93190",
    address: "Asset Area, Aerocity, New Delhi - 110037",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Riya Malhotra", 
        experience: "6 years", 
        specialty: "Executive Massage",
        rating: 4.8,
        bio: "Specialist in corporate wellness programs and express relaxation therapies for business travelers."
      },
    ],
    images: [
      "/mahipalpur17.jpeg",
      "/mahipalpur18.jpeg",
      "/mahipalpur9.jpeg",
      "/mahipalpur10.jpeg",
    ],
    features: ["Business Class", "Corporate Packages", "Private Suites", "Concierge Service"],
    description: "Situated in the premium business district of Aerocity, our executive spa offers world-class facilities for business professionals. Enjoy VIP treatment, corporate wellness packages, and elite services designed for discerning clients."
  },
  
  rohini: {
    name: "Rohini",
    title: "Rohini Luxury Wellness Centre",
    phone: "+91 95252 93190",
    address: "Sector 8, Rohini, New Delhi - 110085",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Priya Verma", 
        experience: "7 years", 
        specialty: "Traditional Therapy",
        rating: 4.9,
        bio: "Expert in traditional Indian massage techniques and holistic wellness programs."
      },
    ],
    images: [
      "/mahipalpur11.jpeg",
      "/mahipalpur12.jpeg",
      "/mahipalpur13.jpeg",
      "/mahipalpur14.jpeg",
    ],
    features: ["Family Packages", "Group Wellness", "Steam Room", "Yoga Studio"],
    description: "Our Rohini location offers comprehensive wellness services for families and groups. Experience authentic treatments in a comfortable, welcoming environment with state-of-the-art facilities."
  },

  connaughtplace: {
    name: "Connaught Place",
    title: "Connaught Place Elite Spa",
    phone: "+91 95252 93190",
    address: "Block C, Connaught Place, New Delhi - 110001",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Neha Gupta", 
        experience: "8 years", 
        specialty: "Luxury Treatments",
        rating: 5.0,
        bio: "Luxury spa specialist trained in international wellness protocols and premium treatment experiences."
      },
    ],
    images: [
      "/mahipalpur15.jpeg",
      "/mahipalpur16.jpeg",
      "/mahipalpur17.jpeg",
      "/mahipalpur18.jpeg",
    ],
    features: ["Central Location", "Executive Suites", "Valet Parking", "Premium Products"],
    description: "Located in the heart of Delhi at Connaught Place, our elite spa offers premium services for executives and luxury seekers. Experience unmatched sophistication and personalized wellness journeys."
  },

  saket: {
    name: "Saket",
    title: "Saket Premium Wellness Hub",
    phone: "+91 95252 93190",
    address: "Select Citywalk, Saket, New Delhi - 110017",
    openingHours: "Open 24/7",
    images: [
      "/mahipalpur9.jpeg",
      "/mahipalpur10.jpeg",
      "/mahipalpur11.jpeg",
      "/mahipalpur12.jpeg",
    ],
    features: ["Mall Location", "Retail Therapy", "Couple Suites", "Spa Café"],
    description: "Experience luxury wellness in the heart of Saket's shopping district. Perfect for a rejuvenating break during your shopping spree or a dedicated wellness session."
  },

  vasantkunj: {
    name: "Vasant Kunj",
    title: "Vasant Kunj Serene Spa",
    phone: "+91 95252 93190",
    address: "Vasant Kunj, New Delhi - 110070",
    openingHours: "Open 24/7",
    images: [
      "/mahipalpur13.jpeg",
      "/mahipalpur14.jpeg",
      "/mahipalpur15.jpeg",
      "/mahipalpur16.jpeg",
    ],
    features: ["Peaceful Locale", "Garden Views", "Private Terraces", "Organic Products"],
    description: "Nestled in the peaceful neighborhood of Vasant Kunj, our spa offers a tranquil retreat with garden views and organic treatments for the discerning client."
  }
};

/* ---------------- ALL LOCATIONS LIST ---------------- */

const allLocations = [
  "Dwarka", "Aerocity", "Mahipalpur", "Rohini", "Connaught Place",
  "Saket", "Vasant Kunj", "Janakpuri", "Uttam Nagar", "Karol Bagh",
  "Lajpat Nagar", "Greater Kailash", "Green Park", "Hauz Khas",
  "Malviya Nagar", "Mayur Vihar", "Nehru Place", "Okhla",
  "Paharganj", "Pitampura", "Rajouri Garden", "Tilak Nagar",
  "Vikaspuri", "Chanakyapuri", "Chandni Chowk", "Civil Lines",
  "Chittaranjan Park", "Golf Links", "Govindpuri", "Kalkaji",
  "Mehrauli", "Patel Nagar", "Rajendra Nagar", "RK Puram"
];

/* ---------------- COMPONENT ---------------- */

export default function LocationPage() {
  const [locationDataState, setLocationDataState] = useState(null);
  const [locName, setLocName] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setLocation] = useLocation();
  const [activeImage, setActiveImage] = useState(0);

  const PER_PAGE = 12;
  const totalPages = Math.ceil(allLocations.length / PER_PAGE);

  // Handle location change (with page reload)
  const handleLocationChange = (location) => {
    setLocation(`/loc?loc=${location}`);
  };

  // Handle pagination change (without page reload)
  const handlePageChange = (newPage) => {
    setPage(newPage);
    
    const params = new URLSearchParams(window.location.search);
    const currentLoc = params.get('loc') || 'dwarka';
    const newUrl = `/loc?loc=${currentLoc}&page=${newPage}`;
    
    window.history.pushState({}, '', newUrl);
    
    document.getElementById('locations-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Initialize location data and page from URL
  useEffect(() => {
    setIsLoading(true);

    const params = new URLSearchParams(window.location.search);
    const locParam = params.get("loc")?.toLowerCase().replace(/\s+/g, "") || "dwarka";
    const pageParam = params.get("page");
    
    if (pageParam) {
      const pageNum = parseInt(pageParam);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        setPage(pageNum);
      }
    }

    let locData = locationData[locParam];
    if (!locData) {
      const matchedKey = Object.keys(locationData).find(key => 
        key.toLowerCase().includes(locParam.toLowerCase()) || 
        locParam.toLowerCase().includes(key.toLowerCase())
      );
      locData = locationData[matchedKey] || locationData.dwarka;
    }

    const mergedData = {
      ...commonContent,
      ...locData,
      therapists: [...commonContent.therapists, ...(locData.therapists || [])],
    };

    setLocationDataState(mergedData);
    setLocName(locData.name || "Dwarka");
    setActiveImage(0);

    setTimeout(() => setIsLoading(false), 300);
  }, [currentPath, totalPages]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get("page");
      if (pageParam) {
        const pageNum = parseInt(pageParam);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
          setPage(pageNum);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [totalPages]);

  // Memoize paginated locations
  const paginatedLocations = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return allLocations.slice(start, end);
  }, [page]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-8 h-8 text-amber-600 animate-pulse" />
              </div>
            </div>
            <p className="text-lg font-medium text-neutral-600 animate-pulse">Loading premium spa details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!locationDataState) return null;

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4"
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 text-neutral-600 hover:text-amber-600 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-neutral-300" />
            <span className="font-medium text-amber-600">{locName}</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img 
            src={locationDataState.images[0]} 
            alt={`${locName} Spa & Wellness Centre - Premium Spa in Delhi`}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-6 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-400 mb-6 font-medium text-sm tracking-wider border border-amber-500/30">
              PREMIUM WELLNESS CENTRE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {locationDataState.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {locationDataState.description}
            </p>
            
            {/* Contact Info Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`tel:${locationDataState.phone}`}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:border-amber-400/50 transition-all group"
              >
                <div className="p-2 bg-amber-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-neutral-300">Call Now</p>
                  <p className="text-white font-semibold">{locationDataState.phone}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20"
              >
                <div className="p-2 bg-amber-600 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-neutral-300">Location</p>
                  <p className="text-white font-semibold">{locationDataState.address}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20"
              >
                <div className="p-2 bg-amber-600 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-neutral-300">Open Hours</p>
                  <p className="text-white font-semibold">{locationDataState.openingHours}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 rounded-none text-lg font-medium shadow-xl shadow-amber-600/30 transition-all duration-300 hover:scale-105">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Appointment Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery with Left Side Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location Description */}
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-600 rounded-2xl">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-neutral-900">About This Location</h2>
                    <p className="text-neutral-600">Discover what makes this spa centre special</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">Location Overview</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {locationDataState.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">Quality Assurance</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Certified therapists, hygienic facilities, and premium products ensure the highest standards of service and safety at our {locName} location.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Crown className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">Luxury Experience</h3>
                      <p className="text-neutral-600 leading-relaxed">
                        From the moment you enter, experience premium comfort, privacy, and personalized attention in a serene environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image with Thumbnails */}
              <div className="space-y-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      src={locationDataState.images[activeImage]}
                      className="w-full h-full object-cover"
                      alt={`${locName} Spa - Premium Treatment Room View ${activeImage + 1}`}
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {activeImage + 1} / {locationDataState.images.length}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {locationDataState.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveImage(idx)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                        activeImage === idx
                          ? "border-amber-600 shadow-lg"
                          : "border-neutral-200 hover:border-amber-400"
                      }`}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt={`Thumbnail ${idx + 1}`}
                        loading="lazy"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Services Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                    Premium Services
                  </h2>
                  <p className="text-neutral-600">Experience our exclusive treatments</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationDataState.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group p-5 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-neutral-800 group-hover:text-amber-600 transition-colors">
                          {service}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-1">60-90 min</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              {locationDataState.features && (
                <div className="pt-6">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Special Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {locationDataState.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities Preview */}
              <div className="grid grid-cols-4 gap-3 pt-4">
                {[
                  { icon: <Waves />, label: "Steam" },
                  { icon: <Droplets />, label: "Jacuzzi" },
                  { icon: <Wind />, label: "Sauna" },
                  { icon: <Flower2 />, label: "Organic" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-3 bg-neutral-50 rounded-lg">
                    <div className="text-amber-600 mb-1 flex justify-center">{item.icon}</div>
                    <span className="text-xs text-neutral-600">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100 mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-600 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Contact via WhatsApp</h3>
                    <p className="text-sm text-neutral-600">Instant booking & inquiries</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919525293190" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-100 rounded-full mb-6">
              <Users className="w-6 h-6 text-amber-600" />
              <span className="font-semibold text-amber-700">Expert Team</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Meet Our Expert Therapists
            </h2>
            <p className="text-lg text-neutral-600">
              Certified professionals dedicated to your relaxation and well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationDataState.therapists.map((therapist, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                        <Heart className="w-10 h-10 text-amber-600" />
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-amber-50 rounded-full">
                      <span className="font-semibold text-amber-700">{therapist.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                      {therapist.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-3">{therapist.specialty}</p>
                    <p className="text-neutral-600 text-sm">{therapist.bio}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(therapist.rating)
                                ? "text-amber-500 fill-amber-500"
                                : "text-neutral-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-neutral-700">
                        {therapist.rating}/5
                      </span>
                    </div>
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations with Pagination */}
      <section id="locations-section" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Other Locations
            </h2>
            <p className="text-lg text-neutral-400">
              Discover premium spa experiences across Delhi NCR
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {paginatedLocations.map((location, idx) => {
              const formattedLocation = location.toLowerCase().replace(/\s+/g, "");
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href={`/loc?loc=${formattedLocation}&page=1`}
                    className="block"
                  >
                    <div className="group p-5 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500/50 rounded-xl text-center transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 mx-auto mb-3 bg-amber-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                        {location}
                      </h3>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  
                  if (pageNumber === 1) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-lg transition-all ${
                          page === pageNumber
                            ? "bg-amber-600 text-white shadow-lg"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  
                  if (
                    pageNumber === page ||
                    pageNumber === page - 1 ||
                    pageNumber === page + 1
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-lg transition-all ${
                          page === pageNumber
                            ? "bg-amber-600 text-white shadow-lg"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  
                  if (pageNumber === totalPages && page < totalPages - 1) {
                    return (
                      <div key="ellipsis" className="flex items-center">
                        <span className="text-neutral-500 px-2">...</span>
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="w-10 h-10 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-neutral-700 transition-all"
                        >
                          {totalPages}
                        </button>
                      </div>
                    );
                  }
                  
                  return null;
                })}
              </div>
              
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-neutral-400 text-sm">
                Showing locations{" "}
                <span className="font-semibold text-amber-400">
                  {(page - 1) * PER_PAGE + 1}-{Math.min(page * PER_PAGE, allLocations.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-amber-400">{allLocations.length}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Book your appointment today and transform your relaxation experience at our {locName} location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg font-medium shadow-xl transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </Link>
              <a href={`tel:${locationDataState.phone}`}>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 rounded-none text-lg font-medium">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}