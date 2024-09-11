// src/layouts/MainLayout.tsx

import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
