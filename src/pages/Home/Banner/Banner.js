import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Banner.css';
import moneyImg from '../../../image/money Transfer.png';
import withdrawImg from '../../../image/withdraw.png';
import depositImg from '../../../image/deposite.png';
import paymentImg from '../../../image/payment.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div style={{ marginRight: '65%' }}>
                <div style={{color:'#cfdde8'}}>.</div>
                <p style={{
                    marginTop: '8%',
                    color: '#1521cf',
                    fontSize: '22px',
                    fontWeight:'600'
                }}>Welcome To Salem</p>
                <p
                    style={{
                        fontSize: '48px',
                        fontWeight: 'bold'
                    }}>Stay In Control <br /> Your <span style={{color:'#1521cf'}}>Finances</span></p>
                <button style={{
                    marginRight:'18px',
                    background:'#1521cf',
                    color:'#fff',
                    fontFamily:'poppins',
                    borderRadius: '64px',
                    border:'1px solid #1521cf',
                    width:'185px',
                    height:'48.37px'
                }}>Create account</button>
            <button style={{ background:'#1521cf',
                    color:'#fff',
                    fontFamily:'poppins',
                    borderRadius: '64px',
                    border:'1px solid #1521cf',
                    width:'185px',
                    height:'48.37px'}}>Check Balance</button>
            </div>
            <Container
                style={{
                    display: 'flex',
                    marginTop: '130px'
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
              <Card.Title style={{fontFamily:'poppins'}}>Money Transfer</Card.Title>
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
              <Card.Title style={{fontFamily:'poppins'}}>Withdrawal</Card.Title>
            </Card.Body>
            </Card>
            <Card style={{ width: '15rem', margin: '18px'}}>
                    <img
                        style={{
                            width: '59px',
                            height: '54px',
                            margin: 'auto',
                            marginTop: '70px',
                        }} src={depositImg} alt="" />
              <Card.Body>
              <Card.Title style={{fontFamily:'poppins'}}>Bank Deposit</Card.Title>
            </Card.Body>
            </Card>
            <Card style={{ width: '15rem', margin: '18px'}}>
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
                            style={{ fontFamily: 'poppins', marginBottom: '50px' }}>Online Payment</Card.Title>
            </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Banner;