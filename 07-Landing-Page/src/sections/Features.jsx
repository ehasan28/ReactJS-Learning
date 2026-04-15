import Container from '../components/ui/Container'

import f1 from '../assets/features/f1.svg'
import f2 from '../assets/features/f2.svg'
import f3 from '../assets/features/f3.svg'

import Feature2 from '../assets/features/Features2.jpg'
import Feature3 from '../assets/features/dashboards.webp'
import Feature4 from '../assets/features/feature4.jpg'
import Feature5 from '../assets/features/slack.png'
import Feature6 from '../assets/features/Fractional.png'
import Feature7 from '../assets/features/power-users.png'
import Feature8 from '../assets/features/icon (3).svg'

const Features = () => {
  return (
    <div>
      <Container>
        <h2 className='font-normal text-[56px] leading-16 mb-6 mt-36'>
          See your data <br />
          like never before, <br />
          <span className='text-blue-600'>
            without code
          </span>
        </h2>
        <p className='text-xl text-gray-600'>
          Focus on the data, not the data engineering. <br />
          Connect, explore, and visualize from over 150 SaaS tools without engineering or SQL.
        </p>

        <div className='grid md:grid-cols-6 xl:grid-cols-12 mt-6 mb-6 gap-8'>
          <div className="flex flex-col xl:col-span-7 md:col-span-6 shadow-xl border border-gray-100 rounded-2xl">
            <div className='overflow-x-auto mt-12 mb-10'>
              <div className='flex mb-6 gap-8 min-w-max'>
                <div className='bg-white hover:rotate-1 transition ml-10'>
                  <h4 className='text-xs mb-1'>Annual Recurring Revenue (ARR)</h4>
                  <img src={f1} alt="" className='border border-gray-300 rounded' />
                </div>
                <div className='bg-white hover:rotate-1 transition'>
                  <h4 className='text-xs mb-1'>Revenue</h4>
                  <img src={f2} alt="" className='border-1 border-gray-300 rounded' />
                </div>
                <div className='bg-white hover:rotate-1 transition mr-10'>
                  <h4 className='text-xs mb-1'>Customer Lifetime Value (LTV)</h4>
                  <img src={f3} alt="" className='border-1 border-gray-300 rounded' />
                </div>
              </div>
            </div>
            <div className='px-10 pb-10'>
              <p className='text-blue-600 text-sm mb-3'>
                Templates
              </p>
              <h3 className='text-xl mb-3'>
                High quality, expert-made templates <br />
                for table stakes startup metrics
              </h3>
              <p className='text-gray-700 text-sm'>
                Get started with popular startup metrics in minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:col-span-5 md:col-span-6 shadow-xl border border-gray-100 rounded-2xl">
            <div className='p-2'>
              <img src={Feature2} alt="" />
            </div>
            <div className='px-10 pb-10'>
              <p className='text-blue-600 text-sm mt-5 mb-3'>
                Connectors
              </p>
              <h3 className='text-xl mb-3'>
                We connect to over 150+ apps out-of-the-box.
              </h3>
              <p className='text-gray-700 text-sm'>
                If it has an API, we'll build you a customer connector in 48 hours for free or your money back.
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 border border-gray-100 rounded-2xl">
            <div className=''>
              <img src={Feature3} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Beautiful dashboards
              </p>
              <h3 className='text-xl mb-3'>
                Design stunning dashboards.
              </h3>
              <p className='text-gray-700'>
                Filters for your team to explore easily. Tons of visualization options. Color themes that make your charts pop. ✨
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 rounded-2xl border border-gray-100">
            <div className=''>
              <img src={Feature4} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Spreadsheets on steroids
              </p>
              <h3 className='text-xl mb-3'>
                No SQL? No problem.
              </h3>
              <p className='text-gray-700'>
                Familiar Excel shortcuts. Slice and dice with powerful pivot tables. Formulas that translate to SQL. Reusable models.
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 rounded-2xl border border-gray-100">
            <div className=''>
              <img src={Feature5} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Alerts
              </p>
              <h3 className='text-xl mb-3'>
                Stay on top of everything.
              </h3>
              <p className='text-gray-700'>
                Get alerts about sign ups, sales, and reactivations when they happen.
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 rounded-2xl border border-gray-100">
            <div className=''>
              <img src={Feature6} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Fractional data team
              </p>
              <h3 className='text-xl mb-3'>
                Data experts at your service.
              </h3>
              <p className='text-gray-700'>
                No data team? Our analysts can build complex models and dashboards for you.
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 rounded-2xl border border-gray-100">
            <div className=''>
              <img src={Feature7} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Superpowers
              </p>
              <h3 className='text-xl mb-3'>
                Power users deserve power tools
              </h3>
              <p className='text-gray-700'>
                Lightning fast. Shortcuts for all the things. Command+K. Dark mode.
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col xl:col-span-4 md:col-span-3 shadow-xl p-10 rounded-2xl border border-gray-100">
            <div className=''>
              <img src={Feature8} alt="" />
            </div>
            <div>
              <p className='text-blue-600 text-sm mt-6 mb-3'>
                Best-in-class data warehouse
              </p>
              <h3 className='text-xl mb-3'>
                A data stack that scales with you
              </h3>
              <p className='text-gray-700'>
                Powered by a best-in-class backend that all the pros use. Scales to billions of rows like it's nothing. Works with all your other apps.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Features

