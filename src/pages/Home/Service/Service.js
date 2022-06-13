import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = (props) => {
    const { name, price, img } = props.service;
    return (
        <div className='service-item'>

            <img className='service-img' src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <Link className='btn' to='/checkout'>Order Now</Link>


        </div>
    );
};

export default Service;