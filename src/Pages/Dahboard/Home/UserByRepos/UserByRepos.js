import React, { useState, useContext } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
import cell from '../../../../img/cell.svg';

const UserByRepos = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=40&page=${page}`
      );
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  const handleCopy = () => {
    toast("Username copied! Paste it to see the details...");
  }

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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the repos language"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  borderRadius: '4px',
                }}
              />
              <Input
                type="number"
                min="1"
                value={page}
                onChange={(e) => setPage(e.target.value)}
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
                  Fetch Repos
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
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
                        rel="noopener noreferrer"
                        href={element.owner.html_url}
                      >
                        <img
                          width="200"
                          height="200"
                          className="img-thumbnail"
                          src={element.owner.avatar_url}
                          alt={element.owner.login}
                          style={{ borderRadius: '50%' }}
                        />
                      </a>
                      <CardBody style={{ marginLeft: '20px' }}>
                        <div style={{ fontFamily: 'Poppins, sans-serif', color: '#17a2b8' }}>
                          <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
                            {element.owner.login}
                          </p>
                          <p style={{ fontSize: '16px', marginBottom: '5px' }}>
                            {element.name}
                          </p>
                          <p style={{ fontSize: '14px', marginBottom: '5px' }}>
                            Forks: {element.forks}
                          </p>
                          <p style={{ fontSize: '14px', marginBottom: '5px' }}>
                            Open issues: {element.open_issues}
                          </p>
                          <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                            Watchers: {element.watchers}
                          </p>
                        </div>
                        <Link to="home" style={{ textDecoration: 'none' }}>
                          <CopyToClipboard text={element.owner.login}>
                            <Button
                              onClick={handleCopy}
                              style={{
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
                                marginTop: '10px',
                              }}
                            >
                              User Details
                            </Button>
                          </CopyToClipboard>
                        </Link>
                      </CardBody>
                    </li>
                  </div>
                ))
              ) : (
                <p
                  style={{ marginTop: "100px", paddingLeft: "100px" }}
                  className="text-white text-center"
                >
                  <img src={cell} height="400vh" alt="No data" />
                </p>
              )}
            </div>
          </div>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default UserByRepos;
