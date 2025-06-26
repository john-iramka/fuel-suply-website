import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/banner-1-2.jpg')" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          Keeping Aviation Businesses Flying.<br />Today And Tomorrow.
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl"
        >
          <div className="w-full h-full flex items-center justify-center">
            <button 
              className="group relative"
              aria-label="Play video"
            >
              <div className="w-24 h-24 bg-yellow-500 bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                <FaPlay className="text-blue-900 text-2xl ml-1" />
              </div>
              <div className="absolute inset-0 border-2 border-yellow-500 border-opacity-50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;