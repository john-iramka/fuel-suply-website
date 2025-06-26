import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <img 
                src="/images/about-1-1.jpg" 
                alt="Avion Energy team discussing operations" 
                className="rounded-lg shadow-md w-full h-auto"
                loading="lazy"
              />
              <img 
                src="/images/about-1-2.jpg" 
                alt="Avion Energy fuel truck in operation" 
                className="rounded-lg shadow-md w-full h-auto mt-8"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold">10+ Years</span> of Experience
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="mb-6">
              <span className="inline-block text-blue-900 text-lg font-medium mb-2">Welcome to Avion Energy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Aviation Fuels & Refuelling. Ground Support And Into Plane Airport Services
              </h2>
              <p className="text-gray-700 mb-4">
                Avion Energy Ltd is a privately owned company with more than a decade's experience in the supply, fueling and refueling of Jet A1 and Avgas.
              </p>
              <p className="text-gray-700 mb-6">
                We are large enough to compete, yet small enough to be dynamic and flexible. Why not let us fuel your business? Our in-depth knowledge of the fuel industry enables us to handle forecasting, reporting, replenishment, inventory control, logistics and pricing seamlessly.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
              <p className="font-bold text-blue-900">
                We pride ourselves on competitive pricing and innovative value-added services in the aviation fuel marketplace.
              </p>
            </div>
            
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPhone className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Call us to Get a Free Estimate</p>
                <a 
                  href="tel:+254728953057" 
                  className="text-xl font-bold text-blue-900 hover:text-yellow-600 transition-colors duration-200"
                >
                  (+254) 728 953 057
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;