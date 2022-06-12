import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, review, ratings, img, book, writer } = props.service;
    return (
        <div className='all-review-card'>
            <img className='review-img' src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h3>Book: {book}</h3>
                <h5>By {writer}</h5>
            </div>
        </div>
    );
};

export default Service;