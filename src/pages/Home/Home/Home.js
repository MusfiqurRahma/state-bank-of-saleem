import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MoneyBox from '../MoneyBox/MoneyBox';
import Navigation from '../Navigation/Navigation';
import NewsLetter from '../NewsLetter/NewsLetter';
import PricingPlan from '../PricingPlan/PricingPlan';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <MoneyBox></MoneyBox>
            <About></About>
            <Services></Services>
            <PricingPlan></PricingPlan>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;