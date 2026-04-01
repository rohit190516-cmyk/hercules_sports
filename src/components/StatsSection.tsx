import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5.0", label: "Customer Rating" },
  { value: "74+", label: "Verified Reviews" },
  { value: "500+", label: "Products Available" },
  { value: "#1", label: "Trusted in Varanasi" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 bg-slate-50 relative border-y border-border" aria-label="Business statistics">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display">{s.value}</span>
              <p className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground mt-2 font-body">{s.label.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
