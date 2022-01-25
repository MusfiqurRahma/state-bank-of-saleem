import React from 'react';
import { Card, Container } from 'react-bootstrap';
import moneyImg from '../../../image/money Transfer.png';
import withdrawImg from '../../../image/withdraw.png';
import depositImg from '../../../image/NewDeposite.png';
import paymentImg from '../../../image/MobilePay.png';

const MoneyBox = () => {
    return (
        <Container
        style={{
            display: 'flex',
            marginTop: '-60px'
        }}>
        <Card style={{ width: '15rem', margin: '18px'}}>
            <img
                style={{
                    width: '59px',
                    height: '54px',
                    margin: 'auto',
                    marginTop: '70px',
                }} src={moneyImg} alt="" />
      <Card.Body>
                    <Card.Title style={{
                        fontFamily: 'poppins',
                        fontSize: '20px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        color:'#0b1035'
                    }}>Money Transfer</Card.Title>
    </Card.Body>
    </Card>
        <Card style={{
            width: '15rem',
            margin: '18px',
            backgroundColor: '#1521cf',
            color: 'white',
        }}>
            <img
                style={{
                    width: '59px',
                    height: '54px',
                    margin: 'auto',
                    marginTop: '70px',
                    fontFamily:'poppins'
                }} src={withdrawImg} alt="" />
      <Card.Body>
                    <Card.Title
                        style={{
                            fontFamily: 'poppins',
                        fontSize: '20px',
                        lineHeight: '30px',
                        fontWeight: '600'}}>Withdrawal</Card.Title>
    </Card.Body>
    </Card>
            <Card style={{
                width: '15rem',
                margin: '18px'
            }}>
            <img
                style={{
                    width: '59px',
                    height: '54px',
                    margin: 'auto',
                    marginTop: '70px',
                }} src={depositImg} alt="" />
      <Card.Body>
                    <Card.Title
                        style={{
                        fontFamily: 'poppins',
                        fontSize: '20px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        color:'#0b1035'}}>Bank Deposit</Card.Title>
    </Card.Body>
    </Card>
            <Card style={{
                width: '15rem',
                margin: '18px'
            }}>
            <img
                style={{
                    width: '59px',
                    height: '54px',
                    margin: 'auto',
                    marginTop: '70px',
                    fontFamily:'poppins'
                }} src={paymentImg} alt="" />
      <Card.Body>
                <Card.Title
                        style={{ 
                            fontFamily: 'poppins',
                            fontSize: '20px',
                            lineHeight: '30px',
                            fontWeight: '600',
                            color: '#0b1035',
                            marginBottom:'50px'
                     }}>Online Payment</Card.Title>
    </Card.Body>
    </Card>
    </Container>
    );
};

export default MoneyBox;