import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, desc, img } = props.service;
    return (
    <div>
       <Col>
            <Card className='shadow-lg 
             p-3 
             mb-5
             bg-white
             rounded' style={{
                    height: '350px',
                }}>
        <Card.Img variant="top" src={img}
                        style={{
                            marginTop:'70px',
                            width: '91px',
                            height: '94px',
                            margin:'auto'
                        }} />
        <Card.Body>
                        <Card.Title style={{
                            fontFamily: 'poppins',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color:'#0B1035'
                        }}>{name}</Card.Title>
                        <Card.Text style={{
                            fontSize: '12px',
                            color: '#6D6D6D'
                        }}>
           {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 </div>
    );
};

export default Service;