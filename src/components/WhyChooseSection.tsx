import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Wrench, LayoutGrid, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Trusted by Gym Owners", desc: "Fitness enthusiasts and commercial gym owners rely on our equipment." },
  { icon: Globe, title: "Global-Quality Brands", desc: "Curated selection from leading international fitness equipment manufacturers." },
  { icon: Wrench, title: "Built for Durability", desc: "Every product is performance-tested and engineered for long-term use." },
  { icon: LayoutGrid, title: "Excellent Variety", desc: "Comprehensive range covering every fitness need and training style." },
  { icon: HeartHandshake, title: "Expert Guidance", desc: "Cooperative and knowledgeable staff for professional buying support." },
  { icon: ShieldCheck, title: "Commercial & Home Ready", desc: "Equipment suitable for both professional gyms and personal spaces." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 gradient-charcoal grit-overlay relative" aria-label="Why choose Hercules Sports">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">THE ADVANTAGE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            WHY CHOOSE <span className="text-primary">HERCULES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-bold text-foreground mb-2 font-display tracking-wider">
                {f.title.toUpperCase()}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
