import React from 'react'

const Sec2components = ({image,text}) => {
  return (
    <div className='w-full max-w-[300px] h-auto rounded-lg'>
  <img 
    className='w-full h-[400px] sm:h-[410px] object-cover rounded-lg' 
    src={image} 
    alt={text || "card image"} 
  />
  <p className='text-center text-[#333] text-[18px] sm:text-[20px] font-semibold p-2'>
    {text}
  </p>
</div>
  )
}

export default Sec2components
