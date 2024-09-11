import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';
import ContactPage from './pages/ContactPage';
import ChartAndMap from './pages/ChartAndMap';


const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/charts" element={<ChartAndMap />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
