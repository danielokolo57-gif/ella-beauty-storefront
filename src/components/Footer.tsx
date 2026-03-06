import { Instagram } from "lucide-react";

const Footer = () => (
  <footer id="about" className="border-t border-border py-16 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            ella<span className="text-gradient">beauty</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Premium cosmetics curated for the modern Nigerian woman. Beauty that celebrates you.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Shop", "Categories", "About Us", "Contact"].map(l => (
              <a key={l} href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Connect</h4>
          <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <Instagram size={18} /> Follow us on Instagram
          </a>
          <p className="text-muted-foreground text-sm mt-4">info@ellabeauty.ng</p>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} EllaBeauty. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
