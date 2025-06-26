import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    image: "/images/banner-1-1.jpg",
    title: "Aviation Fuel Supply in Nairobi Kenya",
    subtitle: "Thinking of Fueling An Aircraft?",
    cta: "Discover more"
  },
  {
    image: "/images/banner-1-2.jpg",
    title: "Avgas & JetA1 Aviation Fuel",
    subtitle: "Top Aviation Fuel Services In Kenya",
    cta: "Learn about our fuel"
  },
  {
    image: "/images/banner-1-3.jpg",
    title: "We Focus On Safety, Quality, Client Service",
    subtitle: "Always Be Sure And Be Safe",
    cta: "Our safety standards"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [loading, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero slider">
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-8 right-8 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
      >
        {isPaused ? <FaPlay className="w-5 h-5" /> : <FaPause className="w-5 h-5" />}
      </button>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 1,
                  ease: "easeOut"
                }
              }}
              exit={{ opacity: 0 }}
            >
              <p className="block mb-4 text-xl md:text-2xl text-white font-light">
                {slides[currentSlide].subtitle}
              </p>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 0.5
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#services" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg uppercase tracking-wider inline-block transition-colors"
                  aria-label={slides[currentSlide].cta}
                >
                  {slides[currentSlide].cta}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-yellow-500 w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;