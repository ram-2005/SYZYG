import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './screens/MainPage/MainPage';
import { AboutPage } from './Pages/AboutPage';
import { Contactpage } from './Pages/Contact';
import {Products} from './Pages/Product';
import { Services } from './Pages/Service';


export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};
export default App;