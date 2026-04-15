import React from 'react'
import Container from '../components/ui/Container'
import TestimonialData from '../data/TestimonialsContent'

const Testimonials = () => {
  return (
    <div>
      <Container>
        <h2 className='font-normal text-[56px] leading-16 mb-6 mt-36'>
          <span className='text-blue-600'>Hundreds of people</span>  <br />
          already love us
        </h2>
        <p className='text-xl text-gray-600'>But don't just take our word for it.</p>

        <div className='grid grid-cols-3 gap-4 mt-12'>

          {
            TestimonialData.map((item, idx) => (
              <div className='p-6 border border-gray-100 rounded-2xl'>
                <div className='flex gap-4 mb-6 justify-between'>
                  <div className=''>
                    <p className='text-md font-medium text-black'>{item.name}</p>
                    <span className='text-sm text-gray-600'>{item.role}</span>
                  </div>
                  <img src={item.photo} alt="Client Photo" className='rounded-full'/>
                </div>
                <p className='text-xl leading-8'>{item.content}</p>
              </div>
            ))
          }

        </div>

      </Container>
    </div>
  )
}

export default Testimonials