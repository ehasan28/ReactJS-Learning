import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import LogoCloud from './sections/LogoCloud'
import Features from './sections/Features'
import Integrations from './sections/Integrations'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'

const App = () => {
  return (
    <div>
      <Header />

      <Hero />
      <LogoCloud />
      <Features />
      <Integrations />
      <Testimonials />
      <CTA />

      <Footer />
    </div>
  )
}

export default App