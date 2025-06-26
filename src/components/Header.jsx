import React, { useState, useContext } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { user, logout } = useContext(AuthContext);

  const navItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'About us', 
      submenu: [
        { name: 'The Company', link: '/about-us' },
        { name: 'About Our Team', link: '/our-team' },
        { name: 'Why Choose Avion Energy', link: '/why-choose-us' }
      ]
    },
    { 
      name: 'Aviation Fuel', 
      submenu: [
        { name: 'Jet A1 & Avgas Aviation Fuel Supplies', link: '/avgas-and-jet-aviation-fuel-supplies' },
        { name: 'Into the Airport Plane Support', link: '/into-plane-airport-aviation-fuel-services' },
        { name: 'Defense & Military Aviation Fuel Supplies', link: '/defense-and-military-aviation-fuel-supplies' },
        { name: 'Remote Areas Aviation Fuel Supplies', link: '/remote-areas-aviation-fuel-supplies' },
        { name: 'Maintenance, Operations & FBO', link: '/maintenance-operations-and-fbo' },
        { name: 'Aviation Oils & Lubricants', link: '/aviation-oils-and-lubricants' }
      ]
    },
    { name: 'Fueling Locations', link: '/aviation-fueling-locations-in-kenya' },
    { name: 'Mission & Vision', link: '/our-mission-and-vision' },
    { name: 'Contact us', link: '/contact' }
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="w-40">
              <Link to="/">
                <img 
                  src="/images/logo-1-2.png" 
                  alt="Avion Energy" 
                  className="w-full" 
                />
              </Link>
            </div>
            
            <nav className="hidden lg:block">
              <ul className="flex space-x-4 items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.submenu ? (
                      <>
                        <button 
                          onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                          className="flex items-center text-blue-900 hover:text-blue-700 px-3 py-2"
                        >
                          {item.name}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <ul className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link 
                                to={subItem.link}
                                className="block px-4 py-2 text-blue-900 hover:bg-blue-50"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link 
                        to={item.link}
                        className="text-blue-900 hover:text-blue-700 px-3 py-2 block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                
                {/* Auth buttons */}
                {user ? (
                  <>
                    <li>
                      <Link 
                        to="/dashboard"
                        className="text-blue-900 hover:text-blue-700 px-3 py-2 block"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md ml-2"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link 
                        to="/login"
                        className="text-blue-900 hover:text-blue-700 px-3 py-2 block"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/register"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md ml-2"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            
            <div className="hidden lg:flex space-x-4 ml-6">
              <a href="#" className="text-blue-900 hover:text-blue-700">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            
            <button 
              className="lg:hidden text-blue-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {isOpen && (
            <nav className="lg:hidden mt-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.submenu ? (
                      <>
                        <button 
                          onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                          className="flex items-center justify-between w-full text-blue-900 hover:text-blue-700 px-3 py-2 bg-gray-50 rounded"
                        >
                          {item.name}
                          <FaChevronDown className={`transition-transform ${openSubmenu === index ? 'transform rotate-180' : ''}`} />
                        </button>
                        {openSubmenu === index && (
                          <ul className="pl-4 mt-2 space-y-1">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  to={subItem.link}
                                  className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link 
                        to={item.link}
                        className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                
                {/* Mobile auth buttons */}
                <div className="pt-4 border-t border-gray-200">
                  {user ? (
                    <>
                      <li className="mb-2">
                        <Link 
                          to="/dashboard"
                          className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="w-full text-left px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="mb-2">
                        <Link 
                          to="/login"
                          className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/register"
                          className="block px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                        >
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                </div>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;