import React from 'react';
import useReviews from '../../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='review-title'>Client Says...</h1>
            <div className='review'>
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );

};

export default Reviews;