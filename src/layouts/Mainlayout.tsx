// src/layouts/MainLayout.tsx

import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
