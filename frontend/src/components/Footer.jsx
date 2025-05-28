import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#070001", color: "#fff", padding: "50px 0" }}>
      <Container>
        <Row className="mb-5">
          {/* Company Info + Social Links */}
          <Col md={6} sm={12} className="text-md-start text-center">
            <h3 style={{ fontWeight: "700", marginBottom: "20px" }}>Vitasta Exim</h3>
            <p style={{ lineHeight: "1.8" }}>
              <strong>Address:</strong><br />
              21/14 Gajanan Mandir Road, Mondha Rd, <br />
              Mondha, Majalgoan,<br />
              Maharashtra 431131
            </p>
            <p style={{ fontSize: "1rem" }}>
              <strong>Email:</strong> info@vitastaexim.com
            </p>

            <h5 style={{ marginTop: "30px", marginBottom: "15px", fontWeight: "600" }}>Connect with us</h5>
            <div style={iconContainerStyle}>
              <a href="https://www.instagram.com/vitasta_exim?igsh=MTBocHF1YXZka2lvdg==" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/vitasta-exim-7894b71b8/" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaLinkedin /></a>
              <a href="https://www.facebook.com/share/1AKyydzQQX/" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaFacebookF /></a>
              <a href="https://wa.me/919420376803" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaWhatsapp /></a>
              <a href="mailto:tejas@vitastaexim.com" className="footer-icon"><FaEnvelope /></a>
            </div>
          </Col>

          {/* Google Map */}
          <Col md={6} sm={12} className="mt-4 mt-md-0">
            <h5 style={{ fontWeight: "600", marginBottom: "15px" }}>Location</h5>
            <div style={mapContainerStyle}>
              <iframe
                title="Vitasta Exim Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.2385478870296!2d76.20504297489736!3d18.517153282570778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d2ff7d5f1a2d%3A0x89bfa9d0574d27d9!2sMondha%20Rd%2C%20Bhim%20Nagar%2C%20Majalgaon%2C%20Maharashtra%20431131!5e0!3m2!1sen!2sin!4v1715152098470!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <Row>
          <Col className="text-center" style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} <strong>Vitasta Exim</strong>. Developed By <strong>Chaitali</strong>.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Styles
const iconContainerStyle = {
  display: "flex",
  marginTop: "10px",
};

const mapContainerStyle = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 0 10px rgba(255,255,255,0.1)",
};

export default Footer;
