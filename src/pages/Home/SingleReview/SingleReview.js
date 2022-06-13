import React from 'react';

const SingleReview = (props) => {
    const { name, review, ratings, img } = props.review;
    return (
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{review}</p>
            <p>{ratings}</p>
        </div>
    );
};

export default SingleReview;