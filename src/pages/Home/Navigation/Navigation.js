import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import houseLogo from '../../../image/topper house.png';
import userLogo from '../../../image/user.png';
import telephoneLogo from '../../../image/telephone.png';
import doorLogo from '../../../image/Vector.png';
import saleemLogo from '../../../image/salem logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       <> <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
                <Navbar.Brand
                    style={{
                        fontSize: '16px',
                        color: '#a2a2a2',
                        fontFamily: 'poppins',
                        fontStyle: 'normal',
                        lineHeight: '24px',
                        width: '73px',
                        height: '23px',
                        fontWeight:'400'
            }}> <img
              style={{
                width: '23.33px',
                height: '21px',
                marginTop:'-4px',
                marginLeft: '13.33%'}} src={houseLogo} alt="" /> Business</Navbar.Brand>
               <Nav.Link
              style={{
                fontSize: '16px',
                marginTop:'13px',
                marginLeft:'22px',
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
            marginTop:'20px'
            }}> <img src={telephoneLogo} alt="" /> 1-800-356-6522</Nav.Link>
            <Link to='/login' eventKey={2}
                            style={{
                                color: '#a2a2a2',
                                fontFamily: 'poppins',
                                textDecoration: 'none',
                                marginTop: '26px',
                                marginLeft: '22px',
                                marginRight:'8px'
                              
                            }}>
                            <img src={doorLogo} alt="" /> Sign up/Login
                  </Link>
                 </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        <hr
          style={{
            width: '82.5%',
            margin: 'auto'
          }} />
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
  <Container>
            <Navbar.Brand> <img
              style={{
                width: '115px',
                height: '42px',
                marginTop: '31px',
                marginLeft: '10px'
              }} src={saleemLogo} alt="" /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{margin:'auto'}}>
                <Link to='/home'
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    textDecoration: 'none',
                    marginTop: '32px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>Home</Link>
                <Nav.Link
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    marginTop: '23px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>Loan</Nav.Link>
                <Nav.Link
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    marginTop: '23px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>About us</Nav.Link>
                <Nav.Link
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    marginTop: '23px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>Services</Nav.Link>
                <Nav.Link
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    marginTop: '23px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>Pages</Nav.Link>
                <Nav.Link
                  style={{
                    color: '#9c9c9c',
                    fontFamily: 'poppins',
                    marginTop: '23px',
                    marginRight: '33px',
                    fontSize:'16px'
                  }}>Blog</Nav.Link>
    </Nav>
    <Nav>
         <button
              style={{
                 fontFamily: 'poppins',
                 backgroundColor: '#1521cf',
                 color: 'white',
                 borderRadius: '64px',
                 width: '185px',
                 height: '48.37px',
                 border: '1px solid #1521cf',
                 marginTop:'20px'
                 }}>Apply now</button>
          </Nav>
        </Navbar.Collapse>
       </Container>
      </Navbar>
    </>   
    );
};

export default Navigation;