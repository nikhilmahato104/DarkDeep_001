import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Clock,
  Heart,
  Sparkles,
  Users,
  Award,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  Gem,
  Flower2,
  Waves,
  Wind,
  Droplets,
  Leaf,
} from "lucide-react";
import DeviceTracker from "@/components/DeviceTracker";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Certified Therapists",
      description:
        "Internationally trained wellness professionals with 10+ years of experience in therapeutic massage and spa treatments.",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "24/7 Premium Service",
      description:
        "Round-the-clock availability for your convenience. Early morning and late evening appointments available.",
    },
    {
      icon: <Gem className="w-6 h-6 text-amber-600" />,
      title: "Luxury Experience",
      description:
        "5-star amenities, private suites, and personalized wellness journeys in a serene environment.",
    },
  ];

  const services = [
    {
      title: "Russian Banya Experience",
      img: "/mahipalpur9.jpeg",
      price: "₹3,499",
      duration: "90 min",
      desc: "Authentic Russian banya with expert therapists. Traditional heat therapy, venik massage, and cold plunge for complete rejuvenation.",
    },
    {
      title: "Deep Tissue Massage",
      img: "/mahipalpur10.jpeg",
      price: "₹2,999",
      duration: "60 min",
      desc: "Therapeutic deep tissue massage targeting muscle tension, chronic pain, and stress relief. Performed by certified specialists.",
    },
    {
      title: "Aromatherapy Massage",
      img: "/mahipalpur11.jpeg",
      price: "₹3,299",
      duration: "75 min",
      desc: "Essential oil therapy combined with Swedish massage techniques to restore balance and promote overall wellbeing.",
    },
    {
      title: "Ayurvedic Treatment",
      img: "/mahipalpur12.jpeg",
      price: "₹3,999",
      duration: "90 min",
      desc: "Traditional Ayurvedic therapies including Shirodhara, Abhyanga, and herbal treatments for holistic healing.",
    },
    {
      title: "Couples Massage",
      img: "/mahipalpur13.jpeg",
      price: "₹6,499",
      duration: "90 min",
      desc: "Luxury couples massage in our private suite. Perfect for romantic getaways and shared wellness experiences.",
    },
    {
      title: "Facial & Skincare",
      img: "/mahipalpur14.jpeg",
      price: "₹2,499",
      duration: "45 min",
      desc: "Premium organic facials, anti-aging treatments, and deep-cleansing therapies for radiant, healthy skin.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mahipalpur",
      text: "Mahipalpur SPA is truly exceptional. The Russian banya experience was authentic and rejuvenating. Very professional staff and clean facilities.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      location: "Aerocity",
      text: "Best spa in Mahipalpur! The therapists are highly skilled and the ambiance is peaceful. Highly recommend the deep tissue massage.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      location: "Dwarka",
      text: "Regular visitor here. Consistently excellent service, hygienic environment, and reasonable prices. My go-to wellness centre.",
      rating: 5,
    },
  ];

  const amenities = [
    { icon: <Waves />, text: "Steam Room" },
    { icon: <Droplets />, text: "Jacuzzi" },
    { icon: <Wind />, text: "Sauna" },
    { icon: <Leaf />, text: "Organic Products" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>
          Spa in Mahipalpur | Mahipalpur Spa Service Centre - Body Massage Near
          IGI Airport Delhi
        </title>
        <meta
          name="description"
          content="Best spa in Mahipalpur near IGI Airport Delhi. Professional body massage, Swedish massage, couple spa and Russian Banya therapy. Open 24/7."
        />
        <link rel="canonical" href="https://mahipalpurspaservicecentre.com/" />
      </Helmet>
      <DeviceTracker />

      {/* Hero Section - Premium & Professional */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mahipalpur4.jpeg"
            alt="Mahipalpur SPA & Wellness Centre - Premium Spa in Mahipalpur Delhi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-0.5 bg-amber-400" />
              <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">
                Since 2015
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Mahipalpur SPA &<br />
              Wellness Centre
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl leading-relaxed"
            >
              Experience authentic Russian banya, therapeutic massages, and
              luxury wellness treatments in the heart of Mahipalpur
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-7 rounded-none shadow-lg shadow-amber-600/20"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-neutral-900 text-lg px-10 py-7 rounded-none"
                >
                  View Services
                </Button>
              </Link>
            </motion.div>

            {/* Amenities Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className="text-amber-400">{item.icon}</span>
                  <span className="text-white text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
                10+
              </div>
              <div className="text-xs md:text-sm text-neutral-400">
                Years Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
                50+
              </div>
              <div className="text-xs md:text-sm text-neutral-400">
                Expert Therapists
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
                15k+
              </div>
              <div className="text-xs md:text-sm text-neutral-400">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-amber-400">
                24/7
              </div>
              <div className="text-xs md:text-sm text-neutral-400">
                Open All Days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview - Redesigned */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/mahipalpur15.jpeg"
                    alt="Luxury spa treatment room at Mahipalpur SPA Mahipalpur"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/mahipalpur16.jpeg"
                    alt="Professional massage therapy session"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/mahipalpur18.jpeg"
                    alt="Russian banya experience at Mahipalpur SPA"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/mahipalpur9.jpeg"
                    alt="Relaxation area at premium spa in Mahipalpur"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-serif font-bold">15+</p>
                <p className="text-sm">
                  Years of
                  <br />
                  Excellence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-amber-600 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Welcome to Serenity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                Premier Wellness Destination in Mahipalpur
              </h2>
              <div className="w-20 h-1 bg-amber-600 mb-8" />
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                At Mahipalpur SPA & Wellness Centre, we redefine luxury wellness
                with authentic Russian banya, therapeutic massages, and holistic
                treatments. Our 15,000 sq. ft. facility features private
                treatment rooms, steam rooms, jacuzzi, and relaxation lounges.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                With a team of 50+ internationally certified therapists and 10+
                years of excellence, we've served over 15,000 clients seeking
                premium wellness experiences in Delhi NCR.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-neutral-700">
                    ISO Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-neutral-700">
                    Hygiene Rated
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-neutral-700">
                    Female Therapists
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-neutral-700">
                    Private Rooms
                  </span>
                </div>
              </div>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-none px-8 py-6"
                >
                  Discover Our Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              The Serenity Difference
            </h2>
            <p className="text-neutral-600 text-lg">
              Experience wellness at its finest with our premium amenities and
              expert care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-amber-200 rounded-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Redesigned */}
      <section className="py-20 md:py-32 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-400 uppercase tracking-[0.2em] text-sm font-medium mb-2 block">
                Our Treatments
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Signature Services
              </h2>
            </div>
            <Link href="/services">
              <span className="flex items-center gap-2 text-amber-400 hover:text-white transition-colors cursor-pointer group text-lg">
                View All Treatments{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-neutral-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2 text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-neutral-50 rounded-lg relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-serif text-lg text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mahipalpur14.jpeg"
            alt="Luxury spa treatment room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Begin Your Wellness Journey
            </h2>
            <p className="text-xl text-neutral-300 mb-10">
              Experience the finest spa treatments in Mahipalpur. Book your
              session today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6 rounded-none"
                >
                  Schedule Appointment
                </Button>
              </Link>
              <a href="tel:+919525293190">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-neutral-900 text-lg px-10 py-6 rounded-none"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 95252 93190
                </Button>
              </a>
            </div>

            <p className="text-neutral-400">
              <Calendar className="w-4 h-4 inline mr-1" />
              Open 24/7 • Walk-ins Welcome • Private Parking Available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Map Preview */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-serif text-3xl text-neutral-900 mb-2">
                Visit Our Spa
              </h3>
              <p className="text-neutral-600 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                Office No. 118, Defence Enclave, Mahipalpur, New Delhi - 110037
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-none px-8 py-6">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
