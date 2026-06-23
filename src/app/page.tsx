import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ProductModal } from "@/components/ui/ProductModal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
      <ProductModal />
    </>
  );
}
