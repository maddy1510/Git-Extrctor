import React, { useState, useContext } from 'react';
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
    CardHeader
} from "reactstrap";
import firebase from "firebase/app";
import { UserContext } from "../../../context/UserContext";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from '../../../layout/Footer/Footer';

// Global styles with Poppins font
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa; /* Light gray background for better contrast */
  }
`;

const Signin = () => {
    const success = () => {
        toast(<div>Welcome back! Login successful...</div>);
    };

    const context = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                context.setUser({ email: res.user.email, uid: res.user.uid });
                success();
            })
            .catch(error => {
                console.log(error);
                toast(error.message, { type: "error" });
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleSignIn();
    };

    if (context.user?.uid) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <style>{globalStyles}</style>
            <Container style={{ textAlign: 'center', marginTop: "60px", marginBottom: '100px' }}>
                <Row className="justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Card style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                            <CardHeader style={{ fontSize: '28px', fontWeight: '600', fontFamily: 'Poppins, cursive', color: 'black', borderBottom: '2px solid #dee2e6', marginBottom: '20px' }}>Sign In</CardHeader>
                            <Form onSubmit={handleSubmit}>
                                <CardBody>
                                    <FormGroup row className="mb-4">
                                        <Label for='email' sm={3} style={{ fontFamily: 'Poppins, cursive', fontSize: '16px', color: 'black' }}>
                                            Email
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='Provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: 'black', borderRadius: '5px', borderColor: '#ced4da', padding: '10px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mb-4">
                                        <Label for='password' sm={3} style={{ fontFamily: 'Poppins, cursive', fontSize: '16px', color: 'black' }}>
                                            Password
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='Your password here'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: 'black', borderRadius: '5px', borderColor: '#ced4da', padding: '10px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter style={{ padding: '10px 20px' }}>
                                    <Button
                                        type='submit'
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            backgroundColor: '#007bff',
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '5px',
                                            padding: '12px 20px',
                                            transition: 'background-color 0.3s, transform 0.2s',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                        }}
                                        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
                                        onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
                                        onFocus={e => e.target.style.transform = 'scale(1.02)'}
                                        onBlur={e => e.target.style.transform = 'scale(1)'}
                                    >
                                        Sign In
                                    </Button>
                                </CardFooter>
                            </Form>
                            <div style={{ textAlign: 'center', padding: '15px', color: 'black' }}>
                                <Link to="/forgot-password" style={{ color: '#007bff', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>Forgot Password?</Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div style={{ textAlign: 'center', marginTop: '20px', color: 'black', fontFamily: 'Poppins, sans-serif' }}>
                    Need an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</Link>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Signin;
