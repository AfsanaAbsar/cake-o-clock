import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner1.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-title' >
                <h1 className='first-banner-title'>Make Your Day</h1>
                <h1 className='second-banner-title'>With Cake O' Clock</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sint voluptatum quas voluptate eaque quaerat accusantium pariatur dolorem optio, sed facere autem nisi nulla et culpa at atque tempora fugiat? Corrupti fugiat architecto rem quos, eaque illum velit sint animi natus esse eos commodi tenetur dignissimos tempore nam quis sapiente.</p>
                <button className='btn'>Explore More</button>
            </div>
            <div>
                <img className='banner-img' src={banner1} alt="" />
            </div>
        </div>
    );
};

export default Banner;