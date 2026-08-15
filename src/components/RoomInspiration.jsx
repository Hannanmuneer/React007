import React, { useState } from 'react';
import RoomCard from './RoomCard';

const slidesData = [
  {
    id: 1,
    title: 'Inner Peace',
    subtitle: 'Bed Room',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Minimalist Work',
    subtitle: 'Dining / Workspace',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Modern Living',
    subtitle: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
  },
];

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  return (
    <section className="bg-[#FCF8F3] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
       
        <div className="lg:w-1/3 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#a17b28] text-white font-semibold py-3 px-8 text-sm transition-all duration-300 shadow-sm">
            Explore More
          </button>
        </div>

        
        <div className="lg:w-2/3 flex flex-col md:flex-row items-center gap-6 relative w-full overflow-hidden">
          
        
          <div className="w-full md:w-[400px] h-[500px] relative flex-shrink-0">
            <RoomCard 
              item={slidesData[currentIndex]} 
              index={currentIndex + 1} 
              isActive={true} 
            />
          </div>

        
          <div className="hidden md:block w-[320px] h-[420px] opacity-70 flex-shrink-0">
            <RoomCard 
              item={slidesData[(currentIndex + 1) % slidesData.length]} 
              index={((currentIndex + 1) % slidesData.length) + 1} 
              isActive={false} 
            />
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#B88E2F] p-3 rounded-full shadow-lg hover:bg-[#B88E2F] hover:text-white transition-colors duration-300 z-20"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          
          <div className="absolute bottom-4 right-1/3 flex items-center gap-3 z-20">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-7 h-7 border-2 border-[#B88E2F] flex items-center justify-center' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {currentIndex === idx && (
                  <span className="w-3 h-3 bg-[#B88E2F] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default RoomInspiration;