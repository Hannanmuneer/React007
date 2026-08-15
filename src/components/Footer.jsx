import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
        
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold text-black">Funiro.</h2>
            <address className="not-italic text-gray-400 text-sm leading-relaxed max-w-xs">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

        
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-400 font-medium text-sm">Links</p>
            <ul className="space-y-4 text-sm font-semibold text-black">
              <li><a href="#" className="hover:text-[#B88E2F]">Home</a></li>
              <li><a href="#" className="hover:text-[#B88E2F]">Shop</a></li>
              <li><a href="#" className="hover:text-[#B88E2F]">About</a></li>
              <li><a href="#" className="hover:text-[#B88E2F]">Contact</a></li>
            </ul>
          </div>

       
          <div className="lg:col-span-3 space-y-6">
            <p className="text-gray-400 font-medium text-sm">Help</p>
            <ul className="space-y-4 text-sm font-semibold text-black">
              <li><a href="#" className="hover:text-[#B88E2F]">Payment Options</a></li>
              <li><a href="#" className="hover:text-[#B88E2F]">Returns</a></li>
              <li><a href="#" className="hover:text-[#B88E2F]">Privacy Policies</a></li>
            </ul>
          </div>

         
          <div className="lg:col-span-3 space-y-6">
            <p className="text-gray-400 font-medium text-sm">Newsletter</p>
            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent text-xs text-black border-b border-black pb-1 focus:outline-none w-full sm:w-48 placeholder-gray-400"
              />
              <button
                type="submit"
                className="border-b border-black pb-1 text-xs font-bold text-black uppercase hover:text-[#B88E2F] hover:border-[#B88E2F]"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

      
        <div className="pt-8 border-t border-gray-100 text-left">
          <p className="text-sm font-medium text-black">
            2026 funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;