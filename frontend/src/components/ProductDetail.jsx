import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Container, Table, Row, Col, Image } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const tableRowStyle = (index) => ({
    border: "none",
    backgroundColor: index % 2 === 0 ? "#e0f2ff" : "#ffffff",
  });

  const cellStyle = (index) => ({
    border: "none",
    backgroundColor: index % 2 === 0 ? "#e0f2ff" : "#ffffff",
    color: "#333",
  });

  return (
    <Container className="my-5 py-5">
      <Row className="my-5 align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <div className="text-center">
            <Image
              src={product.image}
              alt={product.name}
              fluid
              rounded
             style={{
              width: "100%", 
              maxWidth: "400px", 
              height: "300px", 
              objectFit: "cover",
              margin: "0 auto", 
              display: "block", 
            }}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h2 style={{ color: "#1d8ae9" }}>{product.name}</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
            {product.description}
          </p>

          {/* Benefits Section */}
          {product.benefits && product.benefits.length > 0 && (
            <>
              <h4 style={{ color: "#1d8ae9", marginTop: "1.5rem" }}>Benefits :</h4>
              <ul style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </Col>

        {/* Specifications Table */}
        <h2 className="my-4" style={{ color: "#1d8ae9" }}>
          Specifications:
        </h2>
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <Table hover responsive style={{ border: "none" }}>
            <tbody>
              {Object.entries(product.specifications || {}).map(
                ([key, value], index) => (
                  <tr key={key} style={tableRowStyle(index)}>
                    <th
                      style={{
                        ...cellStyle(index),
                        fontWeight: 600,
                        width: "40%",
                      }}
                    >
                      {key}
                    </th>
                    <td style={cellStyle(index)}>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>

        {/* Container Capacity Table */}
        <h2 className="my-4" style={{ color: "#1d8ae9" }}>
          Container Capacity:
        </h2>
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <Table hover responsive style={{ border: "none" }}>
            <thead>
              <tr style={{ backgroundColor: "#51abff" }}>
                <th style={{ border: "none", fontWeight: 600 }}>
                  Container Type
                </th>
                <th style={{ border: "none", fontWeight: 600 }}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "20 Feet", quantity: "24 MT" },
                { type: "40 Feet", quantity: "26 MT" },
              ].map((row, index) => (
                <tr key={row.type} style={tableRowStyle(index)}>
                  <td style={cellStyle(index)}>{row.type}</td>
                  <td style={cellStyle(index)}>{row.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default ProductDetail;
