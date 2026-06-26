import Hero from '@/components/home/Hero';
import ClientMarquee from '@/components/home/ClientMarquee';
import ServicesGrid from '@/components/home/ServicesGrid';
import CaseStudiesShowcase from '@/components/home/CaseStudiesShowcase';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesGrid />
      <CaseStudiesShowcase />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
