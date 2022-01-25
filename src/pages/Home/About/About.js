import React from 'react';
import { Col,Container,Row } from 'react-bootstrap';
import secondImg from '../../../image/image.png';
import firstImg from '../../../image/laptop women.jpeg';
import goalsImg from '../../../image/goalss.png';
import visionImg from '../../../image/vision 1.png';
import verticalLogo from '../../../image/vertical.png';

const About = () => {
    return (
        <div style={{
            backgroundColor: '#F7F7F7',
            paddingTop: '0.5%'
        }}>
            <Container> <Row style={{ marginTop: '120px' }}>
           <Col xs={12} md={7}>
                   <p
                       style={{
                           marginBottom:'-16%',
                           marginLeft:'50px',
                           backgroundColor: '#1521cf',
                           width: '205px',
                           height:'100px',
                           fontSize: '35px',
                           color: 'white',
                           fontFamily: 'poppins',
                    }}>100 <span
                        style={{
                            fontSize: '16px',
                        }}><br />Awords</span></p>
             
                   <img
                       style={{
                        marginRight: '500px',
                        marginTop: '20%',
                        width: '350px',
                        height: '430px'
                       }} src={firstImg} alt="" />
               
          
                   <img
                       style={{
                        marginLeft: '280px',
                        marginTop: '-110%',
                           width: '350px',
                           height: '430px'
                       }} src={secondImg} alt="" />

                   <p
                       style={{
                           marginTop:'-19%',
                           marginLeft:'60%',
                           backgroundColor: '#1521cf',
                           width: '205px',
                           height:'100px',
                           fontSize: '35px',
                           color: 'white',
                           fontFamily: 'poppins',
                       }}>3.5m <span style={{ fontSize: '16px' }}><br />Accounts</span></p>
         </Col>
            <Col sx={12} md={5} style={{marginTop:'50px'}}>
                    <p
                        style={{
                            color: '#1521cf',
                            fontFamily: 'poppins',
                            fontSize: '22px',
                            fontWeight: '600',
                            textAlign: 'left',
                        }}> <img src={verticalLogo} alt="" /> About us</p>
                    <p style={{
                        fontSize: '36px',
                        fontFamily: 'poppins',
                        fontWeight: '600',
                        textAlign:'left'
                    }}>Not Fast Decisions But <br /> Good <span style={{ color: '#1521cf' }}>Decisions</span> Fast</p>
                    <p
                        style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            fontFamily: 'poppins',
                            color: '#1521cf',
                            textAlign:'left'
                        }}><img src={goalsImg} alt="" /> Our Goals</p>
                    <p
                        style={{
                            color: '#6D6D6D',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                        }}>To be one of the best with customers all over the world.</p>
                    <p style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            fontFamily: 'poppins',
                            color: '#1521cf',
                            textAlign:'left'
                        }}><img src={visionImg} alt="" /> Our Vision</p>
                    <p style={{
                            color: '#6D6D6D',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                        }}>Giving easy acess to banking And Financeing any where <br />
                    and Everywhere.</p>
                <button
                    style={{
                        marginTop: '55px',
                        marginRight: '70%',
                        backgroundColor: '#1521cf',
                        color: 'white',
                        fontFamily: 'poppins',
                        border: '1px solid #1521cf',
                        borderRadius: '7px',
                        width: '144px',
                        height:'48px'
                    }}>More About US</button>
         </Col>
            </Row>
            </Container> 
            </div>
    );
};

export default About;