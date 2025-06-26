import React from 'react';

const TrustedClients = () => {
  const clients = [
    { id: 1, image: "/images/brand-1-1.jpg", alt: "Client 1" },
    { id: 2, image: "/images/brand-1-2.jpg", alt: "Client 2" },
    { id: 3, image: "/images/brand-1-3.jpg", alt: "Client 3" },
    { id: 4, image: "/images/brand-1-4.jpg", alt: "Client 4" },
    { id: 5, image: "/images/brand-1-5.jpg", alt: "Client 5" },
    { id: 6, image: "/images/brand-1-6.jpg", alt: "Client 6" },
    { id: 7, image: "/images/brand-1-7.jpg", alt: "Client 7" }
  ];

  // Double the array for seamless looping
  const sliderClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 mb-12 font-medium text-lg">
          TRUSTED BY INDUSTRY LEADERS
        </h3>
        
        <div className="relative w-full h-24"> {/* Fixed height container */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-marquee items-center space-x-12">
              {sliderClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="flex-shrink-0"
                >
                  <img 
                    src={client.image} 
                    alt={client.alt}
                    className="h-12 w-auto max-w-none object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: 300%;
        }
      `}</style>
    </section>
  );
};

export default TrustedClients;