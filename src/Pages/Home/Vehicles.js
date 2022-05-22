import React from 'react';
import vehicle1 from '../../images/Vehicle/majestic-lukas-tAUpEIpBUOw-unsplash.png';
import vehicle2 from '../../images/Vehicle/erik-mclean-JTvW7aAo7sE-unsplash (1).png';
import vehicle3 from '../../images/Vehicle/s03-img1.jpg';

const Vehicles = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-3xl'>Variety of Vehicle Coverage</h2>
            <p className='text-center mt-2'>WELBIM produces not only a wide range of parts for motorcycles, but also fully-built motorcycles, ATVs, and UTVs, so you can expand your product offerings to more markets.</p>
            <div class="card lg:card-side bg-base-100 shadow-xl px-12 my-20">
                <div class="carousel carousel-center rounded-box">
                    <div class="carousel-item">
                        <img src={vehicle1} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle2} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle3} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle1} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle2} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle3} alt="MotorCycle" />
                    </div>
                    <div class="carousel-item">
                        <img src={vehicle1} alt="MotorCycle" />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title font-bold">Stree Bike</h2>
                    <h2 class="card-title font-bold">Dirt Bike</h2>
                    <h2 class="card-title font-bold">Scooter Bike</h2>
                    <p>Usually designed smaller than regular motorcycles.</p>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;