import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import secondImg from '../../../image/image.png';
import firstImg from '../../../image/laptop women.jpeg';

const About = () => {
    return (
        <Container>
             <Row style={{marginTop:'250px'}}>
                <Col sx={12} md={6}>
                    <div style={{}}>
                        <p
                            style={{
                                marginBottom:'-12%',
                                marginLeft:'100px',
                                backgroundColor: '#1521cf',
                                width: '205px',
                                height:'104px',
                                fontSize: '35px',
                                color: 'white',
                                fontFamily: 'poppins',
                            }}>100 <span style={{ fontSize: '16px'}}><br />Awards</span></p>
                    </div>
                    <div>
                        <img
                            style={{
                                marginRight: '500px', marginTop: '20%',
                                width: '432px',
                                height: '498px'
                            }} src={firstImg} alt="" />
                    </div>
                    <div>
                        <img
                            style={{
                                marginLeft: '330px', marginTop: '-150%',
                                width: '432px',
                                height: '498px'
                            }} src={secondImg} alt="" />
                    </div>
                    <div>
                        <p
                            style={{
                                marginTop:'-23%',
                                marginLeft:'84%',
                                backgroundColor: '#1521cf',
                                width: '205px',
                                height:'104px',
                                fontSize: '35px',
                                color: 'white',
                                fontFamily: 'poppins',
                            }}>3.5m <span style={{ fontSize: '16px' }}><br />Accounts</span></p>
                    </div>
              </Col>
                <Col sx={12} md={6}>
                    <p>About us</p>
                    <p>Not Fast Decisions But Good <span style={{color:'#1521cf'}}>Decisions</span> Fast</p>
              </Col>
            </Row>
        </Container>
    );
};

export default About;