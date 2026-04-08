import ContainerMD from '../components/ui/ContainerMD';
import HeroImage from '../assets/browser-6.webp'
import HeroBG from '../assets/hero-bg.svg'

const Hero = () => {
  return (
    <div>
      <ContainerMD>
        <div className='flex flex-col items-center'>
          <img
            src={HeroBG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <h1 className='mt-30 mb-4 font-regular text-[56px] text-gray-800 text-center'>
            Scale your analytics without hiring
          </h1>
          <p className='mb-20 text-center font-light text-2xl text-gray-800'>
            The first data tool that you'll love.<br />
            And a team of experts to <span className='text-blue-600'>get you started</span>
          </p>
          <img className='p-3 bg-gray-300/50 rounded-xl' src={HeroImage} alt="" />
        </div>
      </ContainerMD>
    </div>
  )
}

export default Hero