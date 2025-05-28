import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ProductPreview from "./components/ProductPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate"; 
import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductPreview />
              <AboutUs />
           
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
         <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
