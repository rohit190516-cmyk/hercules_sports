import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import commercialGym from "@/assets/commercial-gym.jpg";
import homeGym from "@/assets/home-gym.jpg";
import strengthEquipment from "@/assets/strength-equipment.jpg";
import cardioEquipment from "@/assets/cardio-equipment.jpg";
import sportsAccessories from "@/assets/sports-accessories.jpg";
import functionalTraining from "@/assets/functional-training.jpg";

const categories = [
  { title: "Commercial Gym Equipment", desc: "Professional-grade machines for fitness centers and training facilities.", image: commercialGym },
  { title: "Home Gym Setups", desc: "Complete workout solutions designed for your personal training space.", image: homeGym },
  { title: "Strength Training", desc: "Power racks, barbells, benches, and heavy-duty weight systems.", image: strengthEquipment },
  { title: "Cardio Machines", desc: "Treadmills, ellipticals, and cycling machines for endurance training.", image: cardioEquipment },
  { title: "Sports Accessories", desc: "Gloves, bands, ropes, and essential training accessories.", image: sportsAccessories },
  { title: "Functional Training", desc: "Kettlebells, battle ropes, TRX, and versatile training equipment.", image: functionalTraining },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 md:py-32 gradient-charcoal grit-overlay relative" aria-label="Product categories">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={`${cat.title} - fitness equipment available at Hercules Sports Varanasi`}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 font-display tracking-wider">
                  {cat.title.toUpperCase()}
                </h3>
                <p className="text-sm text-muted-foreground font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
