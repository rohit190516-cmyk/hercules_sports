import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium fitness equipment showroom with professional gym machines"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-6 py-10 md:p-12 lg:p-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] text-primary mb-4 md:mb-6 font-body font-semibold uppercase"
          >
            Varanasi's Premier Fitness Equipment Destination
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-4 md:mb-6">
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
            className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 font-body leading-relaxed"
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
              className="px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:bg-primary/90 transition-colors rounded-lg"
            >
              EXPLORE PRODUCTS
            </a>
            <a
              href="#location"
              className="px-8 py-4 border border-border bg-white text-foreground font-display tracking-wider text-sm hover:bg-slate-50 transition-colors rounded-lg"
            >
              VISIT STORE
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
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
