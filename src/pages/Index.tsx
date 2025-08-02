import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-green-dark">
      <Header />
      <HeroSection />
      <ReasonsSection />
      <Footer />
    </div>
  );
};

export default Index;