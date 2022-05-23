import React from 'react';
import quote from '../../images/Icon/quote.svg';
import people1 from '../../images/Banner/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg';
import people2 from '../../images/Banner/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import people3 from '../../images/Banner/stefan-stefancik-QXevDflbl8A-unsplash.jpg';
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Vicky Hladynets',
            review: 'We choose welbim for a number of reasons but mainly because welbim listens to technical feedback from installers.',
            img: people1
        },
        {
            _id: 2,
            name: 'Jake Nackos',
            review: 'They provide excellient service to their customer.',
            img: people2
        },
        {
            _id: 3,
            name: 'Stefan Stefancik',
            review: 'Their service provided to customers was excellient.',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className='text-3xl'>What Our Customers Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;