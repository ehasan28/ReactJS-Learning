import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import LogoCloud from './sections/LogoCloud'
import Features from './sections/Features'

const App = () => {
  return (
    <div>
      <Header />

      <Hero />
      <LogoCloud />
      <Features />

      <Footer />
    </div>
  )
}

export default App