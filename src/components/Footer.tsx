import { MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border py-16" role="contentinfo">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold tracking-wider text-foreground font-display mb-1">HERCULES</h3>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-body mb-4">SPORTS & FITNESS</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Varanasi's trusted destination for premium fitness and sports equipment. Global brands, professional guidance, lasting quality.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider text-foreground font-display mb-4">QUICK LINKS</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {["About", "Products", "Why Us", "Reviews", "Visit"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wider text-foreground font-display mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">
                  B29, GPS Tower, Sankat Mochan Rd, Bhelupur, Varanasi 221005
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">Open · Closes 9:30 PM</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+910000000000" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Hercules Sports & Fitness, Varanasi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Premium Fitness Equipment Wholesaler in Varanasi, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
