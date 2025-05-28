import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";

const certificates = [
  {
    title: "FSSAI Certificate",
    file: "/certificates/FSSAI-cer.pdf",
    image: "/images/fssai.png",
  },

  {
    title: "IEC License",
    file: "/certificates/IEC Certificate.pdf",
    image: "/images/iec.jfif",
  },
  {
    title: "RCMC Certification",
    file: "/certificates/RCMC.pdf",
    image: "/images/rcmc.jfif",
  },
  {
    title: "ShopAct License",
    file: "/certificates/ShopAct.pdf",
    image: "/images/shopact.jfif",
  },
];

const CertificatePage = () => {
  const [show, setShow] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (cert) => {
    setSelectedCertificate(cert);
    setShow(true);
  };

  return (
    <Container className="my-5 pt-5">
      <h1 className="my-4 text-center" style={{ color: "#1d8ae9" }}>Our Certificates</h1>
      <Row>
        {certificates.map((cert, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card
              className="certificate-card shadow-sm"
              onClick={() => handleShow(cert)}
            >
              {cert.image && (
                <div className="card-image-container">
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt={cert.title}
                    className="card-image"
                  />
                  <div className="certificate-overlay d-flex align-items-center justify-content-center">
                    <Card.Title className="text-white text-center m-0">
                      {cert.title}
                    </Card.Title>
                  </div>
                </div>
              )}
            </Card>

          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCertificate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCertificate && (
            <iframe
              src={selectedCertificate.file}
              title={selectedCertificate.title}
              width="100%"
              height="500px"
              style={{ border: "none" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CertificatePage;
