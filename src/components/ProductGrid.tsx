import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

const API_URL = "https://ctzluwfqilwgelexslco.supabase.co/functions/v1/products-api?project_id=prime-depot-2481";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(API_URL)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => {
        const list = Array.isArray(data) ? data : data.products || data.data || [];
        setProducts(list);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Loader2 className="animate-spin mx-auto text-primary" size={40} />
        <p className="text-muted-foreground mt-4">Loading products...</p>
      </div>
    </section>
  );

  if (error || products.length === 0) return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-lg">Products are loading. Please refresh.</p>
      </div>
    </section>
  );

  return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-body">Our Collection</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Featured Products</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{p.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-xl font-body">₦{Number(p.price).toLocaleString()}</span>
                  <button
                    onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                    className="bg-primary text-primary-foreground p-2.5 rounded-full hover:brightness-110 transition-all shadow-md shadow-primary/20"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
