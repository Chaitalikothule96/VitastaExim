import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const products = [
  { title: "Jaggery Powder", image: "/images/jaggery.jfif" },
  { title: "Sugarcane Molasses", image: "/images/molasses.jfif" },
  { title: "Arhar Dal", image: "/products/arhar.jfif" },
  { title: "Kabuli Chana", image: "/images/pulses.jfif" },
  { title: "Sesame Oil", image: "/products/sesameoil.jfif" },
  { title: "Organic Oils", image: "/images/organic.avif" },
  { title: "Peanut Cake", image: "/products/peanutcake.jfif" },
  { title: "Soyabean Cake", image: "/products/soyabean.jfif" },
];

const ProductPreview = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center" style={{ color: "#1d8ae9" }}>Our Products</h1>
      <Row>
        {products.slice(0, 8).map((product, index) => (
          <Col md={3} key={index} className="mb-4">
            <div className="product-cardp" onClick={() => navigate("/products")}>
              <img src={product.image} alt={product.title} className="product-imagep" />
              <div className="overlayp">
                <div className="overlay-textp">{product.title}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Button className="hero-buttons" onClick={() => navigate("/products")}>
          View More
        </Button>
      </div>
    </Container>
  );
};

export default ProductPreview;
