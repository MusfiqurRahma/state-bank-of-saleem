import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import pricingPlanLogo from '../../../image/vertical.png';

const PricingPlan = () => {
    return (
        <div
            style={{
                backgroundColor: '#f7f7f7',
                paddingTop: '1px',
                paddingBottom:'80px'
            }}>
        <Container style={{ marginTop: '130px' }}>
            <p style={{
                fontWeight: '600',
                fontSize: '22px',
                color: '#1521cf',
                fontFamily:'poppins'
            }}> <img src={pricingPlanLogo} alt="" /> Pricing Plan</p>
            <p style={{
                color: '#0b1035',
                fontWeight: '700',
                fontSize: '48px',
                fontFamily: 'poppins'
            }}>Grab our Mega Deposit <span style={{ color: '#1521cf' }}> Package</span></p>
            <p style={{
                fontWeight: '400',
                fontFamily: 'poppins',
                color: '#6d6d6d',
            }}>Check out our Vast range of Plans For you.</p>
            <CardGroup>
                <Card
                    style={{
                        backgroundColor: '#ecf3fb',
                        width: '411px',
                        height: '483px',
                        borderRadius: '10px',
                        marginTop: '38px',
                        border:'1px solid #ecf3fb'
                    }}>
                  <Card.Body>
                        <Card.Title style={{
                                fontSize: '52px',
                                fontWeight: '700',
                                fontFamily: 'poppins',
                                 color:'#0b1035'}}>8.35%</Card.Title>
                        <p style={{
                            borderBottom: '1px solid black',
                            fontSize: '15px',
                            fontWeight: '600px',
                            fontFamily: 'poppins',
                            color:'#0B1035'
                        }}>For a month</p>
                        <p style={{
                            fontSize: '29px',
                            fontWeight: '600',
                            fontFamily: 'poppins',
                            color:'#0b1035'}}>Basic</p>
                      <Card.Text style={{
                            color: '#0b1035',
                            fontSize: '15px',
                            fontFamily:'poppins'
                        }}>
                      Maximum Deposit $5,000,000 <br /> Up to 5 Accounts Availble <br /> 10 Hours support Free Bank Line
                        </Card.Text>
                        <button  style={{
                                fontWeight: '16px', fontFamily: 'poppins', backgroundColor: '#1521cf',
                                color: 'white ',
                                width: '174px',
                                height: '48px',
                                border: '1px solid #1521cf',
                                borderRadius: '7px',
                                marginTop:'60px'}}>Booking Now</button>
                    </Card.Body>
                  </Card>
                <Card
                    style={{
                        backgroundColor: '#1521cf',
                        height: '551px',
                        width: '461px',
                        borderRadius: '10px',
                    }}>
                  <Card.Body>
                        <Card.Title style={{
                                fontSize: '52px',
                                fontWeight: '700',
                                fontFamily: 'poppins',
                                 color:'#fff'}}>8.35%</Card.Title>
                        <p style={{
                            color: '#fff',
                            fontSize: '15px',
                            fontFamily: 'poppins',
                            borderBottom:'1px solid #fff'
                        }}>For a month</p>
                        <p style={{
                            fontSize: '29px',
                            fontWeight: '600',
                            fontFamily: 'poppins',
                            color:'#fff'}}>Premium</p>
                      <Card.Text style={{
                            color: '#fff',
                            fontSize: '15px',
                            fontFamily: 'poppins',
                        }}>
                      Maximum Deposit $5,000,000 <br /> Up to 5 Accounts Availble <br /> 10 Hours support Free Bank Line
                        </Card.Text>
                        <button style={{
                                fontWeight: '16px', fontFamily: 'poppins', backgroundColor: '#fff',
                                color: '#000 ',
                                width: '174px',
                                height: '48px',
                                border: '1px solid #fff',
                                borderRadius: '7px',
                                marginTop:'135px'}}>Booking Now</button>
                    </Card.Body>
                  </Card>
                <Card
                    style={{
                        backgroundColor: '#ecf3fb',
                        width: '411px',
                        height: '483px',
                        borderRadius: '10px',
                        marginTop: '38px',
                        border:'1px solid #ecf3fb'
                    }}>
                  <Card.Body>
                        <Card.Title
                            style={{
                                fontSize: '52px',
                                fontWeight: '700',
                                fontFamily: 'poppins',
                                 color:'#0b1035'}}>8.35%</Card.Title>
                        <p style={{
                            borderBottom: '1px solid black',
                            fontSize: '15px',
                            fontWeight: '600px',
                            fontFamily: 'poppins',
                            color:'#0B1035'
                        }}>For a month</p>
                        <p style={{
                            fontSize: '29px',
                            fontWeight: '600',
                            fontFamily: 'poppins',
                            color:'#0b1035'}}>Advance</p>
                        <Card.Text style={{
                            color: '#0b1035',
                            fontSize: '15px',
                            fontFamily:'poppins'
                        }}>
                      Maximum Deposit $5,000,000 <br /> Up to 5 Accounts Availble <br /> 10 Hours support Free Bank Line
                        </Card.Text>
                        <button
                            style={{
                                fontWeight: '16px', fontFamily: 'poppins', backgroundColor: '#1521cf',
                                color: 'white ',
                                width: '174px',
                                height: '48px',
                                border: '1px solid #1521cf',
                                borderRadius: '7px',
                                marginTop:'60px'}}>Booking Now</button>
                    </Card.Body>
                  </Card>
            </CardGroup>
            </Container>
        </div>
    );
};

export default PricingPlan;