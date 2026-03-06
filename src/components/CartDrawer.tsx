import { X, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { items, removeFromCart, isCartOpen, setIsCartOpen, cartCount } = useCart();
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md glass-strong flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display text-xl font-bold text-foreground">Your Cart ({cartCount})</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <p className="text-muted-foreground text-center mt-10">Your cart is empty</p>
              ) : items.map(item => (
                <div key={item.id} className="flex gap-4 glass rounded-xl p-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-foreground font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-primary font-bold text-sm">₦{Number(item.price).toLocaleString()} × {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors self-center">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground font-body">Total</span>
                  <span className="text-foreground font-bold text-xl font-body">₦{total.toLocaleString()}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-body font-semibold text-sm tracking-wider uppercase hover:brightness-110 transition-all shadow-lg shadow-primary/30">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
