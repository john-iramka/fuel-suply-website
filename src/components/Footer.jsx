import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">A professional aviation fuel sales staff assures top-notch, highly personalized customer service and a greater understanding of your FBO business.</p>
            <div>
              <h4 className="font-bold mb-2">Payment Methods</h4>
              <img src="/images/payment.png" alt="Payment Methods" className="w-48" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/our-team" className="hover:text-yellow-400">About Our Team</a></li>
              <li><a href="/why-choose-us" className="hover:text-yellow-400">Why Choose us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/avgas-and-jet-aviation-fuel-supplies" className="hover:text-yellow-400">Jet A1 & Avgas Aviation Fuel Supplies</a></li>
              <li><a href="/into-plane-airport-aviation-fuel-services" className="hover:text-yellow-400">Into the Aiport Plane Support</a></li>
              <li><a href="/defense-and-military-aviation-fuel-supplies" className="hover:text-yellow-400">Defense & Military Aviation Fuel Supplies</a></li>
              <li><a href="/remote-areas-aviation-fuel-supplies" className="hover:text-yellow-400">Remote Areas Aviation Fuel Supplies</a></li>
              <li><a href="/maintenance-operations-and-fbo" className="hover:text-yellow-400">Maintenance, Operations & FBO</a></li>
              <li><a href="/aviation-oils-and-lubricants" className="hover:text-yellow-400">Aviation Oils & Lubricants</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>East African Air Charters <br />Wilson Airport, Nairobi Kenya</span>
              </li>
              <li className="flex items-center">
                <IoMdMail className="w-5 h-5 mr-2" />
                <span>info@avionpetroleum.com</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>(+254) 728 953 057</span>
              </li>
              <li className="mt-4">
                <a 
                  href="https://www.avionpetroleum.com:2096/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-yellow-400"
                >
                  <FaEnvelope className="mr-2" />
                  Webmail Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Avion Energy Ltd. All rights reserved.</p>
            <p className="text-xs mt-1">Site by <a href="https://www.absolutecorporatesolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Absolute Corporate Solutions</a></p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=254728953057" 
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.092 1.521 5.448.005 9.886-4.434 9.893-9.884.002-5.462-4.415-9.89-9.881-9.892-5.452-.003-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;