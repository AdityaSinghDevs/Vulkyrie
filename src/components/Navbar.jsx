import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{padding:"2%", paddingLeft:"2%", paddingRight:"2%"}}className="w-full p-4 absolute top-0 z-50">
      <div className="rounded-full flex items-center justify-between">
        <div>
          <button 
            to="/" 
            style={{height:"200%"}}
            className="px-6 py-2 rounded-full bg-red-600 text-black font-medium"
          >
            <p1 className='text-5xl'>Home</p1>
          </button>
        </div>
        
        <div className="flex gap-1">
          <Link 
            to="/contact" 
            className="px-6 py-2 rounded-full btn-round-contact bg-gray-500 text-black font-medium"
          >
            <p className='text-5xl'>Contact us</p>
          </Link>
          <Link 
            to="/dashboard" 
            className="px-6 py-2 bg-gray-500 text-black font-medium"
          >
            <p className='text-5xl'>Dashboards</p>
          </Link>
          <Link 
            to="/hotspots" 
            className="px-6 py-2 rounded-full btn-round-hotspot bg-gray-500 text-black font-medium"
          >
            <p className='text-5xl'>Hotspots</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;