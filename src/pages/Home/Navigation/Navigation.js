import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import houseLogo from '../../../image/topper house.png';
import userLogo from '../../../image/user.png';
import telephoneLogo from '../../../image/telephone.png';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
                <Navbar.Brand
                    style={{
                        fontSize: '16px',
                        color: '#a2a2a2',
                        fontFamily: 'poppins'
                    }}> <img src={houseLogo} alt="" /> Business</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link
              style={{
                fontSize: '16px',
                color: '#a2a2a2',
                fontFamily:'poppins'
                }}> <img src={userLogo} alt="" /> Personal</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{
            fontSize: '16px',
            color: '#1521cf',
            fontFamily: 'poppins',
            }}> <img src={telephoneLogo} alt="" /> 1-800-356-6522</Nav.Link>
            <Nav.Link eventKey={2}
                            style={{
                                color: '#a2a2a2',
                                fontFamily: 'poppins'
                            }}>
              Sign up/Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;