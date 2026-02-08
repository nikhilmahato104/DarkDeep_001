import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        subtitle="A sanctuary of peace in the heart of the city"
        image="https://images.unsplash.com/photo-1545249390-6bdfa2a21b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-stone prose-lg mx-auto"
            >
              <h2 className="font-display text-4xl text-stone-900 text-center mb-12">Our Story</h2>
              
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Welcome to Escort Service Centre, the premier destination for authentic wellness experiences in New Delhi. 
                Founded with a vision to bring the time-honored traditions of the Russian Banya to India, we have 
                created a unique space where culture, luxury, and relaxation converge.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <img 
                  src="https://pixabay.com/get/gc98c00600f83eea2a3b944a5c4e36c5f6111af06dcb308ce0d8e0233e998f778348ef9c10127363ed4b223de3f1e5ad787c8e31ef3b1bc8acab2821938f7d15e_1280.jpg" 
                  alt="Spa Detail" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Relaxing Atmosphere" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
              </div>

              <h3 className="font-display text-3xl text-stone-900 mt-12 mb-6">Our Philosophy</h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                We believe that true wellness goes beyond simple relaxation. It is about restoring balance to the body 
                and mind. Our treatments are designed to detoxify, rejuvenate, and heal.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Every detail of our spa, from the temperature of our saunas to the essential oils we use, is carefully 
                curated to ensure an unforgettable experience. Our team of expert therapists is dedicated to providing 
                personalized care tailored to your specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
