import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const { name, email, phone, message } = data;

    // Format message for WhatsApp
    const whatsappMessage =
      `Hello! I'd like to get in touch:\n\n` +
      `*Name:* ${name.trim() || "—"} \n` +
      `*Email:* ${email.trim() || "—"} \n` +
      `*Phone:* ${phone.trim() || "—"} \n` +
      `*Message:*\n${message.trim() || "No additional message"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919525293190?text=${encodedMessage}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, "_blank");

    // Reset form after sending
    form.reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>
          Contact Mahipalpur Spa Service Centre | Book Body Massage Near IGI
          Airport
        </title>
        <meta
          name="description"
          content="Contact Mahipalpur Spa Service Centre in Mahipalpur Delhi. Book body massage, couple spa and wellness treatments near IGI Airport. Call or WhatsApp now."
        />
        <link
          rel="canonical"
          href="https://mahipalpurspaservicecentre.com/contact"
        />
      </Helmet>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to answer any questions you may have"
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl text-stone-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-stone-600 text-lg mb-12">
                Whether you want to book an appointment or simply have a query
                about our services, our team is ready to assist you 24/7.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                      Address
                    </h3>
                    <p className="text-stone-600">
                      Office No - 118, Defence Enclave,
                      <br />
                      Adjoining Aerocity, Mahipalpur,
                      <br />
                      New Delhi, Delhi 110037
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-stone-600">+91 9525293190</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                      Email
                    </h3>
                    <p className="text-stone-600">
                      mahipalpurspaservicecentre@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                      Hours
                    </h3>
                    <p className="text-stone-600">
                      Open 24 Hours, Monday - Sunday
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-lg rounded-sm"
            >
              <h3 className="font-display text-3xl text-stone-900 mb-6">
                Send a Message
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="bg-stone-50 border-stone-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter your email"
                              {...field}
                              className="bg-stone-50 border-stone-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter your phone number"
                              {...field}
                              className="bg-stone-50 border-stone-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your needs..."
                            className="min-h-[120px] bg-stone-50 border-stone-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                  >
                    Send via WhatsApp
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-stone-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6293910948956!2d77.12391!3d28.55169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzA2LjEiTiA3N8KwMDcnMjYuMSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Spa Service Centre Location"
          className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </section>
    </Layout>
  );
}
