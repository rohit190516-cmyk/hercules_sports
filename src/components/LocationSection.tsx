import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 md:py-32 gradient-dark relative" aria-label="Store location and contact information">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-primary mb-4 font-body">VISIT US</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            FIND OUR <span className="text-primary">STORE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start p-6 bg-secondary/30 border border-border">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-foreground font-display tracking-wider mb-1">ADDRESS</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  B29, GPS Tower, B29, Sankat Mochan Rd, Anandbagh, Bhelupur, Varanasi, Uttar Pradesh 221005
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-secondary/30 border border-border">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-foreground font-display tracking-wider mb-1">BUSINESS HOURS</h3>
                <p className="text-sm text-muted-foreground font-body">Open · Closes 9:30 PM</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hercules+Sports+Fitness+Varanasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:bg-primary/90 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                GET DIRECTIONS
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-foreground/30 text-foreground font-display tracking-wider text-sm hover:bg-foreground/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-[300px] lg:h-full min-h-[300px] bg-secondary/30 border border-border overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.123!2d83.0!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA4M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hercules Sports and Fitness store location in Varanasi"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
