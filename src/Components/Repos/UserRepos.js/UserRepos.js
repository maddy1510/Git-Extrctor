import React, { useState, useContext } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Row,
  Container,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";
import { UserContext } from "../../../context/UserContext";
import { Redirect } from "react-router-dom";
import cell from '../../../img/cell.svg';

const UserRepos = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/users/${query}/repos?per_page=40&page=${page}`
      );
      setRepos(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Container style={{ background: '#f5f5f5', marginTop: "50px", marginBottom: '100px' }}>
        <Row className="mt-3">
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please provide the username"
                style={{
                  borderRadius: '4px',
                  borderColor: '#ced4da',
                  padding: '10px',
                  fontSize: '16px'
                }}
              />

              <Input
                type="number"
                min="1"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no."
                style={{
                  borderRadius: '4px',
                  borderColor: '#ced4da',
                  padding: '10px',
                  fontSize: '16px'
                }}
              />

              <InputGroupAddon addonType="append">
                <Button
                  onClick={fetchRepos}
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
          <Col md='10' style={{ marginBottom: "50px", marginTop: "20px" }}>
            {repos.length > 0 ? (
              <ListGroup>
                {repos.map((repo) => (
                  <ListGroupItem
                    key={repo.id}
                    style={{
                      border: '1px solid #dee2e6',
                      borderRadius: '4px',
                      marginBottom: '10px',
                      padding: '15px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <a
                      style={{ textDecoration: 'none', color: '#007bff' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={repo.html_url}
                    >
                      <div
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '18px',
                          fontWeight: '600',
                          color: '#343a40',
                          marginBottom: '10px'
                        }}
                      >
                        {repo.name}
                      </div>
                    </a>

                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      {repo.language}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      {repo.description}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Size: {repo.size}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Open issues: {repo.open_issues}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Default branch: {repo.default_branch}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Created date: {new Date(repo.created_at).toLocaleDateString()}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Updated date: {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '5px'
                      }}
                    >
                      Pushed date: {new Date(repo.pushed_at).toLocaleDateString()}
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <p
                style={{ marginTop: "100px", paddingLeft: "100px", textAlign: 'center' }}
              >
                <img src={cell} height="400" alt="No data" />
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRepos;
