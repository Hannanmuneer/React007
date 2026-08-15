import React from 'react';

const RoomCard = ({ item, index, isActive }) => {
    
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <div className="relative w-full h-full rounded-sm overflow-hidden group">
    
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {isActive && (
        <div className="absolute bottom-6 left-6 flex items-end z-10">
       
          <div className="bg-white/80 backdrop-blur-md p-6 pr-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>{formattedIndex}</span>
              <span className="w-6 h-[1px] bg-gray-500"></span>
              <span>{item.subtitle}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#3A3A3A]">
              {item.title}
            </h3>
          </div>

        
          <button className="bg-[#B88E2F] text-white p-4 hover:bg-[#a17b28] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomCard;