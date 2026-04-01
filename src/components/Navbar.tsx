import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-lg md:text-xl font-bold tracking-wider text-foreground font-display">
            HERCULES
          </span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-body">
            SPORTS & FITNESS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+910000000000"
            className="flex items-center gap-2 text-sm bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors font-body"
          >
            <Phone className="w-3 h-3" />
            Call Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-body py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 text-sm bg-primary text-primary-foreground px-4 py-2.5 rounded font-body w-fit"
            >
              <Phone className="w-3 h-3" />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
