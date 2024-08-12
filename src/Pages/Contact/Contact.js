import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";

const Contact = () => {
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    color: "#000000", // Black font color
  };

  const cardStyle = {
    width: "100%",
    marginTop: "2rem",
  };

  const cardHeaderStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  };

  const labelStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div style={containerStyle}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Container className="text-center auth-cont">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card style={cardStyle}>
              <Form
                action="contact"
                name="contact"
                method="post"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <CardHeader className="text-center auth-card-header" style={cardHeaderStyle}>
                  Contact Form
                </CardHeader>
                <CardBody>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="name" sm={3} style={labelStyle}>
                      Your Name
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="email" sm={3} style={labelStyle}>
                      Your Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="message" sm={3} style={labelStyle}>
                      Message
                    </Label>
                    <Col sm={9}>
                      <textarea
                        name="message"
                        rows="10"
                        style={{ padding: '10px', width: '100%', fontFamily: "'Poppins', sans-serif" }}
                        placeholder="Type your message"
                        required
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" className="auth-btn" style={buttonStyle}>
                    Send Message
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
