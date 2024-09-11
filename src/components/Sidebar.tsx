// src/components/Sidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed">
      <div className="p-4 text-2xl font-bold">Dashboard</div>
      <nav className="mt-10">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-600">
            <Link to="/">Contacts</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-600">
            <Link to="/charts">Charts and maps</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
