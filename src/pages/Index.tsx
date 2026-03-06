import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductGrid />
    <CategorySection />
    <PromoBanner />
    <Footer />
    <CartDrawer />
  </div>
);

export default Index;
