import React from 'react';
import useReviews from '../../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    return (
        reviews.map(review => <SingleReview
            key={review.id}
            review={review}
        ></SingleReview>)
    );

};

export default Reviews;