import '../assets/styles/headerFooter.css';
import Hero from '../sections/hero/Hero';
import Services from '../sections/services/Services';
import JobHighlights from '../sections/JobHighlights';
import Testimonials from '../sections/Testimonials';
import Stats from '../sections/Stats';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Services />
      <JobHighlights />
      <Testimonials />
      <Stats />
      <CTA />
    </main>
  );
}