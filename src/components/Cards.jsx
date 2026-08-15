import React from 'react'

const Cards = ({ image, name, subtitle, price, originalPrice, discount, isNew }) => {
    return (
        <div className='group relative w-[265px] bg-[#F4F5F7] overflow-hidden transition-all duration-300 mx-auto'>


            <div className='relative w-full h-[301px] overflow-hidden'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />


                {discount && (
                    <div className='absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] text-white flex items-center justify-center text-sm font-medium'>
                        -{discount}%
                    </div>
                )}


                {isNew && (
                    <div className='absolute top-5 right-5 w-12 h-12 rounded-full bg-[#2EC1AC] text-white flex items-center justify-center text-sm font-medium'>
                        New
                    </div>
                )}

                <div className='absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 gap-4'>
                    <button className='bg-white text-[#B88E2F] font-semibold px-8 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-200'>
                        Add to cart
                    </button>

                    <div className='flex items-center gap-4 text-white text-sm font-semibold'>
                        <button className='flex items-center gap-1 hover:text-[#B88E2F] transition-colors'>
                            <span>Share</span>
                        </button>
                        <button className='flex items-center gap-1 hover:text-[#B88E2F] transition-colors'>
                            <span>Compare</span>
                        </button>
                        <button className='flex items-center gap-1 hover:text-[#B88E2F] transition-colors'>
                            <span>Like</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className='p-4 flex flex-col gap-1'>
                <h3 className='text-[#3A3A3A] font-bold text-2xl'>{name}</h3>
                <p className='text-[#898989] text-base font-medium'>{subtitle}</p>

                <div className='flex items-center justify-between mt-1'>
                    <span className='text-[#3A3A3A] font-bold text-xl'>Rp {price}</span>
                    {originalPrice && (
                        <span className='text-[#B0B0B0] line-through text-sm'>
                            Rp {originalPrice}
                        </span>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Cards