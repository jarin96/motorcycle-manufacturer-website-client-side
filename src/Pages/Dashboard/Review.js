import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Review.css';


const Review = () => {
    const [user] = useAuthState(auth);
    const reviewRef = useRef();
    const ratingRef = useRef();

    const addReview = (e) => {
        e.preventDefault();

        const userReview = {
            name: user.displayName,
            email: user.email,
            rating: ratingRef.current.value,
            comment: reviewRef.current.value
        }
        fetch('https://mysterious-crag-63654.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Posted Successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <form className='text-center pb-4 mt-4 bg-secondary' onSubmit={addReview} >
                <input type='text' className='w-75 rounded-3  p-2 my-3' defaultValue={user.displayName} />
                <br />
                <input type='text' className='w-75 rounded-3   p-2 my-3' defaultValue={user.email} />
                <br />
                <input type='number' className='w-75 rounded-3  p-2 my-3' ref={ratingRef} placeholder='Enter Your Rating' />
                <br />
                <textarea placeholder='Enter Your Feedback Here' ref={reviewRef} className='w-50 size rounded-3  p-2 mt-3'></textarea>
                <br />
                <br />
                <button className='btn btn-primary px-3 py-2' type='submit'>Post</button>

            </form>

        </div>
    );
};

export default Review;