// src/pages/LocationPage.jsx
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Star, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "wouter";

// Sample location data - in real app, this would come from an API
const locationData = {
  "dwarka": {
    name: "Dwarka",
    title: "Dwarka Spa Centre",
    description: "Experience authentic Russian Banya and premium spa services in Dwarka. Our Dwarka location offers state-of-the-art facilities with expert therapists.",
    phone: "+91-9876543210",
    address: "Sector 10, Dwarka, New Delhi",
    services: ["Russian Banya", "Deep Tissue Massage", "Aromatherapy", "Hot Stone Therapy"],
    therapists: [
      { name: "Soniya", experience: "5 years", specialty: "Russian Banya" },
      { name: "Malaika", experience: "3 years", specialty: "Swedish Massage" },
      { name: "Harleen", experience: "4 years", specialty: "Aromatherapy" },
    ],
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ]
  },
  "mahipalpur": {
    name: "Mahipalpur",
    title: "Mahipalpur Spa Centre",
    description: "Our flagship location in Mahipalpur offers the ultimate luxury spa experience with traditional Russian treatments and modern amenities.",
    phone: "+91-9876543211",
    address: "Main Road, Mahipalpur, New Delhi",
    services: ["Traditional Banya", "Couple Massage", "Body Scrub", "Reflexology"],
    therapists: [
      { name: "Ishqa", experience: "6 years", specialty: "Traditional Banya" },
      { name: "Priya", experience: "4 years", specialty: "Couple Massage" },
    ],
    images: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ]
  },
  // Add more locations as needed
  "aerocity": {
    name: "Aerocity",
    title: "Aerocity Spa Centre",
    description: "Premium spa services near the airport for travelers and locals. Perfect for relaxation before or after your flight.",
    phone: "+91-9876543212",
    address: "Aerocity, New Delhi",
    services: ["Express Massage", "Detox Therapy", "Foot Reflexology", "Head & Shoulder Massage"],
    therapists: [
      { name: "Anjali", experience: "4 years", specialty: "Express Therapies" },
      { name: "Riya", experience: "3 years", specialty: "Traveler Relaxation" },
    ],
    images: [
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ]
  },
  "rohini": {
    name: "Rohini",
    title: "Rohini Spa Centre",
    description: "Top-rated spa services in Rohini with authentic Russian treatments and modern wellness therapies.",
    phone: "+91-9876543213",
    address: "Sector 8, Rohini, New Delhi",
    services: ["Full Body Massage", "Herbal Therapy", "Sauna", "Steam Bath"],
    therapists: [
      { name: "Kavita", experience: "5 years", specialty: "Herbal Treatments" },
      { name: "Simran", experience: "4 years", specialty: "Body Massage" },
    ],
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ]
  },
  "connaughtplace": {
    name: "Connaught Place",
    title: "Connaught Place Spa Centre",
    description: "Luxury spa in the heart of Delhi at Connaught Place. Experience premium Russian Banya in a central location.",
    phone: "+91-9876543214",
    address: "Connaught Place, New Delhi",
    services: ["Premium Banya", "Luxury Massage", "Face Therapy", "Body Polishing"],
    therapists: [
      { name: "Neha", experience: "5 years", specialty: "Luxury Treatments" },
      { name: "Pooja", experience: "4 years", specialty: "Face Therapy" },
    ],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ]
  }
};

// All locations list
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

export default function LocationPage() {
  const [locationDataState, setLocationDataState] = useState(null);
  const [locName, setLocName] = useState("");

  useEffect(() => {
    // Get the 'loc' parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const locParam = params.get("loc") || "";
    const formattedLoc = locParam.toLowerCase().replace(/\s+/g, '');
    
    console.log("Location param:", locParam, "Formatted:", formattedLoc);
    
    if (locationData[formattedLoc]) {
      setLocationDataState(locationData[formattedLoc]);
      setLocName(locParam);
    } else {
      // Default to Dwarka if location not found
      setLocationDataState(locationData["dwarka"]);
      setLocName("Dwarka");
    }
  }, [window.location.search]);

  if (!locationDataState) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Loading...</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-stone-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">
              <span className="text-stone-600 hover:text-primary cursor-pointer">Home</span>
            </Link>
            <ChevronLeft className="w-4 h-4 rotate-180 text-stone-400" />
            <span className="text-stone-900 font-medium">Location</span>
            <ChevronLeft className="w-4 h-4 rotate-180 text-stone-400" />
            <span className="text-primary font-medium">{locName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {locationDataState.title}
            </h1>
            <p className="text-xl text-stone-300 mb-8">
              {locationDataState.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">{locationDataState.phone}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{locationDataState.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Images */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={locationDataState.images[0]} 
                  alt={`${locName} Spa Centre`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {locationDataState.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`${locName} Spa ${idx + 2}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <h2 className="font-display text-4xl text-stone-900 mb-8">
                Services Available at {locName}
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Our Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {locationDataState.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Expert Therapists</h3>
                <div className="space-y-6">
                  {locationDataState.therapists.map((therapist, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{therapist.name}</h4>
                        <p className="text-stone-600">{therapist.specialty}</p>
                        <p className="text-sm text-stone-500 mt-1">{therapist.experience} experience</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Book Your Appointment</h3>
                <p className="text-stone-600 mb-6">
                  Ready to experience the best spa services in {locName}? Book your appointment now.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Now
                    </Button>
                  </Link>
                  <a href={`tel:${locationDataState.phone}`}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12 text-stone-900">
            Other Locations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allLocations.slice(0, 20).map((loc, idx) => {
              const formattedLoc = loc.toLowerCase().replace(/\s+/g, '');
              return (
                <Link key={idx} href={`/loc?loc=${formattedLoc}`}>
                  <div className="p-4 bg-white border border-stone-200 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer text-center">
                    <span className="font-medium text-stone-800">{loc}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
