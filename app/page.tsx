import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6">
      <Hero />
      <SectionDivider />
      <Skills />
    </main>
  )
}
