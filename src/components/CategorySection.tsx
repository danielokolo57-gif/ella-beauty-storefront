import { motion } from "framer-motion";
import skincareImg from "@/assets/skincare.jpg";
import makeupImg from "@/assets/makeup.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";

const categories = [
  { name: "Makeup", image: makeupImg },
  { name: "Skincare", image: skincareImg },
  { name: "Beauty Accessories", image: cosmeticsImg },
];

const CategorySection = () => (
  <section id="categories" className="py-20 px-4">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-body">Browse</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Shop by Category</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 overlay-accent group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{cat.name}</h3>
                <span className="text-primary text-sm font-body font-semibold tracking-wider uppercase group-hover:tracking-[0.3em] transition-all">
                  Explore →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
