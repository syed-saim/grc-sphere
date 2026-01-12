import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { CareerCTA } from "@/components/CareerCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
      <CareerCTA />
      <Footer />
    </div>
  );
};

export default Index;
