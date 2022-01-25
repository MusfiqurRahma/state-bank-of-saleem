import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import servicesLogo from '../../../image/vertical.png';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <Container
            style={{
                marginTop: '130px',
                marginBottom: '50px'
            }}>
            <p style={{
                fontWeight: '600',
                fontSize: '22px',
                color: '#1521cf',
                fontFamily:'poppins'
            }}> <img src={servicesLogo} alt="" /> Best Services</p>
            <p style={{
                color: '#0b1035',
                fontWeight: '700',
                fontSize: '48px',
                fontFamily: 'poppins'
            }}>Entirely Providing The Best <span style={{ color: '#1521cf' }}>Services</span></p>
            <p style={{
                fontWeight: '400',
                fontFamily: 'poppins',
                color: '#6d6d6d',
            }}>we offer a wide Range of Services To Our Costomers these Helps to meet every Costomer's Needs and Expectations.</p>
            <Row xs={12} md={3} className="g-4">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.name}>
                    </Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;