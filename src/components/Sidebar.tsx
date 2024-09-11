// src/components/Sidebar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 md:relative md:translate-x-0 bg-gray-800 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 md:h-screen`}>
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <nav className="mt-10">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-600">
              <Link to="/" onClick={() => setIsOpen(false)}>Contacts</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600">
              <Link to="/charts" onClick={() => setIsOpen(false)}>Charts and maps</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={toggleSidebar} className="text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenu color='gray' />}
        </button>
      </div>

      {/* Header for mobile view */}
      <div className={`fixed top-0 left-0 w-full md:hidden bg-gray-800 text-white z-50 flex justify-between items-center p-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="text-2xl font-bold">Dashboard</div>
        <button onClick={toggleSidebar} className="text-3xl">
          {isOpen ? <HiX /> : <HiMenu color='gray' />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
