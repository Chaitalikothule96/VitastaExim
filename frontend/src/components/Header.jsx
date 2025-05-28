import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#1d8ae9",
        color: "#fff",
        padding: "8px 0",
        fontSize: "0.9rem",
        zIndex: 1041,
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="text-md-start text-center mb-md-0">
            <a
              href="mailto:info@vitastaexim.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FaEnvelope className="me-2" />
              info@vitastaexim.com
            </a>

            <span style={{ margin: "0 12px", fontWeight: "bold" }}>|</span>

            <a
              href="tel:+919420376803"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <FaPhoneAlt className="me-2" />
              +91 9420376803
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
