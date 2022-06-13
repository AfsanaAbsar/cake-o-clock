import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, review, img } = props.review;
    return (
        <div className='review-card'>
            <img className='review-img' src={img} alt="" />
            <h4>{name}</h4>
            <p>{review}</p>

        </div>
    );
};

export default SingleReview;