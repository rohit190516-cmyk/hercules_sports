import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Dumbbell, Target, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: Shield, label: "Quality Brands" },
    { icon: Dumbbell, label: "Basic Gym Setup" },
    { icon: Target, label: "Sports Essentials" },
    { icon: Award, label: "Top Supplements" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative" aria-label="About Hercules Sports and Fitness">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">ABOUT US</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              YOUR TRUSTED DESTINATION FOR
              <br />
              <span className="text-primary">SPORTS & FITNESS</span> ESSENTIALS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed mb-12 font-body max-w-3xl text-muted-foreground"
          >
            Hercules Sports & Fitness brings quality athletic gear, fitness equipment, and nutritional supplements under one roof in Varanasi.
            From simple home gym setups and basic weights to essential sports gear like cricket bats and badminton rackets —
            every product is selected to help you stay active, healthy, and performing at your best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-3 p-6 border border-border bg-background rounded-lg hover:shadow-sm transition-all group"
              >
                <p.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs tracking-[0.2em] font-display text-foreground font-semibold">{p.label.toUpperCase()}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
