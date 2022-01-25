import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import loginImg from '../../../image/login.png';

const Login = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
             <Row>
              <Col xs={12} md={6} style={{marginTop:'150px'}}>
                        <form onSubmit=''>
                            <input
                                type="email"
                                name=""
                                id=""
                                onChange=''
                                placeholder='Account ID'
                                style={{width:'60%'}}/> <br /> <br />
                            
                            <input
                                type="email"
                                name="Passcode"
                                id=""
                                onChange=''
                                placeholder='Passcode'
                                style={ {width:'60%'}}/> <br /> <br />

                            <button
                                style={{
                                    m: 1,
                                    backgroundColor: '#1521cf',
                                    color: 'white',
                                    border: '1px solid #1521cf',
                                    fontFamily: 'poppins',
                                    height: '48px',
                                    width: '185px',
                                    borderRadius:'64px'
                                }} type="submit" variant="contained">Check Balance</button> <br /><br />
                </form> 
              </Col>
              <Col xs={12} md={6} style={{marginTop:'50px'}}>
                        <img src={loginImg} alt="" style={{height:'420px'}}/>       
              </Col>
             </Row>
             </Container>         
        </div>
    );
};

export default Login;