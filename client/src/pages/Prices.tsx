import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Prices() {
  const priceCategories = [
    {
      category: "Massage Therapies",
      items: [
        { name: "Swedish Massage (60 min)", price: "₹2,200" },
        { name: "Deep Tissue Massage (60 min)", price: "₹2,500" },
        { name: "Aromatherapy (60 min)", price: "₹2,800" },
        { name: "Balinese Massage (60 min)", price: "₹2,600" },
        { name: "Couples Massage (60 min)", price: "₹5,000" },
      ],
    },
    {
      category: "Russian Specialties",
      items: [
        { name: "Traditional Banya Session", price: "₹3,000" },
        { name: "Venik Treatment", price: "₹1,500" },
        { name: "Honey & Salt Scrub", price: "₹2,000" },
        { name: "Full Banya Experience Package", price: "₹6,000" },
      ],
    },
    {
      category: "Body Treatments",
      items: [
        { name: "Coffee Body Scrub", price: "₹2,000" },
        { name: "Detox Body Wrap", price: "₹2,500" },
        { name: "Hydrating Facial", price: "₹1,800" },
      ],
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>
          Spa Price List in Mahipalpur | Massage & Russian Banya Packages
        </title>
        <meta
          name="description"
          content="Check spa price list in Mahipalpur near IGI Airport. Affordable Swedish massage, deep tissue massage, aromatherapy and Russian banya therapy packages."
        />
        <link
          rel="canonical"
          href="https://mahipalpurspaservicecentre.com/prices"
        />
      </Helmet>
      <PageHeader
        title="Price List"
        subtitle="Transparent pricing for premium services"
        image="https://images.unsplash.com/photo-1621255843460-2e06161474b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {priceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 bg-white p-8 md:p-12 shadow-sm rounded-sm"
            >
              <h3 className="font-display text-3xl text-stone-900 mb-8 pb-4 border-b border-stone-100">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex justify-between items-end group"
                  >
                    <div className="flex-grow">
                      <span className="font-medium text-lg text-stone-700 group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <div className="border-b border-dotted border-stone-300 w-full mb-1 opacity-50 hidden md:block" />
                    </div>
                    <span className="font-bold text-lg text-stone-900 ml-4 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-12 bg-primary/10 p-8 rounded-sm">
            <h3 className="font-display text-2xl text-stone-900 mb-4">
              Membership Packages Available
            </h3>
            <p className="text-stone-600 mb-6">
              Ask our front desk about our monthly membership plans and save up
              to 20% on all treatments.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
