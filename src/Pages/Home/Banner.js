import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${'https://img.freepik.com/free-photo/man-fixing-motorcycle-modern-workshop_158595-8087.jpg?t=st=1653207037~exp=1653207637~hmac=32e7534f7b2d9706d376e216ec2d087453d528440368188ca54e93ce28fa94b2&w=740'})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-4xl font-bold">Your One-Stop Motorcycle Aftermarket Parts Supplier</h1>
                    <p class="mb-5">With our comprehensive range of products and efficient supply chain management,WELBIM is your best choice for quality and affordable custom motorcycle parts for your market.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;