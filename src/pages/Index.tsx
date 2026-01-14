import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import FeaturesSection from '@/components/FeaturesSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import AboutPreviewSection from '@/components/AboutPreviewSection';
import PropertiesSection from '@/components/PropertiesSection';
import TimelineSection from '@/components/TimelineSection';
import MapSection from '@/components/MapSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutPreviewSection />
        <TimelineSection />
        <FeaturesSection />
        <PropertiesSection />
        <AmenitiesSection />
        <MapSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
