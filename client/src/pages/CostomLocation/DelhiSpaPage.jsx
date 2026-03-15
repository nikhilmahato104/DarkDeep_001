import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, MapPin, Calendar, Star, Clock, Sparkles, Award, 
  Users, Heart, ArrowRight, Check, Shield, 
  Thermometer, Droplets, Wind, Gem, Leaf, Moon, Sun, Zap,
  Navigation, ChevronDown, MessageCircle, 
  Facebook, Instagram, Twitter, Mail, Globe,
  Train, Bus, Car, Plane
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function DelhiSpaPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAllLocations, setShowAllLocations] = useState(false);

  // SEO meta tags
  useEffect(() => {
    document.title = "Best Spa in Delhi | 70+ Locations Across Delhi NCR | Russian Banya & Massage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Discover premium spa services across Delhi NCR. Russian Banya, couple massage, Ayurvedic treatments at 70+ locations including Mahipalpur, Aerocity, Dwarka, Saket. 24/7 available.'
      );
    }
  }, []);

  // Hero image from public folder
  const heroImage = "/mahipalpur17.jpeg";

  // Delhi stats
  const delhiStats = [
    { icon: <MapPin className="w-6 h-6" />, value: "70+", label: "Delhi Locations" },
    { icon: <Users className="w-6 h-6" />, value: "200+", label: "Expert Therapists" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Open All Days" },
    { icon: <Star className="w-6 h-6 fill-amber-500" />, value: "4.9", label: "Customer Rating" }
  ];

  // Delhi zones
  const delhiZones = [
    { name: "South Delhi", count: "25+", color: "bg-green-100 text-green-700" },
    { name: "West Delhi", count: "15+", color: "bg-amber-100 text-amber-700" },
    { name: "North Delhi", count: "12+", color: "bg-blue-100 text-blue-700" },
    { name: "East Delhi", count: "10+", color: "bg-purple-100 text-purple-700" },
    { name: "Central Delhi", count: "8+", color: "bg-rose-100 text-rose-700" },
    { name: "Delhi NCR", count: "70+", color: "bg-stone-100 text-stone-700" }
  ];

  // All Delhi locations
  const allLocations = [
    { name: "Mahipalpur", area: "South West Delhi", pincode: "110037", nearby: "Airport", zone: "South Delhi" },
    { name: "Aerocity", area: "South West Delhi", pincode: "110037", nearby: "Airport", zone: "South Delhi" },
    { name: "Dwarka", area: "South West Delhi", pincode: "110075", nearby: "Sector 21", zone: "West Delhi" },
    { name: "Saket", area: "South Delhi", pincode: "110017", nearby: "Select Citywalk", zone: "South Delhi" },
    { name: "Rohini", area: "North West Delhi", pincode: "110085", nearby: "Rohini East", zone: "North Delhi" },
    { name: "Janakpuri", area: "West Delhi", pincode: "110058", nearby: "District Center", zone: "West Delhi" },
    { name: "Karol Bagh", area: "Central Delhi", pincode: "110005", nearby: "Ajmal Khan Road", zone: "Central Delhi" },
    { name: "Lajpat Nagar", area: "South Delhi", pincode: "110024", nearby: "Central Market", zone: "South Delhi" },
    { name: "Connaught Place", area: "Central Delhi", pincode: "110001", nearby: "Rajiv Chowk", zone: "Central Delhi" },
    { name: "Vasant Kunj", area: "South West Delhi", pincode: "110070", nearby: "Ambience Mall", zone: "South Delhi" },
    { name: "Rajouri Garden", area: "West Delhi", pincode: "110027", nearby: "City Square", zone: "West Delhi" },
    { name: "Pitampura", area: "North West Delhi", pincode: "110034", nearby: "TV Tower", zone: "North Delhi" },
    { name: "Greater Kailash", area: "South Delhi", pincode: "110048", nearby: "M Block Market", zone: "South Delhi" },
    { name: "Hauz Khas", area: "South Delhi", pincode: "110016", nearby: "Hauz Khas Village", zone: "South Delhi" },
    { name: "Defence Colony", area: "South Delhi", pincode: "110024", nearby: "Defence Market", zone: "South Delhi" },
    { name: "Green Park", area: "South Delhi", pincode: "110016", nearby: "AIIMS", zone: "South Delhi" },
    { name: "Malviya Nagar", area: "South Delhi", pincode: "110017", nearby: "DLF Avenue", zone: "South Delhi" },
    { name: "Nehru Place", area: "South Delhi", pincode: "110019", nearby: "IT Hub", zone: "South Delhi" },
    { name: "Okhla", area: "South East Delhi", pincode: "110020", nearby: "Jamia", zone: "East Delhi" },
    { name: "Mayur Vihar", area: "East Delhi", pincode: "110091", nearby: "Cross River Mall", zone: "East Delhi" },
    { name: "Patel Nagar", area: "Central Delhi", pincode: "110008", nearby: "South Patel Nagar", zone: "Central Delhi" },
    { name: "Rajendra Nagar", area: "Central Delhi", pincode: "110060", nearby: "Old Rajinder Nagar", zone: "Central Delhi" },
    { name: "Mukherjee Nagar", area: "North Delhi", pincode: "110009", nearby: "GTB Nagar", zone: "North Delhi" },
    { name: "Timarpur", area: "North Delhi", pincode: "110054", nearby: "Civil Lines", zone: "North Delhi" },
    { name: "Ashok Vihar", area: "North West Delhi", pincode: "110052", nearby: "Phase 1", zone: "North Delhi" },
    { name: "Shalimar Bagh", area: "North West Delhi", pincode: "110088", nearby: "BN Block", zone: "North Delhi" },
    { name: "Paschim Vihar", area: "West Delhi", pincode: "110063", nearby: "A Block", zone: "West Delhi" },
    { name: "Vikaspuri", area: "West Delhi", pincode: "110018", nearby: "District Park", zone: "West Delhi" },
    { name: "Uttam Nagar", area: "West Delhi", pincode: "110059", nearby: "Metro Station", zone: "West Delhi" },
    { name: "Tilak Nagar", area: "West Delhi", pincode: "110018", nearby: "Tilak Nagar", zone: "West Delhi" }
  ];

  // Filter locations by zone
  const filteredLocations = activeTab === "all" 
    ? allLocations 
    : allLocations.filter(loc => loc.zone === activeTab);

  const displayedLocations = showAllLocations 
    ? filteredLocations 
    : filteredLocations.slice(0, 12);

  // Transport hubs
  const transportHubs = [
    { icon: <Plane className="w-4 h-4" />, name: "Airport", locations: ["Mahipalpur", "Aerocity"] },
    { icon: <Train className="w-4 h-4" />, name: "Metro", locations: ["All Major Stations"] },
    { icon: <Train className="w-4 h-4" />, name: "Railway", locations: ["New Delhi", "Old Delhi"] },
    { icon: <Bus className="w-4 h-4" />, name: "Bus Stand", locations: ["ISBT", "Majnu ka Tilla"] },
    { icon: <Car className="w-4 h-4" />, name: "Highway", locations: ["NH-8", "NH-24"] }
  ];

  // NCR cities
  const ncrCities = ["Gurugram", "Noida", "Ghaziabad", "Faridabad", "Greater Noida"];

  // Pincodes
  const delhiPincodes = [
    "110001", "110011", "110037", "110075", "110070", "110005", 
    "110049", "110048", "110024", "110016", "110017", "110019",
    "110020", "110091", "110008", "110060", "110009", "110054",
    "110052", "110088", "110063", "110018", "110059", "110058",
    "110027", "110034", "110085"
  ];

  return (
    <Layout>
      {/* SEO H1 */}
      <h1 className="sr-only">Best Spa in Delhi | 70+ Locations Across Delhi NCR | Russian Banya & Massage Services</h1>

      {/* Hero Section - Simple with local image */}
      <section className="relative bg-stone-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury spa in Delhi" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Delhi NCR • 70+ Locations</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Best Spa in Delhi
            </h2>
            
            <p className="text-xl text-stone-200 mb-8 max-w-2xl">
              Premium Russian Banya, Couple Massage & Ayurvedic Treatments at 70+ locations across Delhi NCR
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/locations">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                  <MapPin className="w-5 h-5 mr-3" />
                  Find Nearest Location
                </Button>
              </Link>
              
              <a href="tel:+9195252 93190" className="inline-flex items-center gap-3 px-8 py-6 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20">
                <Phone className="w-5 h-5" />
                +9195252 93190
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {delhiStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 bg-stone-100 rounded-2xl text-amber-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delhi Zones */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Delhi NCR Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {delhiZones.map((zone, idx) => (
              <div key={idx} className={`p-4 rounded-xl ${zone.color} text-center`}>
                <div className="font-bold">{zone.name}</div>
                <div className="text-sm">{zone.count} locations</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-stone-900">Delhi Locations</h3>
            
            {/* Zone Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === "all" 
                    ? "bg-amber-600 text-white" 
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                All Delhi
              </button>
              {["South Delhi", "West Delhi", "North Delhi", "East Delhi", "Central Delhi"].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setActiveTab(zone)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeTab === zone 
                      ? "bg-amber-600 text-white" 
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedLocations.map((location, idx) => (
              <div key={idx} className="p-4 border border-stone-200 rounded-lg hover:border-amber-300 transition-all">
                <Link href={`/${location.name.toLowerCase().replace(/\s+/g, '-')}-spa`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-stone-900">{location.name}</h4>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{location.area}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded">
                      {location.pincode}
                    </span>
                    <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded">
                      Near {location.nearby}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {filteredLocations.length > 12 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllLocations(!showAllLocations)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 rounded-lg text-stone-700 hover:border-amber-300"
              >
                {showAllLocations ? 'Show Less' : `View All ${filteredLocations.length} Locations`}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllLocations ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Transport & Accessibility */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Easy Access Across Delhi</h3>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {transportHubs.map((hub, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border border-stone-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                    {hub.icon}
                  </div>
                  <span className="font-medium">{hub.name}</span>
                </div>
                <p className="text-xs text-stone-500">{hub.locations.join(", ")}</p>
              </div>
            ))}
          </div>

          {/* NCR Cities */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-stone-700 mr-2">Serving NCR:</span>
            {ncrCities.map((city, idx) => (
              <span key={idx} className="px-3 py-1 bg-white border border-stone-200 rounded-full text-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Premium Services Across Delhi</h3>
          <p className="text-lg text-stone-600 mb-8 max-w-3xl">
            All our Delhi locations offer a wide range of professional spa services
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Thermometer />, name: "Russian Banya", locations: "All Major Locations" },
              { icon: <Heart />, name: "Couple Spa", locations: "Premium Locations" },
              { icon: <Leaf />, name: "Ayurvedic", locations: "South & West Delhi" },
              { icon: <Zap />, name: "Deep Tissue", locations: "All Locations" },
              { icon: <Droplets />, name: "Hot Stone", locations: "Select Locations" },
              { icon: <Wind />, name: "Aromatherapy", locations: "All Locations" },
              { icon: <Sparkles />, name: "Swedish", locations: "All Locations" },
              { icon: <Gem />, name: "Facial", locations: "Premium Spas" }
            ].map((service, idx) => (
              <div key={idx} className="p-4 border border-stone-200 rounded-lg">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-lg w-fit mb-3">
                  {service.icon}
                </div>
                <h4 className="font-bold text-stone-900">{service.name}</h4>
                <p className="text-xs text-stone-500 mt-1">{service.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Why Delhi Chooses Us</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "70+ Locations",
                desc: "Nearest spa just minutes away from anywhere in Delhi NCR",
                icon: <MapPin className="w-6 h-6" />
              },
              {
                title: "24/7 Availability",
                desc: "Round-the-clock service at all major Delhi locations",
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: "Certified Therapists",
                desc: "200+ professional therapists across Delhi",
                icon: <Users className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-stone-200">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-lg w-fit mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pincodes Section - Simple */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-6 bg-stone-50 rounded-lg">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Serving All Delhi Pincodes</h3>
            <div className="flex flex-wrap gap-2">
              {delhiPincodes.map((pincode, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-stone-200 rounded text-sm text-stone-600">
                  {pincode}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Nearest Delhi Spa
          </h3>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Choose from 70+ locations across Delhi NCR. Book your appointment now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                <MapPin className="w-5 h-5 mr-3" />
                View All Locations
              </Button>
            </Link>
            
            <a 
              href="https://wa.me/919525293190" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-4 bg-white/5 rounded-lg">
              <Phone className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="font-semibold">+9195252 93190</p>
              <p className="text-sm text-stone-400">Call 24/7</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <MapPin className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="font-semibold">70+ Locations</p>
              <p className="text-sm text-stone-400">Across Delhi NCR</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="font-semibold">24/7 Open</p>
              <p className="text-sm text-stone-400">All Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Delhi Spa FAQ</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How many spa locations in Delhi?",
                a: "We have 70+ premium spa locations across all zones of Delhi NCR."
              },
              {
                q: "Are Delhi spas open 24/7?",
                a: "Yes, all our major Delhi locations operate 24/7 including weekends."
              },
              {
                q: "Nearest spa to Delhi Airport?",
                a: "Mahipalpur and Aerocity locations are just 5-7 minutes from the airport."
              },
              {
                q: "Do you serve NCR cities?",
                a: "Yes, we serve Gurugram, Noida, Ghaziabad, Faridabad and Greater Noida."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 border border-stone-200 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">{faq.q}</h4>
                <p className="text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}