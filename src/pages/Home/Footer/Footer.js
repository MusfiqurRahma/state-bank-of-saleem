import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import salemLogo from '../../../image/footer logo.png';
import gPayImg from '../../../image/g-pay.png';
import appStore from '../../../image/app-store.png';
import facebook from '../../../image/FacebookLogo.png';
import instagram from '../../../image/1161953_instagram_icon.png';
import twitter from '../../../image/twitter.png';
import youtube from '../../../image/youtube-500.png';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#1622c7',padding:'80px'}}>
            <Container>
             <Row>
                    <Col xs={12} md={3}
                        style={{
                            color: 'white',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                            fontSize: '15px',
                            textAlign:'left'
                        }}>
                        <img style={{marginBottom:'15px'}} src={salemLogo} alt="" /> 
                        <p>264 Manon road F1 456 caron <br /> Town</p>
                        <p>Office No 3457</p>
                        <p>info@salem.com</p>
                        <p>1-800-356-6522</p>
                        <div>
                        <img src={facebook} alt="" style={{
                            width: '50px',
                            border: '1px solid white', borderRadius: '50%',
                            padding: '10px',
                            backgroundColor: '#fff',
                            margin:'5px'
                        }} />
                        <img src={instagram} alt=""style={{
                            width: '50px',
                            border: '1px solid white', borderRadius: '50%',
                            padding: '10px',
                            backgroundColor: '#fff',
                            margin:'5px'
                        }} />
                        <img src={twitter} alt="" style={{
                            width: '50px',
                            border: '1px solid white', borderRadius: '50%',
                            padding: '10px',
                            backgroundColor: '#fff',
                            margin:'5px'
                        }} />
                        <img src={youtube} alt="" style={{
                            width: '50px',
                            border: '1px solid white', borderRadius: '50%',
                            padding: '10px',
                            backgroundColor: '#fff',
                            margin:'5px'
                        }} />
                       </div>
              </Col>
              <Col xs={12} md={2} style={{
                            color: 'white',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                        fontSize: '15px',
                        textAlign:'left'
                        }}>
                        <p style={{fontSize:'22px'}}>About us</p>
                        <p>careers</p>
                        <p>Blog</p>
                        <p>Team</p> 
                        <p>Contact Us</p>     
              </Col>
              <Col xs={12} md={2} style={{
                            color: 'white',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                            fontSize: '15px',
                            textAlign:'left'
                        }} >
                        <p style={{fontSize:'22px'}}>Our Services</p>
                        <p>Internet Banking</p>  
                        <p>Mobile Banking</p>
                        <p>Alista Bank Security</p> 
                        <p>Rates And Charges</p>        
              </Col>
                <Col xs={12} md={5} style={{
                            color: 'white',
                            fontFamily: 'poppins',
                            fontWeight: '400',
                            fontSize: '15px',
                            textAlign:'center'
                        }}>
                  <p style={{fontSize:'22px'}}>DOWNLOAD OUR APP</p>
                        <p>Tackle your Banking with our Mobile <br /> app and Make Your Life Easy.</p>
                  <img style={{margin:'10px'}} src={gPayImg} alt="" />  
                  <img src={appStore} alt="" />
              </Col>
             </Row>
            </Container>
        </div>
    );
};

export default Footer;