import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5 pt-5">
      <h1 className="mt-4 text-center" style={{ color: "#1d8ae9" }}>Products</h1>
      <p className="text-center mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6"}}>
        <strong>Vitasta Exim</strong> is the master of the art of organic farming. With us, you will find high-grade organic products that are loaded with nutrients and vitamins. Our products will help you cut down on your health issues and lead a healthier life. We have a variety of organic products that you can choose from. Browse through our list of au naturale products and choose the one that best suits your requirements.
      </p>

      <Row className="justify-content-center my-4">
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <Card
              className="product-card shadow-sm"
              onClick={() => navigate(`/products/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-image-wrapper">
                <Card.Img src={product.image} alt={product.name} className="product-img" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
              <Card.Body className="product-info text-center position-relative">
                <Card.Title className="product-name">{product.name}</Card.Title>
                <div className="name-overlay">
                  <Button variant="primary">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
