import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Markets from "@/components/Markets";
import ParallaxBanner from "@/components/ParallaxBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Markets />
      <ParallaxBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
