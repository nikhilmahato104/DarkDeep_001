// // src/pages/LocationPage.jsx
// import { useEffect, useState } from "react";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin, Calendar, Star, ChevronLeft } from "lucide-react";
// import { Link, useLocation } from "wouter";

// // Sample location data - in real app, this would come from an API
// const locationData = {
//   "dwarka": {
//     name: "Dwarka",
//     title: "Dwarka Spa Centre",
//     description: "Experience authentic Russian Banya and premium spa services in Dwarka. Our Dwarka location offers state-of-the-art facilities with expert therapists.",
//     phone: "+91-9876543210",
//     address: "Sector 10, Dwarka, New Delhi",
//     services: ["Russian Banya", "Deep Tissue Massage", "Aromatherapy", "Hot Stone Therapy"],
//     therapists: [
//       { name: "Soniya", experience: "5 years", specialty: "Russian Banya" },
//       { name: "Malaika", experience: "3 years", specialty: "Swedish Massage" },
//       { name: "Harleen", experience: "4 years", specialty: "Aromatherapy" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   "mahipalpur": {
//     name: "Mahipalpur",
//     title: "Mahipalpur Spa Centre",
//     description: "Our flagship location in Mahipalpur offers the ultimate luxury spa experience with traditional Russian treatments and modern amenities.",
//     phone: "+91-9876543211",
//     address: "Main Road, Mahipalpur, New Delhi",
//     services: ["Traditional Banya", "Couple Massage", "Body Scrub", "Reflexology"],
//     therapists: [
//       { name: "Ishqa", experience: "6 years", specialty: "Traditional Banya" },
//       { name: "Priya", experience: "4 years", specialty: "Couple Massage" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   // Add more locations as needed
//   "aerocity": {
//     name: "Aerocity",
//     title: "Aerocity Spa Centre",
//     description: "Premium spa services near the airport for travelers and locals. Perfect for relaxation before or after your flight.",
//     phone: "+91-9876543212",
//     address: "Aerocity, New Delhi",
//     services: ["Express Massage", "Detox Therapy", "Foot Reflexology", "Head & Shoulder Massage"],
//     therapists: [
//       { name: "Anjali", experience: "4 years", specialty: "Express Therapies" },
//       { name: "Riya", experience: "3 years", specialty: "Traveler Relaxation" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   "rohini": {
//     name: "Rohini",
//     title: "Rohini Spa Centre",
//     description: "Top-rated spa services in Rohini with authentic Russian treatments and modern wellness therapies.",
//     phone: "+91-9876543213",
//     address: "Sector 8, Rohini, New Delhi",
//     services: ["Full Body Massage", "Herbal Therapy", "Sauna", "Steam Bath"],
//     therapists: [
//       { name: "Kavita", experience: "5 years", specialty: "Herbal Treatments" },
//       { name: "Simran", experience: "4 years", specialty: "Body Massage" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ]
//   },
//   "connaughtplace": {
//     name: "Connaught Place",
//     title: "Connaught Place Spa Centre",
//     description: "Luxury spa in the heart of Delhi at Connaught Place. Experience premium Russian Banya in a central location.",
//     phone: "+91-9876543214",
//     address: "Connaught Place, New Delhi",
//     services: ["Premium Banya", "Luxury Massage", "Face Therapy", "Body Polishing"],
//     therapists: [
//       { name: "Neha", experience: "5 years", specialty: "Luxury Treatments" },
//       { name: "Pooja", experience: "4 years", specialty: "Face Therapy" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ]
//   }
// };

// // All locations list
// const allLocations = [
//   "Dwarka", "Aerocity", "Janakpuri", "Uttam Nagar", "Adarsh Colony", 
//   "Alaknanda", "Anand Vihar", "Ashok Nagar", "Azadpur", "Babarpur",
//   "Bali", "Bara Hindu Rao", "Bawana", "Begumpur", "Mayapuri",
//   "Saket", "Munirka", "Pari Chowk", "Safdarjung", "South Extension",
//   "Rohini", "Mahipalpur", "Mukherjee Nagar", "Cantonment",
//   "Chanakyapuri", "Chandni Chowk", "Chawri Bazar", "Chhattarpur",
//   "Chittaranjan Park", "Civil Lines", "Connaught Place", "Dabri",
//   "Rajendra Nagar", "RK Puram", "Sadatpur", "Timarpur", "Tughlakabad",
//   "Vasant Kunj", "Vasant Vihar", "Karol Bagh", "Lajpat Nagar",
//   "Paharganj", "Pitampura", "Defence", "Dhaula Kuan", "Dilshad Garden",
//   "East of Kailash", "Ghitorni", "Golf Links", "Govindpuri",
//   "Greater Kailash", "Green Park", "Nehru Vihar", "Nizamuddin",
//   "Okhla", "Partap", "Vikaspuri", "Wazirabad", "Rajouri Garden",
//   "Tilak Nagar", "Rajendra Place", "Kamla Nagar", "Hauz Khas",
//   "Jasola", "Kalkaji", "Khan Market", "Khanpur", "Malviya Nagar",
//   "Mandoli", "Mehrauli", "Patel Nagar", "Ashok Vihar", "Chhatpur",
//   "Mayur Vihar", "Nehru Place", "Vasundhara Endave", "Manesar"
// ];

// export default function LocationPage() {
//   const [locationDataState, setLocationDataState] = useState(null);
//   const [locName, setLocName] = useState("");

//   useEffect(() => {
//     // Get the 'loc' parameter from the URL
//     const params = new URLSearchParams(window.location.search);
//     const locParam = params.get("loc") || "";
//     const formattedLoc = locParam.toLowerCase().replace(/\s+/g, '');
    
//     console.log("Location param:", locParam, "Formatted:", formattedLoc);
    
//     if (locationData[formattedLoc]) {
//       setLocationDataState(locationData[formattedLoc]);
//       setLocName(locParam);
//     } else {
//       // Default to Dwarka if location not found
//       setLocationDataState(locationData["dwarka"]);
//       setLocName("Dwarka");
//     }
//   }, [window.location.search]);

//   if (!locationDataState) {
//     return (
//       <Layout>
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold mb-4">Loading...</h1>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       {/* Breadcrumb */}
//       <div className="bg-stone-50 py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center gap-2 text-sm">
//             <Link href="/">
//               <span className="text-stone-600 hover:text-primary cursor-pointer">Home</span>
//             </Link>
//             <ChevronLeft className="w-4 h-4 rotate-180 text-stone-400" />
//             <span className="text-stone-900 font-medium">Location</span>
//             <ChevronLeft className="w-4 h-4 rotate-180 text-stone-400" />
//             <span className="text-primary font-medium">{locName}</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//               {locationDataState.title}
//             </h1>
//             <p className="text-xl text-stone-300 mb-8">
//               {locationDataState.description}
//             </p>
//             <div className="flex flex-wrap justify-center gap-6">
//               <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
//                 <Phone className="w-5 h-5 text-primary" />
//                 <span className="font-medium">{locationDataState.phone}</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
//                 <MapPin className="w-5 h-5 text-primary" />
//                 <span className="font-medium">{locationDataState.address}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Left Column - Images */}
//             <div className="space-y-6">
//               <div className="aspect-[4/3] overflow-hidden rounded-lg">
//                 <img 
//                   src={locationDataState.images[0]} 
//                   alt={`${locName} Spa Centre`}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 {locationDataState.images.slice(1).map((img, idx) => (
//                   <div key={idx} className="aspect-square overflow-hidden rounded-lg">
//                     <img 
//                       src={img} 
//                       alt={`${locName} Spa ${idx + 2}`}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Details */}
//             <div>
//               <h2 className="font-display text-4xl text-stone-900 mb-8">
//                 Services Available at {locName}
//               </h2>
              
//               <div className="mb-12">
//                 <h3 className="text-2xl font-semibold mb-6 text-primary">Our Services</h3>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {locationDataState.services.map((service, idx) => (
//                     <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
//                       <div className="w-2 h-2 bg-primary rounded-full" />
//                       <span className="font-medium">{service}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-12">
//                 <h3 className="text-2xl font-semibold mb-6 text-primary">Expert Therapists</h3>
//                 <div className="space-y-6">
//                   {locationDataState.therapists.map((therapist, idx) => (
//                     <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-lg shadow-sm">
//                       <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                         <Star className="w-6 h-6 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-lg">{therapist.name}</h4>
//                         <p className="text-stone-600">{therapist.specialty}</p>
//                         <p className="text-sm text-stone-500 mt-1">{therapist.experience} experience</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA Section */}
//               <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg">
//                 <h3 className="text-2xl font-semibold mb-4">Book Your Appointment</h3>
//                 <p className="text-stone-600 mb-6">
//                   Ready to experience the best spa services in {locName}? Book your appointment now.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <Link href="/contact">
//                     <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
//                       <Calendar className="w-5 h-5 mr-2" />
//                       Book Now
//                     </Button>
//                   </Link>
//                   <a href={`tel:${locationDataState.phone}`}>
//                     <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
//                       <Phone className="w-5 h-5 mr-2" />
//                       Call Now
//                     </Button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Nearby Locations */}
//       <section className="py-20 bg-stone-50">
//         <div className="container mx-auto px-4">
//           <h2 className="font-display text-4xl text-center mb-12 text-stone-900">
//             Other Locations
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {allLocations.slice(0, 20).map((loc, idx) => {
//               const formattedLoc = loc.toLowerCase().replace(/\s+/g, '');
//               return (
//                 <Link key={idx} href={`/loc?loc=${formattedLoc}`}>
//                   <div className="p-4 bg-white border border-stone-200 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer text-center">
//                     <span className="font-medium text-stone-800">{loc}</span>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//           <div className="text-center mt-8">
//             <Link href="/contact">
//               <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
//                 View All Locations
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



//v2 
// import { useEffect, useState } from "react";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin, Calendar, Star, ChevronLeft } from "lucide-react";
// import { Link } from "wouter";

// /* ---------------- COMMON CONTENT ---------------- */

// const commonContent = {
//   description:
//     "Experience authentic Russian Banya and premium spa services with expert therapists and luxury facilities.",
//   services: [
//     "Russian Banya",
//     "Deep Tissue Massage",
//     "Aromatherapy",
//     "Hot Stone Therapy",
//     "Couple Massage",
//   ],
//   therapists: [
//     { name: "Soniya", experience: "5 years", specialty: "Russian Banya" },
//     { name: "Malaika", experience: "4 years", specialty: "Massage Therapy" },
//     { name: "Anjali", experience: "3 years", specialty: "Aromatherapy" },
//   ],
// };

// /* ---------------- LOCATION-SPECIFIC DATA ---------------- */

// const locationData = {
//   dwarka: {
//     name: "Dwarka",
//     title: "Dwarka Spa Centre",
//     phone: "+91-9876543210",
//     address: "Sector 10, Dwarka, New Delhi",
//     therapists: [
//       { name: "Kavita", experience: "6 years", specialty: "Herbal Therapy" },
//       { name: "Simran", experience: "4 years", specialty: "Full Body Massage" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
//       "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
//     ],
//   },

//   mahipalpur: {
//     name: "Mahipalpur",
//     title: "Mahipalpur Spa Centre",
//     phone: "+91-9876543211",
//     address: "Main Road, Mahipalpur, New Delhi",
//     images: [
//       "https://images.unsplash.com/photo-1552693673-1bf958298935",
//       "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
//     ],
//   },

//   aerocity: {
//     name: "Aerocity",
//     title: "Aerocity Spa Centre",
//     phone: "+91-9876543212",
//     address: "Aerocity, New Delhi",
//     therapists: [
//       { name: "Riya", experience: "4 years", specialty: "Express Massage" },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
//     ],
//   },
// };

// /* ---------------- ALL LOCATIONS LIST ---------------- */

// const allLocations = [
//   "Dwarka", "Aerocity", "Janakpuri", "Uttam Nagar", "Rohini",
//   "Mahipalpur", "Connaught Place", "Karol Bagh", "Saket", "Munirka",
//   "Vasant Kunj", "Rajouri Garden", "Pitampura", "Lajpat Nagar",
//   "Greater Kailash", "Green Park", "Hauz Khas", "Malviya Nagar",
//   "Mayur Vihar", "Nehru Place", "Okhla", "Paharganj", "Tilak Nagar",
//   "Vikaspuri", "Chanakyapuri", "Chandni Chowk", "Civil Lines",
//   "Chittaranjan Park", "Golf Links", "Govindpuri", "Kalkaji",
//   "Mehrauli", "Patel Nagar", "Rajendra Nagar", "RK Puram",
// ];

// /* ---------------- COMPONENT ---------------- */

// export default function LocationPage() {
//   const [locationDataState, setLocationDataState] = useState(null);
//   const [locName, setLocName] = useState("");
//   const [page, setPage] = useState(1);

//   const PER_PAGE = 20;

//   // useEffect(() => {
//   //   const params = new URLSearchParams(window.location.search);
//   //   const locParam = params.get("loc") || "dwarka";
//   //   const formattedLoc = locParam.toLowerCase().replace(/\s+/g, "");

//   //   const locData = locationData[formattedLoc] || locationData.dwarka;

//   //   setLocationDataState({
//   //     ...commonContent,
//   //     ...locData,
//   //     therapists: locData.therapists || commonContent.therapists,
//   //   });

//   //   setLocName(locData.name || "Dwarka");
//   // }, [window.location.search]);
// useEffect(() => {
//   const params = new URLSearchParams(window.location.search);
//   const locParam = params.get("loc") || "dwarka";
//   const formattedLoc = locParam.toLowerCase().replace(/\s+/g, "");

//   const locData = locationData[formattedLoc] || locationData.dwarka;

//   setLocationDataState({
//     ...commonContent,
//     ...locData,
//     therapists: locData.therapists || commonContent.therapists,
//   });

//   setLocName(locData.name || "Dwarka");

//   // 🔑 RESET PAGINATION ON LOCATION CHANGE
//   setPage(1);

// }, [window.location.search]);

//   if (!locationDataState) return null;

//   const start = (page - 1) * PER_PAGE;
//   const end = start + PER_PAGE;

//   return (
//     <Layout>
//       {/* Breadcrumb */}
//       <div className="bg-stone-50 py-4">
//         <div className="container mx-auto px-4 flex items-center gap-2 text-sm">
//           <Link href="/">Home</Link>
//           <ChevronLeft className="w-4 h-4 rotate-180" />
//           <span className="text-primary">{locName}</span>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="py-20 bg-stone-900 text-white text-center">
//         <h1 className="text-5xl font-bold mb-4">{locationDataState.title}</h1>
//         <p className="max-w-3xl mx-auto text-stone-300">
//           {locationDataState.description}
//         </p>
//       </section>

//       {/* Content */}
//       <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-16">
//         {/* Images */}
//         <div>
//           <img
//             src={locationDataState.images[0]}
//             className="rounded-lg mb-4"
//             alt={locName}
//           />
//           <img
//             src={locationDataState.images[1]}
//             className="rounded-lg"
//             alt={locName}
//           />
//         </div>

//         {/* Details */}
//         <div>
//           <h2 className="text-3xl mb-6">Services at {locName}</h2>

//           <div className="grid grid-cols-2 gap-4 mb-10">
//             {locationDataState.services.map((s, i) => (
//               <div key={i} className="p-3 bg-stone-100 rounded">
//                 {s}
//               </div>
//             ))}
//           </div>

//           <h3 className="text-2xl mb-4">Expert Therapists</h3>
//           <div className="space-y-4">
//             {locationDataState.therapists.map((t, i) => (
//               <div key={i} className="p-4 border rounded flex gap-4">
//                 <Star className="text-primary" />
//                 <div>
//                   <div className="font-semibold">{t.name}</div>
//                   <div className="text-sm">{t.specialty}</div>
//                   <div className="text-xs text-stone-500">{t.experience}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other Locations (Pagination) */}
//       <section className="py-20 bg-stone-50">
//         <h2 className="text-center text-3xl mb-10">Other Locations</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4">
//           {allLocations.slice(start, end).map((loc, i) => (
//             <Link
//               key={i}
//               href={`/loc?loc=${loc.toLowerCase().replace(/\s+/g, "")}`}
//             >
//               <div className="p-4 bg-white border rounded text-center hover:border-primary">
//                 {loc}
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="flex justify-center gap-4 mt-10">
//           <Button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
//             Previous
//           </Button>
//           <Button
//             disabled={end >= allLocations.length}
//             onClick={() => setPage(p => p + 1)}
//           >
//             Next
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Star, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "wouter";

/* ---------------- COMMON CONTENT ---------------- */

const commonContent = {
  description:
    "Experience authentic Russian Banya and premium spa services with expert therapists and luxury facilities.",
  services: [
    "Russian Banya",
    "Deep Tissue Massage",
    "Aromatherapy",
    "Hot Stone Therapy",
    "Couple Massage",
  ],
  therapists: [
    { name: "Soniya", experience: "5 years", specialty: "Russian Banya" },
    { name: "Malaika", experience: "4 years", specialty: "Massage Therapy" },
    { name: "Anjali", experience: "3 years", specialty: "Aromatherapy" },
  ],
};

/* ---------------- LOCATION-SPECIFIC DATA ---------------- */

const locationData = {
  dwarka: {
    name: "Dwarka",
    title: "Dwarka Spa Centre",
    phone: "+91-9876543210",
    address: "Sector 10, Dwarka, New Delhi",
    therapists: [
      { name: "Kavita", experience: "6 years", specialty: "Herbal Therapy" },
      { name: "Simran", experience: "4 years", specialty: "Full Body Massage" },
    ],
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
    ],
  },

  mahipalpur: {
    name: "Mahipalpur",
    title: "Mahipalpur Spa Centre",
    phone: "+91-9876543211",
    address: "Main Road, Mahipalpur, New Delhi",
    images: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
    ],
  },

  aerocity: {
    name: "Aerocity",
    title: "Aerocity Spa Centre",
    phone: "+91-9876543212",
    address: "Aerocity, New Delhi",
    therapists: [
      { name: "Riya", experience: "4 years", specialty: "Express Massage" },
    ],
    images: [
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    ],
  },
};

/* ---------------- ALL LOCATIONS LIST ---------------- */

const allLocations = [
  "Dwarka", "Aerocity", "Janakpuri", "Uttam Nagar", "Rohini",
  "Mahipalpur", "Connaught Place", "Karol Bagh", "Saket", "Munirka",
  "Vasant Kunj", "Rajouri Garden", "Pitampura", "Lajpat Nagar",
  "Greater Kailash", "Green Park", "Hauz Khas", "Malviya Nagar",
  "Mayur Vihar", "Nehru Place", "Okhla", "Paharganj", "Tilak Nagar",
  "Vikaspuri", "Chanakyapuri", "Chandni Chowk", "Civil Lines",
  "Chittaranjan Park", "Golf Links", "Govindpuri", "Kalkaji",
  "Mehrauli", "Patel Nagar", "Rajendra Nagar", "RK Puram",
];

/* ---------------- COMPONENT ---------------- */

export default function LocationPage() {
  const [locationDataState, setLocationDataState] = useState(null);
  const [locName, setLocName] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Best practice: Add loading state for better UX
  const [error, setError] = useState(null); // Best practice: Handle errors gracefully

  const [currentPath] = useLocation(); // Use wouter's useLocation for reactive navigation detection

  const PER_PAGE = 20; // Best practice: Extract constants to top-level for easy maintenance

  useEffect(() => {
    setIsLoading(true); // Start loading on location change
    setError(null); // Clear previous errors

    // Best practice: Parse query params safely
    const params = new URLSearchParams(window.location.search);
    const locParam = params.get("loc")?.toLowerCase().replace(/\s+/g, "") || "dwarka";

    // Best practice: Check if location exists, fallback with error handling
    const locData = locationData[locParam];
    if (!locData) {
      setError(`Location "${locParam}" not found. Showing default (Dwarka) instead.`);
      locData = locationData.dwarka; // Fallback to default
    }

    // Best practice: Merge data immutably
    const mergedData = {
      ...commonContent,
      ...locData,
      therapists: [...commonContent.therapists, ...(locData.therapists || [])], // Merge therapists uniquely if needed; here we append location-specific
    };

    setLocationDataState(mergedData);
    setLocName(locData.name || "Dwarka");
    setPage(1); // Reset pagination on location change

    setIsLoading(false);
  }, [currentPath]); // Depend on currentPath to re-run on navigation

  // Best practice: Memoize derived data to avoid unnecessary re-computations
  const paginatedLocations = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return allLocations.slice(start, end);
  }, [page]);

  // Best practice: Handle loading and error states in JSX
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-xl">Loading location data...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!locationDataState) return null;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-stone-50 py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/">Home</Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <span className="text-primary">{locName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-stone-900 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">{locationDataState.title}</h1>
        <p className="max-w-3xl mx-auto text-stone-300">
          {locationDataState.description}
        </p>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-16">
        {/* Images */}
        <div>
          <img
            src={locationDataState.images[0]}
            className="rounded-lg mb-4"
            alt={`${locName} Spa Image 1`} // Best practice: Add meaningful alt text for accessibility
            loading="lazy" // Best practice: Lazy load images for performance
          />
          <img
            src={locationDataState.images[1]}
            className="rounded-lg"
            alt={`${locName} Spa Image 2`}
            loading="lazy"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl mb-6">Services at {locName}</h2>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {locationDataState.services.map((s, i) => (
              <div key={i} className="p-3 bg-stone-100 rounded">
                {s}
              </div>
            ))}
          </div>

          <h3 className="text-2xl mb-4">Expert Therapists</h3>
          <div className="space-y-4">
            {locationDataState.therapists.map((t, i) => (
              <div key={i} className="p-4 border rounded flex gap-4">
                <Star className="text-primary" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm">{t.specialty}</div>
                  <div className="text-xs text-stone-500">{t.experience}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations (Pagination) */}
      <section className="py-20 bg-stone-50">
        <h2 className="text-center text-3xl mb-10">Other Locations</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4">
          {paginatedLocations.map((loc, i) => (
            <Link
              key={i}
              href={`/loc?loc=${loc.toLowerCase().replace(/\s+/g, "")}`}
            >
              <div className="p-4 bg-white border rounded text-center hover:border-primary">
                {loc}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <Button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>
            Previous
          </Button>
          <Button
            disabled={(page * PER_PAGE) >= allLocations.length}
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </Button>
        </div>
      </section>
    </Layout>
  );
}