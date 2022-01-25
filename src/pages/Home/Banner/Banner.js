import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


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
                <Link to='/checkBalance'>
                <button style={{ background:'#1521cf',
                    color:'#fff',
                    fontFamily:'poppins',
                    borderRadius: '64px',
                    border:'1px solid #1521cf',
                    width:'185px',
                    height:'48.37px'}}>Check Balance</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;