import React from 'react';

const GALLERY_IMAGES = [
    
    { id: 1, src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600', alt: 'Shelf Decor', className: 'h-80 w-full object-cover' },
    { id: 2, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800', alt: 'Setup Desk', className: 'h-72 w-full object-cover' },
    { id: 3, src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600', alt: 'Yellow Chair', className: 'h-64 w-full object-cover' },
    { id: 4, src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800', alt: 'Vase on Stool', className: 'h-56 w-full object-cover' },

    
    { id: 5, src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800', alt: 'Dining Table', className: 'h-[420px] w-full object-cover' },

    
    { id: 6, src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800', alt: 'Bed Setup', className: 'h-80 w-full object-cover' },
    { id: 7, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800', alt: 'Kitchen Table', className: 'h-[460px] w-full object-cover' },
    { id: 8, src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600', alt: 'Frame Decor', className: 'h-60 w-full object-cover' },
    { id: 9, src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600', alt: 'Kitchen Shelf', className: 'h-52 w-full object-cover' },
];

const FurnitureGallery = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
           
            <div className="text-center mb-8">
                <p className="text-gray-500 font-medium text-sm sm:text-base">
                    Share your setup with
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mt-1">
                    #FuniroFurniture
                </h2>
            </div>

            
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                   
                    <div className="md:col-span-5 grid grid-cols-12 gap-4 items-end">
                        <div className="col-span-4 space-y-4">
                            <img
                                src={GALLERY_IMAGES[0].src}
                                alt={GALLERY_IMAGES[0].alt}
                                className={`${GALLERY_IMAGES[0].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                            <img
                                src={GALLERY_IMAGES[2].src}
                                alt={GALLERY_IMAGES[2].alt}
                                className={`${GALLERY_IMAGES[2].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                        </div>

                        <div className="col-span-8 space-y-4">
                            <img
                                src={GALLERY_IMAGES[1].src}
                                alt={GALLERY_IMAGES[1].alt}
                                className={`${GALLERY_IMAGES[1].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                            <img
                                src={GALLERY_IMAGES[3].src}
                                alt={GALLERY_IMAGES[3].alt}
                                className={`${GALLERY_IMAGES[3].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                        </div>
                    </div>

                    
                    <div className="md:col-span-3">
                        <img
                            src={GALLERY_IMAGES[4].src}
                            alt={GALLERY_IMAGES[4].alt}
                            className={`${GALLERY_IMAGES[4].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                        />
                    </div>

                    <div className="md:col-span-4 grid grid-cols-12 gap-4 items-start">
                        <div className="col-span-7 space-y-4">
                            <img
                                src={GALLERY_IMAGES[5].src}
                                alt={GALLERY_IMAGES[5].alt}
                                className={`${GALLERY_IMAGES[5].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                            <img
                                src={GALLERY_IMAGES[7].src}
                                alt={GALLERY_IMAGES[7].alt}
                                className={`${GALLERY_IMAGES[7].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                        </div>

                        <div className="col-span-5 space-y-4">
                            <img
                                src={GALLERY_IMAGES[6].src}
                                alt={GALLERY_IMAGES[6].alt}
                                className={`${GALLERY_IMAGES[6].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                            <img
                                src={GALLERY_IMAGES[8].src}
                                alt={GALLERY_IMAGES[8].alt}
                                className={`${GALLERY_IMAGES[8].className} rounded-sm shadow-xs hover:scale-[1.02] transition-transform duration-300`}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FurnitureGallery;