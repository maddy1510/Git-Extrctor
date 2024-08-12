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
} from "reactstrap";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
import UserCard from "../../../Components/UserCard/UserCard";
import { Repos } from "../../../Components/Repos/Repos";
import { Link, Redirect } from "react-router-dom";
import cell from '../../../img/cell.svg';

const Home = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Unable to locate user", { type: "error" });
    }
  };

  const username = () => {
    toast("Username copied");
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Row className="mt-3">
          <Col md="12" lg="6">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please provide the username"
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
                    transition: 'background-color 0.3s'
                  }}
                >
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {user ? (
              <>
                <UserCard user={user} />
                <div className="text-center mt-3">
                  <Link to="repos">
                    <CopyToClipboard text={user.login}>
                      <Button
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
                          marginBottom: '20px'
                        }}
                        onClick={username}
                      >
                        View All Repos
                      </Button>
                    </CopyToClipboard>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center mt-5">
                <img src={cell} height="400" alt="No data" />
              </div>
            )}
          </Col>
          <Col md="12" lg="6">
            {user ? (
              <Repos repos_url={user.repos_url} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
