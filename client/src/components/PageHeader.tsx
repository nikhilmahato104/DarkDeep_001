import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
}: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Descriptive alt for Unsplash: luxury spa massage relaxation */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-4 text-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-100 font-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
