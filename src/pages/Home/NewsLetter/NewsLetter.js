import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './NewsLetter.css';
import americaBank from '../../../image/americanbankcenter 1.png';
import bankOfAmerica from '../../../image/Bank America.png';
import dhvBank from '../../../image/csm_dhv_xc_logo_300_03_08d2b387ce.png';
import usBank from '../../../image/usbank.png';
import elfiBank from '../../../image/efi fiery.png';

const NewsLetter = () => {
    return (
       <> <div className='newsletter-container'>
            <p
                style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#fff',
                    fontFamily: 'poppins',
                    marginTop: '100px',
                    padding: '130px',
            }}>Sign Up For News Letter</p>
            <form action="" style={{marginTop:'-100px'}}> 
                <input
                    type="email"
                    placeholder='Enter Your Email'
                    style={{
                        width: '174px',
                        height: '48px',
                        textAlign: 'center',
                        borderRadius: '7px',
                        marginRight: '16px',
                        fontFamily: 'poppins',
                        border:'1px solid white'
                    }}/>
                <input type="button" value="Submit"
                    style={{
                        width: '174px',
                        height: '48px',
                        borderRadius: '7px',
                        color: '#0b1035',
                        fontFamily: 'poppins',
                        border: '1px solid white',
                        marginBottom:'80px'
                    }} />
            </form>
        </div>
        <Container className="shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop:'-50px'}}>
        <Row>
                    <Col>
                        <img style={{margin:'12px'}} src={americaBank} alt="" />
                        <img style={{margin:'12px'}} src={bankOfAmerica} alt="" />
                        <img style={{margin:'12px'}} src={dhvBank} alt="" />
                        <img style={{margin:'12px'}} src={usBank} alt="" />
                        <img style={{margin:'12px'}} src={elfiBank} alt="" />
                    </Col>
        </Row>
      </Container> </>
    );
};

export default NewsLetter;