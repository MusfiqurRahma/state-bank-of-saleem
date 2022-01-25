import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import CheckBalanceImg from '../../../image/checkBalance.png';
import ring1 from '../../../image/rect1.png';
import ring2 from '../../../image/ring2.png';
import ring3 from '../../../image/ring3.png';
import dangerImage from '../../../image/dangerZone.png';
import balanceLogo from '../../../image/vertical.png';


const CheckBalance = () => {
    return (
        <div>
            <Navigation></Navigation>
              <Container style={{marginBottom:'30px'}}>
                <Row>
                    <Col xs={12} md={6} style={{marginTop:'100px'}}>
                        <p
                            style={{
                                color: '#1521cf',
                                fontSize: '22px',
                                fontWeight: '600',
                                fontFamily: 'poppins',
                                textAlign:'left'
                            }}> <img src={balanceLogo} alt="" /> Account Balance</p>
                        <p
                            style={{
                                color: '#000000',
                                fontWeight: '600',
                                fontSize: '27px',
                                fontFamily: 'poppins',
                                textAlign:'left'
                            }}>Total Income & Account Statistics</p>
                   <Container>
                    <Row style={{marginBottom:'20px'}}>
                    <Col xs={12} md={4}>
                    <img
                        style={{
                            width: '150px',
                            height: '150px'
                            }} src={ring1} alt="" />
                                    <p
                                      style={{
                                          fontSize: '13px',
                                          fontFamily:'poppins',fontWeight: '400',
                                          color:'#6d6d6d'
                                        }}>Account Balance</p> 
                            </Col>
                                <Col xs={12} md={4}>
                                  <img style={{
                                   width: '150px',
                                   height: '150px'
                           }} src={ring2} alt="" />
                          <p style={{
                                    fontSize: '13px',
                                    fontFamily: 'poppins', fontWeight: '400',
                                    color:'#6d6d6d'
                                    }}>Withdrawals</p>       
                   </Col>   
                    <Col xs={12} md={4}>
                    <img style={{
                                  width: '150px',
                                  height: '150px'
                        }} src={ring3} alt="" />
                        <p style={{
                                   fontSize: '13px',
                                   fontFamily: 'poppins', fontWeight: '400',
                                   color:'#6d6d6d'
                                   }}>Maintainance</p>           
                    </Col> 
                            </Row>
                            <div>
                                <img
                                    style={{
                                        border: '1px solid #d7d7d7',
                                        padding: '10px', borderRadius: '5px'
                                    }} src={dangerImage} alt="" />
                            </div>                            <div style={{ marginTop: '50px' }}>
                                <p
                                    style={{
                                        borderBottom: '1px solid #d7d7d7', fontSize: '28px', fontWeight: '600', fontFamily: 'poppins',
                                        textAlign:'left'}}>
                            $4,500,093.00
                            </p>
                                <p
                                    style={{
                                        color: '#05a528', fontSize: '15px', fontFamily: 'poppins',
                                        fontWeight: '600',
                                        textAlign:'left'}}>Credit Balance</p>
                            <p style={{
                                        borderBottom: '1px solid #d7d7d7', fontSize: '28px', fontWeight: '600', fontFamily: 'poppins',
                                        textAlign:'left'}}>
                            $4,501,263.00
                            </p>
                            <p  style={{
                                        color: '#d20202', fontSize: '15px', fontFamily: 'poppins',
                                        fontWeight: '600',
                                        textAlign:'left'}}>Ledger Balance</p>
                                <button style={{
                                    backgroundColor: '#1521cf',
                                    color: 'white',
                                    fontWeight: '600', fontFamily: '600',
                                    width: '185px',
                                    height: '48px',
                                    border: '1px solid #1521cf',
                                    borderRadius: '64px',
                                    marginRight: '120px',
                                    marginTop:'30px'
                                }}>Withdraw</button>
                            <button style={{
                                    backgroundColor: '#1521cf',
                                    color: 'white',
                                    fontWeight: '600', fontFamily: '600',
                                    width: '185px',
                                    height: '48px',
                                    border: '1px solid #1521cf',
                                    borderRadius: '64px',
                                    marginTop:'5px'
                                }}>Transfer</button>
                            </div>
                  </Container>
                     </Col>
                     <Col xs={12} md={6}>
                        <img
                            style={{
                                height: '749px',
                                width: '584px',
                                marginTop:'50px'
                            }} src={CheckBalanceImg} alt="" />
                    </Col>
                 </Row>
             </Container>
        </div>
    );
};
export default CheckBalance;