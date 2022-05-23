import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';
import Services from './Services';
import Summary from './Summary';
import Vehicles from './Vehicles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Services></Services>
            <Vehicles></Vehicles>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;