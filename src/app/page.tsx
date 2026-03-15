import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import HowItWorks from '@/components/HowItWorks';
import TransformYourDesign from '@/components/TransformYourDesign';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navigation />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <TransformYourDesign />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
