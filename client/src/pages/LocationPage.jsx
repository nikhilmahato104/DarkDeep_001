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



























//v2

// import { useEffect, useMemo, useState } from "react";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin, Calendar, Star, ChevronLeft } from "lucide-react";
// import { Link, useLocation } from "wouter";

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
//   const [isLoading, setIsLoading] = useState(true); // Best practice: Add loading state for better UX
//   const [error, setError] = useState(null); // Best practice: Handle errors gracefully

//   const [currentPath] = useLocation(); // Use wouter's useLocation for reactive navigation detection

//   const PER_PAGE = 20; // Best practice: Extract constants to top-level for easy maintenance

//   useEffect(() => {
//     setIsLoading(true); // Start loading on location change
//     setError(null); // Clear previous errors

//     // Best practice: Parse query params safely
//     const params = new URLSearchParams(window.location.search);
//     const locParam = params.get("loc")?.toLowerCase().replace(/\s+/g, "") || "dwarka";

//     // Best practice: Check if location exists, fallback with error handling
//     const locData = locationData[locParam];
//     if (!locData) {
//       setError(`Location "${locParam}" not found. Showing default (Dwarka) instead.`);
//       locData = locationData.dwarka; // Fallback to default
//     }

//     // Best practice: Merge data immutably
//     const mergedData = {
//       ...commonContent,
//       ...locData,
//       therapists: [...commonContent.therapists, ...(locData.therapists || [])], // Merge therapists uniquely if needed; here we append location-specific
//     };

//     setLocationDataState(mergedData);
//     setLocName(locData.name || "Dwarka");
//     setPage(1); // Reset pagination on location change

//     setIsLoading(false);
//   }, [currentPath]); // Depend on currentPath to re-run on navigation

//   // Best practice: Memoize derived data to avoid unnecessary re-computations
//   const paginatedLocations = useMemo(() => {
//     const start = (page - 1) * PER_PAGE;
//     const end = start + PER_PAGE;
//     return allLocations.slice(start, end);
//   }, [page]);

//   // Best practice: Handle loading and error states in JSX
//   if (isLoading) {
//     return (
//       <Layout>
//         <div className="container mx-auto px-4 py-20 text-center">
//           <p className="text-xl">Loading location data...</p>
//         </div>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout>
//         <div className="container mx-auto px-4 py-20 text-center">
//           <p className="text-xl text-red-600">{error}</p>
//         </div>
//       </Layout>
//     );
//   }

//   if (!locationDataState) return null;

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
//             alt={`${locName} Spa Image 1`} // Best practice: Add meaningful alt text for accessibility
//             loading="lazy" // Best practice: Lazy load images for performance
//           />
//           <img
//             src={locationDataState.images[1]}
//             className="rounded-lg"
//             alt={`${locName} Spa Image 2`}
//             loading="lazy"
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
//           {paginatedLocations.map((loc, i) => (
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
//           <Button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>
//             Previous
//           </Button>
//           <Button
//             disabled={(page * PER_PAGE) >= allLocations.length}
//             onClick={() => setPage(p => p + 1)}
//           >
//             Next
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }










// //v3
// import { useEffect, useMemo, useState } from "react";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Phone, MapPin, Calendar, Star, ChevronRight, Clock, Sparkles, Award, Users, Heart, ArrowRight, ArrowLeft, Info, Building, Shield, Crown } from "lucide-react";
// import { Link, useLocation } from "wouter";
// import { motion, AnimatePresence } from "framer-motion";

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
//     { 
//       name: "Soniya", 
//       experience: "5 years", 
//       specialty: "Russian Banya",
//       rating: 4.9,
//       bio: "Specialized in traditional Russian techniques"
//     },
//     { 
//       name: "Malaika", 
//       experience: "4 years", 
//       specialty: "Massage Therapy",
//       rating: 4.8,
//       bio: "Expert in stress relief and relaxation"
//     },
//     { 
//       name: "Anjali", 
//       experience: "3 years", 
//       specialty: "Aromatherapy",
//       rating: 4.7,
//       bio: "Certified aromatherapy specialist"
//     },
//   ],
// };

// /* ---------------- LOCATION-SPECIFIC DATA ---------------- */

// const locationData = {
//   dwarka: {
//     name: "Dwarka",
//     title: "Dwarka Luxury Spa Centre",
//     phone: "+91-9525293190",
//     address: "Sector 10, Dwarka, New Delhi",
//     openingHours: "Open 24/7",
//     therapists: [
//       { 
//         name: "Kavita", 
//         experience: "6 years", 
//         specialty: "Herbal Therapy",
//         rating: 4.9,
//         bio: "Herbal therapy expert with 6+ years"
//       },
//       { 
//         name: "Simran", 
//         experience: "4 years", 
//         specialty: "Full Body Massage",
//         rating: 4.8,
//         bio: "Specialized in full body relaxation"
//       },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//     ],
//     features: ["Premium Facilities", "Private Rooms", "Parking Available"],
//     description: "Our Dwarka location offers a serene escape in the heart of the city. With state-of-the-art facilities and expert therapists, we provide the ultimate relaxation experience. The center features traditional Russian Banya, modern spa treatments, and luxurious amenities designed to rejuvenate your mind and body."
//   },

//   mahipalpur: {
//     name: "Mahipalpur",
//     title: "Mahipalpur Premium Spa",
//     phone: "+91-9525293190",
//     address: "Main Road, Mahipalpur, New Delhi",
//     openingHours: "Open 24/7",
//     images: [
//       "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//     ],
//     features: ["Airport Proximity", "Modern Interiors", "Express Service"],
//     description: "Conveniently located near the airport, our Mahipalpur center caters to travelers and locals alike. Featuring contemporary interiors, express services, and a wide range of treatments, we ensure a premium spa experience even for those with busy schedules. Perfect for pre-flight relaxation or post-travel rejuvenation."
//   },

//   aerocity: {
//     name: "Aerocity",
//     title: "Aerocity Executive Spa",
//     phone: "+91-9525293190",
//     address: "Aerocity, New Delhi",
//     openingHours: "Open 24/7",
//     therapists: [
//       { 
//         name: "Riya", 
//         experience: "4 years", 
//         specialty: "Express Massage",
//         rating: 4.8,
//         bio: "Quick relaxation specialist"
//       },
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//     ],
//     features: ["Business Class", "Corporate Packages", "VIP Lounge"],
//     description: "Situated in the premium business district of Aerocity, our executive spa offers world-class facilities for business professionals and discerning clients. Enjoy VIP lounges, corporate packages, and elite services designed for those who appreciate luxury and efficiency. An oasis of calm in the bustling business hub."
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
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPath] = useLocation();
//   const [activeImage, setActiveImage] = useState(0);

//   const PER_PAGE = 12;
//   const totalPages = Math.ceil(allLocations.length / PER_PAGE);

//   useEffect(() => {
//     setIsLoading(true);

//     const params = new URLSearchParams(window.location.search);
//     const locParam = params.get("loc")?.toLowerCase().replace(/\s+/g, "") || "dwarka";
//     const pageParam = params.get("page");
    
//     if (pageParam) {
//       setPage(parseInt(pageParam));
//     }

//     let locData = locationData[locParam] || locationData.dwarka;

//     const mergedData = {
//       ...commonContent,
//       ...locData,
//       therapists: [...commonContent.therapists, ...(locData.therapists || [])],
//     };

//     setLocationDataState(mergedData);
//     setLocName(locData.name || "Dwarka");
//     setActiveImage(0);

//     // Simulate loading delay for better UX
//     setTimeout(() => setIsLoading(false), 300);
//   }, [currentPath]);

//   const paginatedLocations = useMemo(() => {
//     const start = (page - 1) * PER_PAGE;
//     const end = start + PER_PAGE;
//     return allLocations.slice(start, end);
//   }, [page]);

//   // Function to handle page change WITHOUT reload
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//     // Update URL without reloading
//     const params = new URLSearchParams(window.location.search);
//     params.set('page', newPage);
//     window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
    
//     // Scroll to locations section for better UX
//     document.getElementById('locations-section')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <Layout>
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-rose-50/30">
//           <div className="text-center space-y-6">
//             <div className="relative">
//               <div className="w-20 h-20 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
//               </div>
//             </div>
//             <p className="text-lg font-medium text-stone-600 animate-pulse">Loading premium spa details...</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   if (!locationDataState) return null;

//   return (
//     <Layout>
//       {/* Breadcrumb Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4"
//       >
//         <div className="container mx-auto px-4">
//           <nav className="flex items-center gap-2 text-sm">
//             <Link href="/" className="flex items-center gap-2 text-stone-600 hover:text-rose-600 transition-colors group">
//               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//               <span>Home</span>
//             </Link>
//             <ChevronRight className="w-4 h-4 text-stone-300" />
//             <span className="font-medium text-rose-600">{locName}</span>
//           </nav>
//         </div>
//       </motion.div>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-rose-900/30">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
//         <div className="container mx-auto px-4 py-24 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <span className="inline-block px-6 py-2 bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 mb-6 font-medium text-sm tracking-wider">
//               PREMIUM SPA CENTRE
//             </span>
//             <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//               {locationDataState.title}
//             </h1>
//             <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//               {locationDataState.description}
//             </p>
            
//             {/* Contact Info Cards */}
//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={`tel:${locationDataState.phone}`}
//                 className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 hover:border-rose-400/30 transition-all group"
//               >
//                 <div className="p-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg group-hover:scale-110 transition-transform">
//                   <Phone className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm text-stone-300">Call Now</p>
//                   <p className="text-white font-semibold">{locationDataState.phone}</p>
//                 </div>
//               </motion.a>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
//               >
//                 <div className="p-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg">
//                   <MapPin className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm text-stone-300">Location</p>
//                   <p className="text-white font-semibold">{locationDataState.address}</p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
//               >
//                 <div className="p-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg">
//                   <Clock className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm text-stone-300">Open Hours</p>
//                   <p className="text-white font-semibold">{locationDataState.openingHours}</p>
//                 </div>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <Link href="/contact">
//                 <Button className="bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white px-10 py-7 rounded-full text-lg font-medium shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
//                   <Calendar className="w-6 h-6 mr-3" />
//                   Book Appointment Now
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Image Gallery with Left Side Description */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Left Column: Image Gallery */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               {/* Location Description */}
//               <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl">
//                     <Info className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="font-display text-2xl font-bold text-stone-900">About This Location</h2>
//                     <p className="text-stone-600">Discover what makes this spa centre special</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Building className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-stone-800 mb-2">Location Overview</h3>
//                       <p className="text-stone-600 leading-relaxed">
//                         {locationDataState.description || "Our premium spa centre offers an exceptional experience with state-of-the-art facilities and expert therapists dedicated to your relaxation and well-being."}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start gap-4">
//                     <Shield className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-stone-800 mb-2">Quality Assurance</h3>
//                       <p className="text-stone-600 leading-relaxed">
//                         Certified therapists, hygienic facilities, and premium products ensure the highest standards of service and safety.
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start gap-4">
//                     <Crown className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-stone-800 mb-2">Luxury Experience</h3>
//                       <p className="text-stone-600 leading-relaxed">
//                         From the moment you enter, experience premium comfort, privacy, and personalized attention in a serene environment.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Main Image with Thumbnails */}
//               <div className="space-y-4">
//                 <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={activeImage}
//                       initial={{ opacity: 0, scale: 1.1 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       src={locationDataState.images[activeImage]}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                       alt={`${locName} Spa - View ${activeImage + 1}`}
//                       loading="lazy"
//                     />
//                   </AnimatePresence>
//                   <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
//                     {activeImage + 1} / {locationDataState.images.length}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4">
//                   {locationDataState.images.map((img, idx) => (
//                     <motion.button
//                       key={idx}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setActiveImage(idx)}
//                       className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
//                         activeImage === idx
//                           ? "border-rose-500 shadow-lg shadow-rose-500/30"
//                           : "border-stone-200 hover:border-rose-300"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         className="w-full h-full object-cover"
//                         alt={`Thumbnail ${idx + 1}`}
//                         loading="lazy"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Column: Services Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-10"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-2xl">
//                   <Sparkles className="w-8 h-8 text-rose-600" />
//                 </div>
//                 <div>
//                   <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
//                     Premium Services
//                   </h2>
//                   <p className="text-stone-600">Experience our exclusive treatments</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {locationDataState.services.map((service, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.1 }}
//                     whileHover={{ y: -5 }}
//                     className="group p-6 bg-gradient-to-br from-white to-stone-50 border border-stone-100 rounded-2xl hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 cursor-pointer"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl group-hover:scale-110 transition-transform">
//                         <Star className="w-5 h-5 text-amber-500" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-stone-800 group-hover:text-rose-600 transition-colors">
//                           {service}
//                         </h3>
//                         <p className="text-sm text-stone-500 mt-1">Premium Treatment</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Features */}
//               {locationDataState.features && (
//                 <div className="pt-8 border-t border-stone-100">
//                   <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">Special Features</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {locationDataState.features.map((feature, idx) => (
//                       <motion.span
//                         key={idx}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.1 }}
//                         className="px-4 py-2 bg-gradient-to-r from-rose-50 to-amber-50 text-rose-700 rounded-full text-sm font-medium border border-rose-100"
//                       >
//                         {feature}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* WhatsApp CTA */}
//               <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-green-500 rounded-xl">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-stone-900">Activate Windows with WhatsApp</h3>
//                     <p className="text-sm text-stone-600">Go to Settings</p>
//                   </div>
//                 </div>
//                 <a 
//                   href="https://wa.me/919525293190" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-medium transition-colors"
//                 >
//                   Contact on WhatsApp
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Therapists Section */}
//       <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-rose-50/30">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full mb-6">
//               <Users className="w-6 h-6 text-rose-600" />
//               <span className="font-semibold text-rose-700">Expert Team</span>
//             </div>
//             <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">
//               Meet Our Expert Therapists
//             </h2>
//             <p className="text-lg text-stone-600">
//               Certified professionals dedicated to your relaxation and well-being
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {locationDataState.therapists.map((therapist, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="group bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500"
//               >
//                 <div className="p-8">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-20 group-hover:opacity-30"></div>
//                       <div className="relative w-20 h-20 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full flex items-center justify-center">
//                         <Heart className="w-10 h-10 text-rose-600" />
//                       </div>
//                     </div>
//                     <div className="px-4 py-2 bg-gradient-to-r from-rose-50 to-amber-50 rounded-full">
//                       <span className="font-semibold text-amber-700">{therapist.experience}</span>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
//                       {therapist.name}
//                     </h3>
//                     <p className="text-amber-600 font-medium mb-3">{therapist.specialty}</p>
//                     <p className="text-stone-600 text-sm">{therapist.bio}</p>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-5 h-5 ${
//                               i < Math.floor(therapist.rating)
//                                 ? "text-amber-500 fill-amber-500"
//                                 : "text-stone-300"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm font-medium text-stone-700">
//                         {therapist.rating}/5
//                       </span>
//                     </div>
//                     <Award className="w-6 h-6 text-amber-500" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other Locations with Pagination (NO RELOAD) */}
//       <section id="locations-section" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-rose-900/30">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
//               Explore Our Other Locations
//             </h2>
//             <p className="text-lg text-stone-300">
//               Discover premium spa experiences across Delhi NCR
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
//             {paginatedLocations.map((location, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.02 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Link href={`/loc?loc=${location.toLowerCase().replace(/\s+/g, "")}`}>
//                   <div className="group p-6 bg-gradient-to-br from-stone-800/50 to-stone-700/30 border border-stone-700/30 hover:border-rose-500/50 rounded-2xl text-center hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer">
//                     <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-rose-500/20 to-amber-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <MapPin className="w-5 h-5 text-amber-300" />
//                     </div>
//                     <h3 className="font-semibold text-white group-hover:text-amber-300 transition-colors">
//                       {location}
//                     </h3>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Pagination WITHOUT RELOAD */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row justify-center items-center gap-6"
//           >
//             <div className="flex items-center gap-4">
//               {/* Previous Button */}
//               <button
//                 disabled={page === 1}
//                 onClick={() => handlePageChange(page - 1)}
//                 className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span className="hidden sm:inline">Previous</span>
//               </button>
              
//               {/* Page Numbers */}
//               <div className="flex items-center gap-2">
//                 {[...Array(totalPages)].map((_, i) => {
//                   const pageNumber = i + 1;
                  
//                   // Show first 3 pages always
//                   if (pageNumber <= 3) {
//                     return (
//                       <button
//                         key={pageNumber}
//                         onClick={() => handlePageChange(pageNumber)}
//                         className={`w-10 h-10 rounded-full transition-all ${
//                           page === pageNumber
//                             ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
//                             : "bg-stone-800 text-stone-400 hover:bg-stone-700"
//                         }`}
//                       >
//                         {pageNumber}
//                       </button>
//                     );
//                   }
                  
//                   // Show current page if it's not in first 3
//                   if (pageNumber === page && pageNumber > 3) {
//                     return (
//                       <button
//                         key={pageNumber}
//                         onClick={() => handlePageChange(pageNumber)}
//                         className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
//                       >
//                         {pageNumber}
//                       </button>
//                     );
//                   }
                  
//                   return null;
//                 })}
                
//                 {/* Show "..." if there are more pages */}
//                 {totalPages > 3 && page < totalPages - 1 && (
//                   <span className="text-stone-400 px-2">...</span>
//                 )}
                
//                 {/* Show last page */}
//                 {totalPages > 3 && (
//                   <button
//                     onClick={() => handlePageChange(totalPages)}
//                     className={`w-10 h-10 rounded-full transition-all ${
//                       page === totalPages
//                         ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
//                         : "bg-stone-800 text-stone-400 hover:bg-stone-700"
//                     }`}
//                   >
//                     {totalPages}
//                   </button>
//                 )}
//               </div>
              
//               {/* Next Button */}
//               <button
//                 disabled={page === totalPages}
//                 onClick={() => handlePageChange(page + 1)}
//                 className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//               >
//                 <span className="hidden sm:inline">Next</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
            
//             {/* Showing Text */}
//             <div className="text-center">
//               <p className="text-stone-400 text-sm">
//                 Showing <span className="font-semibold text-amber-300">{Math.min(page * PER_PAGE, allLocations.length)}</span> of{" "}
//                 <span className="font-semibold text-amber-300">{allLocations.length}</span> locations
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </Layout>
//   );
// }






// src/pages/LocationPage.jsx
import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Star, ChevronRight, Clock, Sparkles, Award, Users, Heart, ArrowRight, ArrowLeft, Info, Building, Shield, Crown } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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
    { 
      name: "Soniya", 
      experience: "5 years", 
      specialty: "Russian Banya",
      rating: 4.9,
      bio: "Specialized in traditional Russian techniques"
    },
    { 
      name: "Malaika", 
      experience: "4 years", 
      specialty: "Massage Therapy",
      rating: 4.8,
      bio: "Expert in stress relief and relaxation"
    },
    { 
      name: "Anjali", 
      experience: "3 years", 
      specialty: "Aromatherapy",
      rating: 4.7,
      bio: "Certified aromatherapy specialist"
    },
  ],
};

/* ---------------- LOCATION-SPECIFIC DATA ---------------- */

const locationData = {
  dwarka: {
    name: "Dwarka",
    title: "Dwarka Luxury Spa Centre",
    phone: "+91-9525293190",
    address: "Sector 10, Dwarka, New Delhi",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Kavita", 
        experience: "6 years", 
        specialty: "Herbal Therapy",
        rating: 4.9,
        bio: "Herbal therapy expert with 6+ years"
      },
      { 
        name: "Simran", 
        experience: "4 years", 
        specialty: "Full Body Massage",
        rating: 4.8,
        bio: "Specialized in full body relaxation"
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    features: ["Premium Facilities", "Private Rooms", "Parking Available"],
    description: "Our Dwarka location offers a serene escape in the heart of the city. With state-of-the-art facilities and expert therapists, we provide the ultimate relaxation experience. The center features traditional Russian Banya, modern spa treatments, and luxurious amenities designed to rejuvenate your mind and body."
  },

  mahipalpur: {
    name: "Mahipalpur",
    title: "Mahipalpur Premium Spa",
    phone: "+91-9525293190",
    address: "Main Road, Mahipalpur, New Delhi",
    openingHours: "Open 24/7",
    images: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    features: ["Airport Proximity", "Modern Interiors", "Express Service"],
    description: "Conveniently located near the airport, our Mahipalpur center caters to travelers and locals alike. Featuring contemporary interiors, express services, and a wide range of treatments, we ensure a premium spa experience even for those with busy schedules. Perfect for pre-flight relaxation or post-travel rejuvenation."
  },

  aerocity: {
    name: "Aerocity",
    title: "Aerocity Executive Spa",
    phone: "+91-9525293190",
    address: "Aerocity, New Delhi",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Riya", 
        experience: "4 years", 
        specialty: "Express Massage",
        rating: 4.8,
        bio: "Quick relaxation specialist"
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    features: ["Business Class", "Corporate Packages", "VIP Lounge"],
    description: "Situated in the premium business district of Aerocity, our executive spa offers world-class facilities for business professionals and discerning clients. Enjoy VIP lounges, corporate packages, and elite services designed for those who appreciate luxury and efficiency. An oasis of calm in the bustling business hub."
  },
  
  // Additional locations for demonstration
  rohini: {
    name: "Rohini",
    title: "Rohini Luxury Spa",
    phone: "+91-9525293190",
    address: "Sector 8, Rohini, New Delhi",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Priya", 
        experience: "5 years", 
        specialty: "Traditional Therapy",
        rating: 4.9,
        bio: "Traditional therapy expert"
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    features: ["Family Friendly", "Group Packages", "Wellness Programs"],
    description: "Our Rohini location offers family-friendly spa services with a focus on holistic wellness. Perfect for couples, families, and groups looking for comprehensive wellness programs in a comfortable environment."
  },

  connaughtplace: {
    name: "Connaught Place",
    title: "Connaught Place Elite Spa",
    phone: "+91-9525293190",
    address: "Connaught Place, New Delhi",
    openingHours: "Open 24/7",
    therapists: [
      { 
        name: "Neha", 
        experience: "6 years", 
        specialty: "Luxury Treatments",
        rating: 5.0,
        bio: "Luxury treatment specialist"
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    ],
    features: ["Central Location", "Executive Suites", "Concierge Service"],
    description: "Located in the heart of Delhi at Connaught Place, our elite spa offers premium services for executives and luxury seekers. With executive suites, personalized concierge service, and top-tier facilities, we provide an unmatched spa experience in central Delhi."
  }
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
  "Dwarka Sector 6", "Dwarka Sector 7", "Dwarka Sector 12",
  "Dwarka Sector 14", "Dwarka Sector 18", "Dwarka Sector 21",
  "Dwarka Sector 22", "Dwarka Sector 23", "Dwarka Sector 24"
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
    // This will cause a page reload which is what we want for location changes
    setLocation(`/loc?loc=${location}`);
  };

  // Handle pagination change (without page reload)
  const handlePageChange = (newPage) => {
    setPage(newPage);
    
    // Update URL without reloading the page
    const params = new URLSearchParams(window.location.search);
    const currentLoc = params.get('loc') || 'dwarka';
    const newUrl = `/loc?loc=${currentLoc}&page=${newPage}`;
    
    // Update browser URL without navigation
    window.history.pushState({}, '', newUrl);
    
    // Scroll to locations section for better UX
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
    
    // Set page from URL if available
    if (pageParam) {
      const pageNum = parseInt(pageParam);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        setPage(pageNum);
      }
    }

    // Get location data
    let locData = locationData[locParam];
    if (!locData) {
      // Try to find a matching location (case-insensitive partial match)
      const matchedKey = Object.keys(locationData).find(key => 
        key.toLowerCase().includes(locParam.toLowerCase()) || 
        locParam.toLowerCase().includes(key.toLowerCase())
      );
      locData = locationData[matchedKey] || locationData.dwarka;
    }

    // Merge data
    const mergedData = {
      ...commonContent,
      ...locData,
      therapists: [...commonContent.therapists, ...(locData.therapists || [])],
    };

    setLocationDataState(mergedData);
    setLocName(locData.name || "Dwarka");
    setActiveImage(0);

    // Simulate loading delay for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, [currentPath]); // Re-run when URL changes

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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-rose-50/30">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
              </div>
            </div>
            <p className="text-lg font-medium text-stone-600 animate-pulse">Loading premium spa details...</p>
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
        className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4"
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 text-stone-600 hover:text-rose-600 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-stone-300" />
            <span className="font-medium text-rose-600">{locName}</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-rose-900/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 mb-6 font-medium text-sm tracking-wider">
              PREMIUM SPA CENTRE
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {locationDataState.title}
            </h1>
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {locationDataState.description}
            </p>
            
            {/* Contact Info Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`tel:${locationDataState.phone}`}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 hover:border-rose-400/30 transition-all group"
              >
                <div className="p-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-stone-300">Call Now</p>
                  <p className="text-white font-semibold">{locationDataState.phone}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
              >
                <div className="p-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-stone-300">Location</p>
                  <p className="text-white font-semibold">{locationDataState.address}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
              >
                <div className="p-2 bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-stone-300">Open Hours</p>
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
                <Button className="bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white px-10 py-7 rounded-full text-lg font-medium shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
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
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-stone-900">About This Location</h2>
                    <p className="text-stone-600">Discover what makes this spa centre special</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Location Overview</h3>
                      <p className="text-stone-600 leading-relaxed">
                        {locationDataState.description || "Our premium spa centre offers an exceptional experience with state-of-the-art facilities and expert therapists dedicated to your relaxation and well-being."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Shield className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Quality Assurance</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Certified therapists, hygienic facilities, and premium products ensure the highest standards of service and safety.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Crown className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Luxury Experience</h3>
                      <p className="text-stone-600 leading-relaxed">
                        From the moment you enter, experience premium comfort, privacy, and personalized attention in a serene environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image with Thumbnails */}
              <div className="space-y-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      src={locationDataState.images[activeImage]}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt={`${locName} Spa - View ${activeImage + 1}`}
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                    {activeImage + 1} / {locationDataState.images.length}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {locationDataState.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveImage(idx)}
                      className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                        activeImage === idx
                          ? "border-rose-500 shadow-lg shadow-rose-500/30"
                          : "border-stone-200 hover:border-rose-300"
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
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-rose-600" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                    Premium Services
                  </h2>
                  <p className="text-stone-600">Experience our exclusive treatments</p>
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
                    className="group p-6 bg-gradient-to-br from-white to-stone-50 border border-stone-100 rounded-2xl hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800 group-hover:text-rose-600 transition-colors">
                          {service}
                        </h3>
                        <p className="text-sm text-stone-500 mt-1">Premium Treatment</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              {locationDataState.features && (
                <div className="pt-8 border-t border-stone-100">
                  <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">Special Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {locationDataState.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-rose-50 to-amber-50 text-rose-700 rounded-full text-sm font-medium border border-rose-100"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Contact via WhatsApp</h3>
                    <p className="text-sm text-stone-600">Instant booking & inquiries</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919525293190" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-medium transition-colors"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-rose-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full mb-6">
              <Users className="w-6 h-6 text-rose-600" />
              <span className="font-semibold text-rose-700">Expert Team</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Meet Our Expert Therapists
            </h2>
            <p className="text-lg text-stone-600">
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
                className="group bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-20 group-hover:opacity-30"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full flex items-center justify-center">
                        <Heart className="w-10 h-10 text-rose-600" />
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-rose-50 to-amber-50 rounded-full">
                      <span className="font-semibold text-amber-700">{therapist.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                      {therapist.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-3">{therapist.specialty}</p>
                    <p className="text-stone-600 text-sm">{therapist.bio}</p>
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
                                : "text-stone-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-stone-700">
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

      {/* Other Locations with Pagination (NO RELOAD for pagination, RELOAD for location change) */}
      <section id="locations-section" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-rose-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Other Locations
            </h2>
            <p className="text-lg text-stone-300">
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
                  {/* Location link causes page reload */}
                  <a 
                    href={`/loc?loc=${formattedLocation}&page=1`} // Always reset to page 1 when changing location
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   handleLocationChange(formattedLocation);
                    // }}
                    className="block"
                  >
                    <div className="group p-6 bg-gradient-to-br from-stone-800/50 to-stone-700/30 border border-stone-700/30 hover:border-rose-500/50 rounded-2xl text-center hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-rose-500/20 to-amber-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-amber-300" />
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {location}
                      </h3>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination WITHOUT RELOAD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>
              
              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  
                  // Show first page always
                  if (pageNumber === 1) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          page === pageNumber
                            ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
                            : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  
                  // Show current page and adjacent pages
                  if (
                    pageNumber === page ||
                    pageNumber === page - 1 ||
                    pageNumber === page + 1
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          page === pageNumber
                            ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
                            : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  
                  // Show last page if not already shown
                  if (pageNumber === totalPages && page < totalPages - 1) {
                    return (
                      <div key="ellipsis" className="flex items-center">
                        <span className="text-stone-400 px-2">...</span>
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="w-10 h-10 rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 transition-all"
                        >
                          {totalPages}
                        </button>
                      </div>
                    );
                  }
                  
                  return null;
                })}
              </div>
              
              {/* Next Button */}
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                className="flex items-center gap-2 px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Showing Text */}
            <div className="text-center">
              <p className="text-stone-400 text-sm">
                Showing locations{" "}
                <span className="font-semibold text-amber-300">
                  {(page - 1) * PER_PAGE + 1}-{Math.min(page * PER_PAGE, allLocations.length)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-amber-300">{allLocations.length}</span>
              </p>
              <p className="text-stone-500 text-xs mt-1">
                Page {page} of {totalPages}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-stone-600 mb-10">
              Book your appointment today and transform your relaxation experience at our {locName} location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </Link>
              <a href={`tel:${locationDataState.phone}`}>
                <Button variant="outline" className="border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-6 rounded-full text-lg font-medium">
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