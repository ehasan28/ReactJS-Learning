import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button2 = () => {
  return (
    <button className='flex gap-1 font-medium text-xs px-4 py-2 bg-gray-900 text-white rounded-full cursor-pointer active:scale-95'>
      Signup
      <ArrowRight size={14}
      />
    </button>
  )
}

export default Button2