import React from 'react'

const Hero = () => {
  return (
    // <div className='w-full flex-1 relative'>
    //   <img className='w-full object-cover' src="https://furniro.archisacademy.com/assets/hero-bg-3d57340b.jpg" alt="" />
    //   <div className="absolute h-[450px] top-0 right-px w-[680px] rounded-bl-2xl rounded-br-2xl bg-white">
    //     <p className='px-6 pt-12 text-[#333]  font-bold tracking-[5px]'> New Arrival</p>
    //     <span className='px-6 py-0  font-extrabold text-[#b88e2f] text-6xl  '>Discover Our</span> <br />
    //     <span className='px-6 py-4 font-extrabold text-[#b88e2f] text-6xl'>New Collection</span>
    //     <p className='text-[24px] text-[#333]  py-5 px-6'>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Delectus reiciendis illo vel.</p>
    //     <button className='bg-[#b88e2f] absolute bottom-10 left-7 rounded-2xl px-18 py-5 text-[#333]'>Buy now</button>
    //   </div>
    // </div>
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-16 py-12 overflow-hidden">
      
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://furniro.archisacademy.com/assets/hero-bg-3d57340b.jpg"
        alt="Furniro Hero Background"
      />

    
      <div className="bg-[#FFF3E3] p-6 sm:p-10 lg:p-12 rounded-lg lg:rounded-xl w-full max-w-md sm:max-w-lg lg:max-w-[640px] flex flex-col items-start gap-4 shadow-sm">
        <p className="text-xs sm:text-sm font-semibold tracking-[3px] text-[#333333] uppercase">
          New Arrival
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B88E2F] leading-tight">
          Discover Our <br className="hidden sm:block" />
          New Collection
        </h1>

        <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reiciendis illo vel.
        </p>

        <button className="mt-2 bg-[#B88E2F] hover:bg-[#a07b28] text-white font-bold py-4 px-10 text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300">
          BUY NOW
        </button>
      </div>
    </section>
  )
}

export default Hero