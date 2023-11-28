import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetsComponent from './components/PetsComponent/PetsComponent';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


// Main App component that sets up the router and defines routes for different pages
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<PetsComponent />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
