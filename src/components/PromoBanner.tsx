import { motion } from "framer-motion";
import promoImg from "@/assets/promo.jpg";

const PromoBanner = () => (
  <section className="relative py-32 overflow-hidden">
    <img src={promoImg} alt="Beauty promotion" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 overlay-dark" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body"
      >
        New Collection
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
      >
        Glow With Confidence
      </motion.h2>
      <motion.a
        href="#shop"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all"
      >
        Discover Now
      </motion.a>
    </div>
  </section>
);

export default PromoBanner;
