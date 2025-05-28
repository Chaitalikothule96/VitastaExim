import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section my-5">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">
            <span>Delivering Nature’s Best</span>
            <span>From</span>
            <span>Indian Farms to Global Markets</span>
          </h2>
          <p className="hero-subtitle">
            Premium Jaggery Powder, Molasses, Pulses & Organic Edible Oils.
          
            Ethically Sourced, Expertly Processed, Reliably Delivered.
          </p>

          <div className='text-center'>
            <Button className="hero-buttons" onClick={() => navigate("/products")}>
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
