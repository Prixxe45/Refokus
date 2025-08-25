import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.67%] px-4 py-5 border-t-1 border-b-1 border-r-1 border-zinc-600 flex justify-between items-center'>
      <img src={val.url} alt="" />
      <span className='font-semibold text-black'>{val.number}</span>
    </div>
  )
}

export default Stripe