import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import commercialGym from "@/assets/commercial-gym.jpg";
import homeGym from "@/assets/home-gym.jpg";
import strengthEquipment from "@/assets/strength-equipment.jpg";
import cardioEquipment from "@/assets/cardio-equipment.jpg";
import sportsAccessories from "@/assets/sports-accessories.jpg";
import functionalTraining from "@/assets/functional-training.jpg";

const categories = [
  { title: "Sports Equipment", desc: "Cricket bats, badminton rackets, tennis gear, and field essentials.", image: functionalTraining },
  { title: "Home Gym Essentials", desc: "Complete basic workout solutions designed for your personal space.", image: homeGym },
  { title: "Nutritional Supplements", desc: "Premium proteins, pre-workouts, and vitamins for daily fitness support.", image: strengthEquipment },
  { title: "Cardio Machines", desc: "Treadmills, regular ellipticals, and cycles for everyday fitness.", image: cardioEquipment },
  { title: "Sports Accessories", desc: "Gloves, bands, skipping ropes, and essential training add-ons.", image: sportsAccessories },
  { title: "Basic Weights", desc: "Dumbbells, barbells, standard plates, and everyday lifting gear.", image: commercialGym },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50 relative" aria-label="Product categories">
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">OUR COLLECTION</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            EQUIPMENT <span className="text-primary">CATEGORIES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border flex flex-col cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={`${cat.title} - fitness equipment available at Hercules Sports Varanasi`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-display tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
