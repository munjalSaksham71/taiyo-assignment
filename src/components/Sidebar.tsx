import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button onClick={toggleSidebar} className="text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 md:relative md:translate-x-0 bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-64 md:h-screen`}
      >
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <nav className="mt-10">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-600" onClick={toggleSidebar}>
              <Link to="/">Contacts</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600" onClick={toggleSidebar}>
              <Link to="/charts">Charts and maps</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
