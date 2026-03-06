import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Luxury beauty products" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 overlay-dark" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
      >
        Premium Nigerian Beauty
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
      >
        Luxury Beauty for Every Nigerian Woman
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto"
      >
        Discover our curated collection of premium cosmetics designed to celebrate your unique beauty.
      </motion.p>
      <motion.a
        href="#shop"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wider uppercase hover:brightness-110 transition-all shadow-lg shadow-primary/30"
      >
        Shop Now
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
