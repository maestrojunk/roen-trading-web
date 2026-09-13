import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { CashmereStory } from '@/components/sections/Story/CashmereStory';
import { Business } from '@/components/sections/Business/Business';
import { Numbers } from '@/components/sections/Numbers/Numbers';
import { Categories } from '@/components/sections/Categories/Categories';
import { Process } from '@/components/sections/Process/Process';
import { Founder } from '@/components/sections/Founder/Founder';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white">
      {/* 01 HEADER */}
      <Header />

      {/* 02 HERO */}
      <Hero />

      {/* 03 ABOUT ROEN */}
      <About />

      {/* 04 SPECIAL HIGHLIGHT: WHITE CASHMERE STORY */}
      <CashmereStory />

      {/* 05 WHAT WE DO */}
      <Business />

      {/* 06 NUMBERS */}
      <Numbers />

      {/* 07 PRODUCT CATEGORIES */}
      <Categories />

      {/* 08 OUR PROCESS */}
      <Process />

      {/* 09 FOUNDER */}
      <Founder />

      {/* 10 CONTACT */}
      <Contact />

      {/* 11 FOOTER */}
      <Footer />
    </main>
  );
}
