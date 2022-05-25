import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <div className="flex items-center">

                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.comment}</p>
                        <p>Ratings: {review.rating} stars</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;