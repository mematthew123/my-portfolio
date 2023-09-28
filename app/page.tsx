import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import SectionDivider from '@/components/SectionDivider';
import ProjectList from '@/components/ProjectList';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-6'>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <ProjectList />
      <SectionDivider />
      <Contact />
    </main>
  );
}
