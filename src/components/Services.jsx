import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Jet A1 & Avgas Aviation Fuel Supplies",
    description: "When it comes to fueling aircraft, both private and commercial airlines alike trust Avion Energy to supply high-quality fuel that meets all international standards and specifications.",
    image: "/images/avgas-and-jet-aviation-fuel-supplies1.jpg",
    link: "/avgas-and-jet-aviation-fuel-supplies"
  },
  {
    id: 2,
    title: "Into the Airport Plane Support",
    description: "Our impeccable safety records, solid relationships with airport authorities and local fire departments, and open communication are the foundation of our into-plane fueling services.",
    image: "/images/into-plane-airport-aviation-fuel-services1.jpg",
    link: "/into-plane-airport-aviation-fuel-services"
  },
  {
    id: 3,
    title: "Defense & Military Aviation Fuel Supplies",
    description: "With an absolute focus on operational effectiveness, Avion Energy develops tailored, integrated solutions to meet Defense and Military aviation fuel requirements across Kenya.",
    image: "/images/defense-and-military-aviation-fuel-supplies1.jpg",
    link: "/defense-and-military-aviation-fuel-supplies"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-blue-900 text-lg font-medium mb-2">Avion Energy Keeps You Airbone</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Fueling And Refueling Your Journey</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  <a href={service.link} className="hover:text-yellow-600 transition-colors duration-200">
                    {service.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-blue-900 hover:text-yellow-600 font-medium transition-colors duration-200"
                >
                  Read More
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;