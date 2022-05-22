import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Services from './Services';
import Vehicles from './Vehicles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Services></Services>
            <Vehicles></Vehicles>
        </div>
    );
};

export default Home;