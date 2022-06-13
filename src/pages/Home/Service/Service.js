import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, price, img } = props.service;
    return (
        <div className='service-item'>

            <img className='service-img' src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className='btn'>Add To Cart</p>


        </div>
    );
};

export default Service;