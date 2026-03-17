import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import CasesSection from './components/CasesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <CasesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
