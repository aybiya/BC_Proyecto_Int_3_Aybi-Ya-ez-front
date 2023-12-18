import React, { useState, useEffect } from 'react';
import { CartProvider } from "./context/CartContext";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import CartModal from './Components/CartModal';
import Home from './Pages/Home';
import ProductRegistration from './Pages/ProductRegistration';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
      <CartProvider>
        <Header/>
        <CartModal/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<ProductRegistration />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  );
};

export default App;

