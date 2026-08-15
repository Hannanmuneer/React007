import React from 'react'
import Cards from './Cards'
const Section3 = () => {
    const products = [
  {
    id: 1,
    name: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "2.500.000",
    originalPrice: "3.500.000",
    discount: 30,
    image: "https://furniro.archisacademy.com/assets/dining-card-5a3a5e29.png"
  },
  {
    id: 2,
    name: "Leviosa",
    subtitle: "Stylish cafe chair",
    price: "2.500.000",
    image: "https://furniro.archisacademy.com/assets/table4-9e291d62.jpg"
  },
  {
    id: 3,
    name: "Lolito",
    subtitle: "Luxury big sofa",
    price: "7.000.000",
    originalPrice: "14.000.000",
    discount: 50,
    image: "https://furniro.archisacademy.com/assets/living-card-3810b4c0.png"
  },
  {
    id: 4,
    name: "Respira",
    subtitle: "Outdoor bar table and stool",
    price: "500.000",
    isNew: true,
    image: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png"
  },
  {
    id: 5,
    name: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "2.500.000",
    originalPrice: "3.500.000",
    discount: 30,
    image: "https://furniro.archisacademy.com/assets/barstool4-3eda4927.jpg"
  },
  {
    id: 6,
    name: "Leviosa",
    subtitle: "Stylish cafe chair",
    price: "2.500.000",
    image: "https://furniro.archisacademy.com/assets/patio4-ff0aa15f.jpg"
  },
  {
    id: 7,
    name: "Lolito",
    subtitle: "Luxury big sofa",
    price: "7.000.000",
    originalPrice: "14.000.000",
    discount: 50,
    image: "https://furniro.archisacademy.com/assets/sofa4-0ad89bba.jpg"
  },
  {
    id: 8,
    name: "Respira",
    subtitle: "Outdoor bar table and stool",
    price: "500.000",
    isNew: true,
    image: "https://furniro.archisacademy.com/assets/chair2-c83481e8.jpg"
  }
]

  return (
    <div className='w-full h-full  '>
      <div className="heading font-extrabold text-3xl text-center py-5"><span>Our Products</span></div>
      <div className=''>
      
      <div className='max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </div>
    <div className="bottom font-bold flex justify-center items-center py-10"><button className='rounded border-2 px-18 py-2 text-[#b88e2f] border-[#b88e2f]'>Show More</button></div>
    </div>
  )
}

export default Section3
