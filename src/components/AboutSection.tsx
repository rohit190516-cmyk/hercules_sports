import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Dumbbell, Target, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: Shield, label: "Global Brands" },
    { icon: Dumbbell, label: "Advanced Machines" },
    { icon: Target, label: "Performance Focused" },
    { icon: Award, label: "Built to Last" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 gradient-charcoal grit-overlay relative" aria-label="About Hercules Sports and Fitness">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">ABOUT US</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              YOUR TRUSTED DESTINATION FOR
              <br />
              <span className="text-primary">QUALITY FITNESS</span> EQUIPMENT
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 font-body max-w-3xl"
          >
            Hercules Sports & Fitness brings leading global fitness and sports equipment brands under one roof in Varanasi.
            From advanced commercial training machines to complete home gym setups and essential sports accessories —
            every product is selected for performance, durability, and long-term value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
              >
                <p.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs tracking-[0.2em] text-foreground font-display">{p.label.toUpperCase()}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
