import ContainerMD from '../components/ui/ContainerMD'
import Button1 from '../components/ui/Button1'
import Button2 from '../components/ui/Button2'

const CTA = () => {
  return (
    <div>
      <ContainerMD>
        <div className='flex justify-center flex-col items-center gap-8 bg-gradient-to-b from-[#5b22ff] to-[#2d68ff] rounded-2xl py-20 my-40'>
          <h2 className='ont-normal text-[56px] leading-16 text-center text-white'>
            We're making analytics easy for everyone.
          </h2>
          <p className='text-xl text-white'>
            Take control of your data like never before. Join the fight.
          </p>
          <div className="flex gap-3">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </ContainerMD>
    </div>
  )
}

export default CTA