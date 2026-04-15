import React from 'react'
import Container from '../components/ui/Container'

import int1 from '../assets/Integration-icons/csv.webp'
import int2 from '../assets/Integration-icons/json.webp'
import int3 from '../assets/Integration-icons/mobile.webp'
import int4 from '../assets/Integration-icons/sharing.webp'
import int5 from '../assets/Integration-icons/sql.webp'
import int6 from '../assets/Integration-icons/dbt.webp'
import int7 from '../assets/Integration-icons/lineage.webp'
import int8 from '../assets/Integration-icons/column-descriptions.webp'
import int9 from '../assets/Integration-icons/live.webp'
import int10 from '../assets/Integration-icons/comments.webp'
import int11 from '../assets/Integration-icons/sso-saml.webp'
import int12 from '../assets/Integration-icons/soc-2-type-2.webp'

const Integrations = () => {
  return (
    <div>
      <Container>
        <h2 className='font-normal text-[56px] leading-16 mb-6 mt-36'>Need more? <span className='text-blue-600'>We got you.</span></h2>
        <p className='text-xl text-gray-600'>Details matter, and we've put a lot of love into each and every one of them.</p>

        <div className='grid grid-cols-4 gap-x-8 gap-y-4  mt-12'>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int1} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              CSV download and upload
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              CSVs that work with all your other tables.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int2} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              JSON parsing
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Great for working with NoSQL objects. Looking at you MongoDB.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int3} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Mobile-friendly
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              It's 2024.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int4} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Secure sharing
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Share your work with partners while keeping your data safe.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int5} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Powerful SQL editor with auto-completion
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Did we mention Supernova is also awesome for writing SQL?
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int6} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Works great with dbt
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Pull your docs automatically from your models.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int7} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Lineage
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Follow data from chart all the way back to the source tables.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int8} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Column descriptions
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Easily document your models for your team.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int9} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Live collaboration
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Work together in real time.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int10} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              Comments
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Ask questions right where the data lives.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int11} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              SSO and SAML
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Enterprise-grade user provisioning.
            </p>
          </div>

          <div className='flex flex-col justify-center items-center pt-4 pb-4'>
            <img src={int12} alt="" className='mb-6' />
            <h3 className='text-sm text-black text-center mb-1'>
              SOC 2 Type 2 certified
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              Our security is audited regularly.
            </p>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Integrations