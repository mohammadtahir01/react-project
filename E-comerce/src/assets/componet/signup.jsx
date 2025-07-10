
// Login.js:
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Here you would typically send a request to your server
  };

  return (
    <Container style={{padding:"0 0 1rem 0"}}>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">SighUp</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}/>
                <a href=""><p style={{display:"flex",justifyContent:"end",fontSize:"14px"}}
                onClick={()=>navigate("/login")}>Login here?</p></a>
            </Form.Group>


             <div style={{display:"flex",justifyContent:"center"}}>
            <Button variant="primary" type="submit" className="w-20">
              SignUp
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Sign;