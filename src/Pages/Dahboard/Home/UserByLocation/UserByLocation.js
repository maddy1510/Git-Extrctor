import React, { useState, useContext } from "react";
import Axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
import cell from '../../../../img/cell.svg';

const UserByLocation = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("");

  const fetchDetails = async () => {
    const url = `https://api.github.com/search/users?q=location:${query}+language:${language}&per_page=40&page=${query1}`;

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

  const handleCopy = () => {
    toast("Username copied! Paste it to see the details...");
  };

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Row className="mt-3">
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the country name"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  borderRadius: '4px',
                }}
              />
              <Input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Enter language"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  borderRadius: '4px',
                }}
              />
              <Input
                type="number"
                min="1"
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Enter the page no."
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  borderRadius: '4px',
                }}
              />
              <InputGroupAddon addonType="append">
                <Button
                  onClick={fetchDetails}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                >
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', marginTop: '20px' }}>
            {user ? (
              user.items.map((element, index) => (
                <div className="text-center mt-3 mb-4" key={index}>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "20px",
                      listStyle: "none",
                    }}
                  >
                    <a
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      href={element.html_url}
                      rel="noopener noreferrer"
                    >
                      <img
                        width="200"
                        height="200"
                        className="img-thumbnail"
                        src={element.avatar_url}
                        alt={element.login}
                        style={{ borderRadius: '50%' }}
                      />
                      <CardBody>
                        <div style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '18px',
                          fontWeight: '600',
                          marginTop: '10px'
                        }}>
                          {element.login}
                        </div>
                        <Link to="home" style={{ textDecoration: 'none' }}>
                          <CopyToClipboard text={element.login}>
                            <Button
                              onClick={handleCopy}
                              style={{
                                marginTop: '10px',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#007bff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '5px 15px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                              }}
                            >
                              User Details
                            </Button>
                          </CopyToClipboard>
                        </Link>
                      </CardBody>
                    </a>
                  </li>
                </div>
              ))
            ) : (
              <p
                style={{ marginTop: "100px", paddingLeft: "100px" }}
                className="text-white text-center pt-20"
              >
                <img src={cell} height="400vh" alt="No data" />
              </p>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserByLocation;
