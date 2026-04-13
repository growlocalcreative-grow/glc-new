import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Tools from '@/components/tools';
import Services from '@/components/services';
import Spotlight from '@/components/spotlight';
import ComingNext from '@/components/coming-next';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tools />
        <Services />
        <Spotlight />
        <ComingNext />
      </main>
      <Footer />
    </>
  );
}
