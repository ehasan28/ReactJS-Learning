import Container from "../components/ui/Container"
import HeroImage from "../assets/browser-6.webp"

import logo1 from "../assets/featured-logos/airhouse.png"
import logo2 from "../assets/featured-logos/anvil.svg"
import logo3 from "../assets/featured-logos/commandbar.svg"
import logo4 from "../assets/featured-logos/doppler.svg"
import logo5 from "../assets/featured-logos/duro.svg"
import logo6 from "../assets/featured-logos/earth.svg"
import logo7 from "../assets/featured-logos/hometap.svg"
import logo8 from "../assets/featured-logos/novel.svg"
import logo9 from "../assets/featured-logos/protege.png"
import logo10 from "../assets/featured-logos/slatewell.svg"
import logo11 from "../assets/featured-logos/solace.svg"
import logo12 from "../assets/featured-logos/stellar.svg"
import logo13 from "../assets/featured-logos/wagtopia.svg"
import logo14 from "../assets/featured-logos/trek-health.png"
import logo15 from "../assets/featured-logos/wagtopia.svg"

const featuredLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15]

const LogoCloud = () => {
  return (
    <div className="my-20 overflow-hidden">
      <Container>
        
        <h2 className="text-base mb-8 text-center">
          Helping these rocketship companies grow even faster.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {featuredLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Company logo"
              className="h-7 object-contain grayscale-25 opacity-80 hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default LogoCloud