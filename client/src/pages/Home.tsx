// import { motion } from "framer-motion";
// import { Link } from "wouter";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Star, Clock, Heart } from "lucide-react";

// export default function Home() {
//   const features = [
//     {
//       icon: <Star className="w-6 h-6 text-primary" />,
//       title: "Expert Therapists",
//       description: "Our certified therapists bring years of experience in various massage techniques."
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-primary" />,
//       title: "24/7 Availability",
//       description: "Relaxation fits your schedule. We are open 24 hours a day, 7 days a week."
//     },
//     {
//       icon: <Heart className="w-6 h-6 text-primary" />,
//       title: "Authentic Experience",
//       description: "Traditional Russian Banya and international treatments in a luxury setting."
//     }
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative h-screen min-h-[600px] flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           {/* Luxury spa interior dark atmosphere */}
//           <img 
//             src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
//             alt="Escort Service Centre Luxury Interior" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 text-center text-white">
//           <motion.span 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="inline-block text-primary uppercase tracking-[0.2em] mb-4 font-medium text-sm md:text-base"
//           >
//             Welcome to Paradise
//           </motion.span>
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
//           >
//             Escort Service Centre
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-2xl text-stone-200 mb-10 max-w-3xl mx-auto font-light"
//           >
//             Authentic Russian Banya Experience in the Heart of New Delhi
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Link href="/contact">
//               <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-none">
//                 Book Appointment
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Preview */}
//       <section className="py-20 md:py-32 bg-stone-50">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
//                 {/* Woman relaxing in spa */}
//                 <img 
//                   src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                   alt="Relaxing Massage" 
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-stone-200 -z-0" />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">Discover True Relaxation</h2>
//               <div className="w-20 h-1 bg-primary mb-8" />
//               <p className="text-stone-600 mb-6 leading-relaxed text-lg">
//                 At Escort Service Centre, we combine ancient traditions with modern wellness techniques. 
//                 Our sanctuary in Mahipalpur offers an escape from the chaos of the city, providing 
//                 a serene environment where you can rejuvenate your body and mind.
//               </p>
//               <p className="text-stone-600 mb-8 leading-relaxed text-lg">
//                 Whether you seek the intense heat of a traditional Banya or the soothing touch of 
//                 a Swedish massage, our expert therapists are dedicated to your well-being.
//               </p>
//               <Link href="/about">
//                 <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white rounded-none px-8">
//                   Learn More About Us
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="p-8 border border-stone-100 bg-stone-50/50 hover:shadow-lg transition-all duration-300 text-center group"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="font-display text-2xl mb-4 text-stone-800">{feature.title}</h3>
//                 <p className="text-stone-600 leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="py-20 md:py-32 bg-stone-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//             <div>
//               <span className="text-primary uppercase tracking-widest text-sm font-medium mb-2 block">Our Treatments</span>
//               <h2 className="font-display text-4xl md:text-5xl">Popular Services</h2>
//             </div>
//             <Link href="/services">
//               <span className="flex items-center gap-2 text-primary hover:text-white transition-colors cursor-pointer group">
//                 View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Link>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Russian Banya", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Traditional steam bath experience for deep detoxification." },
//               { title: "Deep Tissue Massage", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Targeted pressure to relieve chronic muscle tension." },
//               { title: "Aromatherapy", img: "https://images.unsplash.com/photo-1602812720993-903df12d37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Gentle massage using essential oils to boost mood." },
//             ].map((service, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative aspect-[3/2] overflow-hidden mb-6">
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
//                   <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                 </div>
//                 <h3 className="font-display text-2xl mb-2 text-primary group-hover:text-white transition-colors">{service.title}</h3>
//                 <p className="text-stone-400">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-primary/10">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">Ready to Relax?</h2>
//           <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
//             Book your appointment today and experience the ultimate luxury spa treatment in New Delhi.
//           </p>
//           <Link href="/contact">
//             <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-none shadow-xl shadow-primary/20">
//               Book Your Visit Now
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </Layout>
//   );
// }








import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Heart } from "lucide-react";
import DeviceTracker from "@/components/DeviceTracker";

export default function Home() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Expert Service Providers",
      description: "Our certified professionals bring years of experience in various service categories."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Availability",
      description: "Quality service fits your schedule. We are available 24 hours a day, 7 days a week."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Premium Experience",
      description: "Exceptional service delivery with attention to detail and customer satisfaction."
    }
  ];

  return (
    <Layout>
          <DeviceTracker />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Professional service setting */}
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Escort Services Professional Setting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-primary uppercase tracking-[0.2em] mb-4 font-medium text-sm md:text-base"
          >
            Professional Services in Mahipalpur
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
           Escort Services Mahipalpur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          >
            Your Trusted Partner for Premium Services in Mahipalpur, New Delhi
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-none">
                Book Service
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                {/* Professional service image */}
                <img 
                  src="https://www.tashityagi.co.in/images/call-girls5.webp" 
                  alt="Professional Service Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-gray-200 -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6">Discover Quality Service</h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Being a man, it is normal to feel drained and exhausted. Life is full of depressing events, 
                and in such a scenario, it is always a good idea to have fun for a while. Having Call Girls In Delhi is just like having a 
                regular girlfriend for sexual intercourse, but you just have to pay. If you are in Delhi, consider yourself lucky, 
                as you have the opportunity to meet Delhi call girls. If you are wondering where to find a cheap escort in Delhi,
                 follow these strategies. Let's tell you how to find cheap escorts in a beautiful city called Delhi.
             
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Whether you need routine maintenance, specialized assistance, or comprehensive solutions, 
                our certified professionals are committed to delivering excellence in every project.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none px-8">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-gray-100 bg-gray-50/50 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary uppercase tracking-widest text-sm font-medium mb-2 block">Our Offerings</span>
              <h2 className="font-display text-4xl md:text-5xl">Popular Services</h2>
            </div>
            <Link href="/services">
              <span className="flex items-center gap-2 text-primary hover:text-white transition-colors cursor-pointer group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Aaisha Sexy Call", img: "https://www.tashityagi.co.in/images/call-girls12.webp", desc: "Call Girl WhatsApp link Hand to hand cash payment college going girls full safe, secure, and genuine sex. Are you searching for call girls in Delhi? Only Cash Payment After Meeting Delhi Call Girls In Delhi With Free Home Delivery. Only cash Rate, Real Service, unlimited shots with Room, Call Girl In Delhi ✔️✔️vip booking ✔️✔️Available Near All 3* 4* 5* Hotels." },
              { title: "Sana Call Girls", img: "https://www.tashityagi.co.in/images/call-girls13.webp", desc: "Are you looking for Delhi Independent escorts and call girls services and sex meetings? Tyree Khill is the #1 adult directory with more than 100+ classified ads for Sexy Call Girl In Delhi. Sexy call girls that give erotic massages for the best sex and escort services available in Delhi. In the category Massage Parlours Delhi, you can find 365 personal ads." },
              { title: "Tara Call Girl", img: "https://www.tashityagi.co.in/images/call-girls15.webp", desc: "Here you will find classified ads for the search “independent girls” in (Delhi) – See all offers on Tyree Khill™ Women Seeking Men. Independent call girls in Delhi have several advantages over agency-based call girl providers. Low-price 100% genuine sexy VIP call girls are provided with safe and secure service." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/2] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-2xl mb-2 text-primary group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6">Ready for Professional Service?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today and experience premium service delivery in Mahipalpur, New Delhi.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-none shadow-xl shadow-primary/20">
              Schedule Your Service
            </Button>
          </Link>
        </div>
      </section> */}

      <section className="py-24">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column: Text Content */}
      <div className="text-center md:text-left">
        <h3 className="font-display text-4xl md:text-5xl text-gray-900 mb-6">Get in Touch with us for Girls</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
         It is imperative to consider a few things before getting Delhi Escorts. Sometimes, without the help of agencies,
          chances are that you will not be satisfied because the services are not provided as per your choice. Getting in 
          touch with an agency means getting the surety and guarantee that you are going to get the cheap call girls in Delhi
           right away. You will have to fill out of form, or maybe the escort agency will ask you some questions. 
           At the end of the screening, you will be able to get the cheapest escort of your choice. Also, 
           if you want a Call Girl In Delhi to be dressed in a certain way, then the agencies can be of help for that as well.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-none shadow-xl shadow-primary/20">
            Schedule Your Service
          </Button>
        </Link>
      </div>

      {/* Right Column: Grid of Professional Images */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://www.tashityagi.co.in/images/call-girls10.webp"
          alt="Team Consultation"
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.tashityagi.co.in/images/call-girls11.webp"
          alt="Quality Maintenance"
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.tashityagi.co.in/images/call-girls12.webp"
          alt="Technical Support"
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.tashityagi.co.in/images/call-girls13.webp"
          alt="Customer Service"
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}