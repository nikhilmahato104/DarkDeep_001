import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const posts = [
    {
      title: "Benefits of Russian Banya for Detoxification",
      date: "October 15, 2024",
      excerpt:
        "The high heat and steam of the Banya initiate a profound cleansing process that rejuvenates the skin and internal organs.",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Understanding Deep Tissue Massage",
      date: "September 28, 2024",
      excerpt:
        "Deep tissue massage focuses on the deepest layers of muscle tissue, tendons and fascia (the protective layer surrounding muscles, bones and joints).",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Healing Power of Aromatherapy",
      date: "September 10, 2024",
      excerpt:
        "Essential oils have been used for nearly 6,000 years, with the aim of improving a person's health or mood.",
      image:
        "https://images.unsplash.com/photo-1602812720993-903df12d37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>
          Spa Blog in Mahipalpur | Wellness Tips & Massage Therapy Guide
        </title>
        <meta
          name="description"
          content="Read spa wellness tips, massage therapy benefits and aromatherapy guides from Mahipalpur Spa Service Centre near IGI Airport Delhi."
        />
        <link
          rel="canonical"
          href="https://mahipalpurspaservicecentre.com/blog"
        />
      </Helmet>
      <PageHeader
        title="Wellness Blog"
        subtitle="Tips and insights for a healthier you"
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm text-primary font-medium mb-3 uppercase tracking-wide">
                    {post.date}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-stone-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="text-stone-900 hover:text-primary p-0 h-auto font-medium"
                  >
                    Read Article
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
