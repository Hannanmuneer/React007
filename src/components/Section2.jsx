import React from 'react'
import Sec2compo from './Sec2components'
import Sec2components from './Sec2components'

const Section2 = () => {
  return (
    <div className='w-full bg-[#f5f5f5] '>
        <div className="upper pt-5 text-center">
          <h1 className=' font-extrabold text-4xl '>Browse The Range </h1>
        <p className='text-[#333] text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, omnis!</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-4 sm:py-6">
        <Sec2components text="Dinning" image='https:furniro.archisacademy.com/assets/dining-card-5a3a5e29.png'/>
        <Sec2components text="Living" image='https:furniro.archisacademy.com/assets/living-card-3810b4c0.png'/>
        <Sec2components text="Bedroom" image='https:furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png'/>
        </div>

    </div>
  )
}

export default Section2
