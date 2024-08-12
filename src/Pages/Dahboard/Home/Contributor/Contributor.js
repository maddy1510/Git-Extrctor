import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  CardBody,
} from "reactstrap";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import cell from '../../../../img/cell.svg'

const Contributor = () => {
  const context = useContext(UserContext);

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fetchDetails = async () => {
    const url = `https://api.github.com/repos/${query1}/${query2}/stats/contributors?since=${date}&to=${toDate}`;

    try {
      const { data } = await Axios.get(url);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Row className="mt-3">
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the username"
              />
              <Input
                type="text"
                value={query2}
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the repositories name"
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please select the date"
              />
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="Please select the date"
              />
              <InputGroupAddon addonType="append">
                <Button
                  onClick={fetchDetails}
                  style={{
                    fontFamily: 'Poppins, sans-serif', /* Font style */
                    fontSize: '16px',                  /* Font size */
                    fontWeight: '600',                 /* Font weight */
                    color: '#ffffff',                 /* Text color */
                    backgroundColor: '#007bff',        /* Background color */
                    border: 'none',                    /* Remove border */
                    borderRadius: '4px',              /* Border radius */
                    padding: '10px 20px',             /* Padding */
                    cursor: 'pointer',                /* Pointer cursor */
                    transition: 'background-color 0.3s' /* Smooth transition */
                  }}
                >
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
            <div style={{ display: "flex" }}>
              {user ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                  {user.map((element, index) => (
                    <div className="text-center mt-3 mb-4" key={index}>
                      <li style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "20px",
                        listStyleType: "none"  /* Remove default list styling */
                      }}>
                        <a
                          style={{ marginTop: "10px", textDecoration: 'none' }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={element.author.html_url}
                        >
                          <img
                            width="200"
                            height="200"
                            className="img-thumbnail"
                            src={element.author.avatar_url}
                            alt={element.author.login}
                            style={{
                              borderRadius: '4px',  /* Border radius for image */
                              marginRight: '10px'   /* Space between image and text */
                            }}
                          />
                          <CardBody>
                            <div className="auth-card-header" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                              {element.author.login}
                            </div>
                            <div className="auth-label" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {element.author.type}
                            </div>
                          </CardBody>
                        </a>
                      </li>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  style={{ marginTop: "100px", paddingLeft: "100px" }}
                  className="text-white text-center pt-20"
                >
                  <img src={cell} height="400vh" alt="No data" />
                </p>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contributor;
