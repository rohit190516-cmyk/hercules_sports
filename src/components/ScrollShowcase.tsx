import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import commercialGym from "@/assets/commercial-gym.jpg";
import strengthEquipment from "@/assets/strength-equipment.jpg";
import cardioEquipment from "@/assets/cardio-equipment.jpg";
import functionalTraining from "@/assets/functional-training.jpg";

const showcaseItems = [
  {
    image: commercialGym,
    title: "COMMERCIAL EXCELLENCE",
    desc: "Professional equipment trusted by top fitness facilities across the region.",
    stat: "500+",
    statLabel: "Products Available",
  },
  {
    image: strengthEquipment,
    title: "RAW STRENGTH",
    desc: "Heavy-duty strength systems built for the most demanding training sessions.",
    stat: "100%",
    statLabel: "Quality Assured",
  },
  {
    image: cardioEquipment,
    title: "ENDURANCE MACHINES",
    desc: "Advanced cardio equipment for peak performance and optimal training results.",
    stat: "50+",
    statLabel: "Global Brands",
  },
  {
    image: functionalTraining,
    title: "VERSATILE TRAINING",
    desc: "Functional equipment that adapts to every training style and fitness goal.",
    stat: "5.0",
    statLabel: "Customer Rating",
  },
];

const ScrollShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${showcaseItems.length * 100}vh` }} aria-label="Equipment showcase">
      <div className="sticky top-0 h-screen overflow-hidden">
        {showcaseItems.map((item, i) => {
          const start = i / showcaseItems.length;
          const end = (i + 1) / showcaseItems.length;

          return (
            <ShowcaseCard
              key={item.title}
              item={item}
              index={i}
              progress={scrollYProgress}
              start={start}
              end={end}
              total={showcaseItems.length}
            />
          );
        })}
      </div>
    </section>
  );
};

interface ShowcaseCardProps {
  item: typeof showcaseItems[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  total: number;
}

const ShowcaseCard = ({ item, index, progress, start, end, total }: ShowcaseCardProps) => {
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.9, 1, 1, index === total - 1 ? 1 : 0.95]);
  const y = useTransform(progress, [start, start + 0.05], [60, 0]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {item.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-6xl md:text-8xl font-bold text-primary font-display">{item.stat}</span>
            <span className="text-sm tracking-[0.2em] text-muted-foreground font-body mt-2">{item.statLabel.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollShowcase;
