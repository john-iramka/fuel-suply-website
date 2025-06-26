import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View */}
        <div className="md:hidden w-full text-center overflow-x-auto scrollbar-hide">
          <div className="inline-flex items-center min-w-max">
            <span className="whitespace-nowrap px-1">
              WE'RE ALWAYS READY TO GET YOU TO THE SKIES
            </span>
            <span className="px-1">|</span>
            <a 
              href="#quote" 
              className="whitespace-nowrap underline font-medium px-1"
              aria-label="Get a free quote"
            >
              GET A FREE QUOTE
            </a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <span>WE'RE ALWAYS READY TO GET YOU TO THE SKIES | </span>
            <a 
              href="#quote" 
              className="underline font-medium ml-1"
              aria-label="Get a free quote"
            >
              GET A FREE QUOTE
            </a>
          </div>
          
          <div className="flex space-x-6">
            <div className="flex items-center">
              <FaPhone className="mr-2" aria-hidden="true" />
              <span>(+254) 728 953 057</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" aria-hidden="true" />
              <span>Mon to Fri 9:00am to 6:00pm</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" aria-hidden="true" />
              <span>East African Air Charters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;