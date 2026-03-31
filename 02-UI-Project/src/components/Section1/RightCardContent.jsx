import {ArrowRight} from 'lucide-react'

const RightCardContent = (Props) => {
  return (
    <div>
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center' >{Props.id+1}</h2>
        <div  >
          <p className='text-lg leading-relaxed text-white mb-14' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus esse excepturi incidunt accusantium pariatur repudiandae Natus.</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:Props.color}} className='text-white font-medium px-8 py-2 rounded-full' >{Props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'> <ArrowRight /> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent