import React  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import loginImg from '../../../image/login.png';
import { Button, TextField } from '@mui/material';


const Login = () => {
  
    return (
        <div>
            <Navigation></Navigation>
            <Container>
             <Row>
              <Col xs={12} md={6} style={{marginTop:'150px'}}>
              <form onSubmit=''>
                    <TextField
                        style={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Account ID"
                        name="email"
                        onChange=''
                        variant="standard" /> <br />
                    <TextField
                        style={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Passcode"
                        type="password"
                        name="password"
                        onChange= ''
                        variant="standard" /> <br /> <br /> 

                            <Button
                                style={{
                                    backgroundColor: '#1521cf',
                                    marginRight: '43%', borderRadius: '64px', fontWeight: '600',
                                    width: '185px',
                                    height: '48px',
                                    marginTop:'10px'
                                }} type="submit" variant="contained">Check Balance</Button> <br /><br />
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