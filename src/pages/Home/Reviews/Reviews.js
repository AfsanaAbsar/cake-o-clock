import React from 'react';
import useReviews from '../../../hooks/useReview';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    return (
        <div className='all-review-card'>
            <img className='review-img' src={reviews.img} alt="" />
            <div>
                <h2>{reviews.name}</h2>
                <h3>Book: {reviews.book}</h3>
                <h5>By {reviews.writer}</h5>

            </div>
        </div>
    );

};

export default Reviews;