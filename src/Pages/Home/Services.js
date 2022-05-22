import React from 'react';
import diamond from '../../images/Services/diamond.png';
import payment from '../../images/Services/payment.png';
import assosance from '../../images/Services/assorance.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Quality Certified',
            description: 'All electrical parts from our warehouse pass through a strict quality assessment before shipment.',
            img: diamond
        },
        {
            _id: 2,
            name: 'Multiple Payment Options',
            description: 'Choose among our payment options for the most convenient method for your business.',
            img: payment
        },
        {
            _id: 3,
            name: 'Reliable Assistance',
            description: 'Comprehensive service is provided to clients, from materials to samples and after-sales support.',
            img: assosance
        },
    ]
    return (
        <div className='my-28 text-accent-focus'>
            <div className='text-center'>
                <h3 className='text-cyan-600  text-3xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;