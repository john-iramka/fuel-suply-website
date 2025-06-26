import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What fuels do you deliver?",
      answer: "We deliver both Avgas and Jet A1 fuels."
    },
    {
      question: "Where do you deliver?",
      answer: "We deliver fuel to Wilson Airport, Jomo Kenyatta International Airport and all other major airports around the country."
    },
    {
      question: "How much fuel can you deliver?",
      answer: "We can deliver from 5,000 litres to 35,000 litres in a single delivery."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "Cheque, cash, credit, EFT."
    },
    {
      question: "What are your hours of operation?",
      answer: "Our order desk is open for your convenience from 8:00 am to 5:00 pm Monday to Friday and we can make deliveries seven (7) days per week."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-blue-900 text-lg font-medium mb-2">our faqs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Frequently Asked Questions</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-blue-900 hover:text-yellow-600 focus:outline-none transition-colors duration-200 py-2"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="ml-4 text-yellow-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <div
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
              >
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;