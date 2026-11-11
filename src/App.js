import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Drinks from "./pages/Drinks";
import Sweets from "./pages/Sweets";
import Contact from "./pages/Contact";
import Cart, { CartProvider } from "./components/CartProvider";
import Footer from "./components/Footer";
import "./App.css";

export const App = () => {
  useEffect(() => {
    document.title = "Sweet & Sip";
  }, []);
  return (
    
      <BrowserRouter>
        <CartProvider>
          <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sweets" element={<Sweets />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
  
  );
};

export default App;