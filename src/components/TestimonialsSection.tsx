import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajat Singh", text: "Cooperative staff, decent price. Happy after visiting the place. Great selection of equipment for home use and sports." },
  { name: "Dhruv Rajauria", text: "Polite and friendly behaviour of owner is the thing I liked most. They genuinely help you pick the right gear." },
  { name: "Ajay Kumar Chaudhary", text: "Great experience, excellent variety available for each product. Authentic supplements and trustworthy quality." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 md:py-32 section-light relative" aria-label="Customer reviews">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "hsl(var(--light-fg))" }}>
            WHAT OUR <span className="text-primary">CUSTOMERS</span> SAY
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="font-bold ml-2 font-display text-lg" style={{ color: "hsl(var(--light-fg))" }}>5.0</span>
            <span className="text-sm font-body ml-1" style={{ color: "hsl(var(--light-muted))" }}>(74 reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 border relative group hover:shadow-lg transition-shadow"
              style={{
                backgroundColor: "hsl(var(--light-card))",
                borderColor: "hsl(var(--light-border))",
              }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "hsl(var(--light-muted))" }}>"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary font-display">{t.name[0]}</span>
                </div>
                <span className="text-sm font-body font-medium" style={{ color: "hsl(var(--light-fg))" }}>{t.name}</span>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
