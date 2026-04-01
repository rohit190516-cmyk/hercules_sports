import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium fitness equipment showroom with professional gym machines"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.4em] text-primary mb-6 font-body"
          >
            VARANASI'S PREMIER FITNESS EQUIPMENT DESTINATION
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
            YOUR COMPLETE
            <br />
            <span className="text-primary">SPORTS & FITNESS</span>
            <br />
            DESTINATION
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Discover top-quality supplements, essential home gym equipment, and premium 
            sports gear including cricket bats, badminton rackets, and everyday fitness accessories. 
            Everything you need for your active lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              EXPLORE PRODUCTS
            </a>
            <a
              href="#location"
              className="px-8 py-4 border border-foreground/30 text-foreground font-display tracking-wider text-sm hover:bg-foreground/5 transition-colors"
            >
              VISIT STORE
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
