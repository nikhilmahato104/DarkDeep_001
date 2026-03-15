import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Russian Banya",
    description: "An authentic steam bath experience that improves circulation and detoxifies the body. Includes venik treatments.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹3,000"
  },
  {
    title: "Deep Tissue Massage",
    description: "A focused technique that targets the deeper layers of muscle and connective tissue. Ideal for chronic pain.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹2,500"
  },
  {
    title: "Swedish Massage",
    description: "A classic full-body massage using gentle strokes to promote relaxation and ease muscle tension.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹2,200"
  },
  {
    title: "Aromatherapy",
    description: "Therapeutic massage with essential oils to enhance physical and emotional well-being.",
    image: "https://images.unsplash.com/photo-1602812720993-903df12d37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹2,800"
  },
  {
    title: "Hot Stone Therapy",
    description: "Smooth, heated stones are placed on specific parts of the body to maximize therapeutic benefit.",
    image: "https://images.unsplash.com/photo-1591343395082-9e1bfd637956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹3,500"
  },
  {
    title: "Body Scrubs & Wraps",
    description: "Exfoliating treatments to remove dead skin cells and hydrate the skin for a healthy glow.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From ₹2,000"
  }
];

export default function Services() {
  return (
    <Layout>
          <Helmet>
        <title>Spa Services in Mahipalpur | Body Massage, Swedish Massage & Russian Banya</title>
        <meta
          name="description"
          content="Explore professional spa services in Mahipalpur near IGI Airport including Swedish massage, deep tissue massage, aromatherapy and Russian banya therapy."
        />
        <link rel="canonical" href="https://mahipalpurspaservicecentre.com/services" />
      </Helmet>
      <PageHeader 
        title="Our Services" 
        subtitle="Holistic treatments for body and soul"
        image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl font-bold text-stone-900">{service.title}</h3>
                    <span className="text-primary font-medium">{service.price}</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Link href="/contact">
                    <Button className="w-full bg-stone-100 text-stone-900 hover:bg-primary hover:text-white transition-colors border border-stone-200">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
