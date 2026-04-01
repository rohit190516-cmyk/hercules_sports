import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Call to action">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            UPGRADE YOUR <span className="text-primary">FITNESS SPACE</span> TODAY
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-body mb-10 max-w-xl mx-auto">
            Visit Hercules Sports & Fitness in Varanasi for expert guidance and the finest selection of sports gear, supplements, and fitness equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#location"
              className="px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:bg-primary/90 transition-colors rounded-md"
            >
              VISIT OUR STORE
            </a>
            <a
              href="tel:+910000000000"
              className="px-8 py-4 border border-foreground/30 text-foreground font-display tracking-wider text-sm hover:bg-slate-50 transition-colors rounded-md bg-white"
            >
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
