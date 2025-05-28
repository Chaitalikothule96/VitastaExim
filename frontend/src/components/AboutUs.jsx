import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="about" style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
      <Container className="pt-5">
        {/* Heading */}
        <h1 className="text-center my-4" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d8ae9" }}>
          WHO WE ARE
        </h1>

        {/* Image and Introduction */}
        <Row className="align-items-center mb-5">
          <Col md={6} sm={16} className="mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <Image
              src="/aboutus.jfif"
              alt="Vitasta Exim Company"
              fluid
              rounded
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "2px solid #007b33",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col md={6} sm={12}>
            <h2 className="mb-4" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
              Welcome to Vitasta Exim
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              At Vitasta Exim, we are proud exporters of India's finest natural food products — including{" "}
              <strong>jaggery powder</strong>, <strong>jaggery molasses</strong>, <strong>high-quality pulses</strong>,
              and <strong>organic edible oils</strong>. Rooted in India’s agricultural heritage, we bring time-honored
              farming practices together with modern processing and global logistics to serve customers across the world.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col md={6} sm={12}>
            <h3 style={{ fontSize: "1.8rem", color: "#1d8ae9" }}>Our Mission</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              We aim to deliver <strong>pure, chemical-free, and sustainably sourced</strong> food products that
              promote health and well-being — while supporting ethical farming communities in India.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <h3 style={{ fontSize: "1.8rem", color: "#1d8ae9" }}>Your Trusted Export Partner</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              With a strong supply chain and commitment to excellence, Vitasta Exim ensures consistent product quality,
              competitive pricing, and transparent business practices. Whether you're a wholesaler, retailer, or distributor — 
              we’re here to help you grow with quality you can trust.
            </p>
          </Col>
            
          
        </Row>

        {/* Trusted Export Partner Section */}
        <Row>
          <Col>
            <h3 style={{ fontSize: "1.8rem", color: "#1d8ae9" }}>Why Choose Us?</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "1.2rem" }}>
              <li>🌿 <strong>Certified Organic Products</strong></li>
              <li>🌾 <strong>Sourced Directly from Trusted Farmers</strong></li>
              <li>🏭 <strong>Processed & Packed Under Strict Quality Standards</strong></li>
              <li>🚢 <strong>Reliable Global Export & Timely Delivery</strong></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
