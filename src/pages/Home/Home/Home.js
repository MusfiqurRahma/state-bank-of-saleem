import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MoneyBox from '../MoneyBox/MoneyBox';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <MoneyBox></MoneyBox>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;