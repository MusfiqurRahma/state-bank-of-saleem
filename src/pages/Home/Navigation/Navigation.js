import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import houseLogo from '../../../image/topper house.png';
import userLogo from '../../../image/user.png';
import telephoneLogo from '../../../image/telephone.png';
import doorLogo from '../../../image/Vector.png';
import saleemLogo from '../../../image/salem logo.png';

const Navigation = () => {
    return (
       <> <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
                <Navbar.Brand
                    style={{
                        fontSize: '16px',
                        color: '#a2a2a2',
                        fontFamily: 'poppins'
                    }}> <img src={houseLogo} alt="" /> Business</Navbar.Brand>
               <Nav.Link
              style={{
                fontSize: '16px',
                color: '#a2a2a2',
                fontFamily:'poppins'
                }}> <img src={userLogo} alt="" /> Personal</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* ########### */}
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
                            <img src={doorLogo} alt="" /> Sign up/Login
                  </Nav.Link>
                 </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <hr style={{ width: '81.5%', margin: 'auto' }} />
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <img src={saleemLogo} alt="" /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{margin:'auto'}}>
      <Nav.Link href="#features" style={{color:'#9c9c9c',fontFamily:'poppins'}}>Home</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#9c9c9c',fontFamily:'poppins'}}>Loan</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#9c9c9c',fontFamily:'poppins'}}>About us</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#9c9c9c',fontFamily:'poppins'}}>Services</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#9c9c9c',fontFamily:'poppins'}}>Pages</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'#9c9c9c',fontFamily:'poppins'}}>Blog</Nav.Link>
    </Nav>
    <Nav>
         <button
              style={{
                 fontFamily: 'poppins',
                 backgroundColor: '#1521cf',
                 color: 'white', borderRadius: '64px', width: '185px',
                 height: '48.37px',
                 border: '1px solid #1521cf',
                 }}>Apply Now</button>
          </Nav>
        </Navbar.Collapse>
       </Container>
      </Navbar>
    </>   
    );
};

export default Navigation;