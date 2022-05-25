import React, { useEffect, useState } from 'react';
import quote from '../../images/Icon/quote.svg';
import people1 from '../../images/Banner/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg';
import people2 from '../../images/Banner/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import people3 from '../../images/Banner/stefan-stefancik-QXevDflbl8A-unsplash.jpg';
import Review from './Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/findReview')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-2xl mb-2 text-indigo-500 font-bold">Reviews</h4>
                    <h2 className='text-3xl text-indigo-500'>What Our Customers Say</h2>
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