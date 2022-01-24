import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import firstImg from '../../../image/gettyimages-1137620220-170667a.jpg';
import secondImg from '../../../image/Top-15-Best-Laptop-Backpacks-for-Women-In-2020.jpg';

const About = () => {
    return (
        <Container>
             <Row style={{marginTop:'250px'}}>
                <Col sx={12} md={6}>
                    <div style={{marginLeft:'150px'}}>
                        <p style={{ backgroundColor: '#1521cf', width: '100px', fontSize: '35px',color:'white',fontFamily:'poppins'}}>100 <span style={{fontSize:'16px'}}><br/>Awards</span></p>
                    </div>
                    <div>
                        <img style={{marginLeft:'250px',marginTop:'-12%'}} src={firstImg} alt="" />
                    </div>
                    <div>
                    <img style={{marginRight:'120px',marginTop:'-50%'}} src={secondImg} alt="" />
                    </div>
                    <div>
                    <p style={{ backgroundColor: '#1521cf', width: '100px', fontSize: '35px',marginLeft:'90%',color:'white',fontFamily:'poppins'}}>3.5m <span style={{fontSize:'16px'}}><br/>Accounts</span></p>
                    </div>
              </Col>
              <Col sx={12} md={6}>2 of 2</Col>
            </Row>
        </Container>
    );
};

export default About;