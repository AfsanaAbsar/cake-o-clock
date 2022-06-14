import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner1.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-title' >
                <h1 className='first-banner-title'>Make Your Day</h1>
                <h1 className='second-banner-title'>With Cake O' Clock</h1>
                <p>Hey, There, Welcome to Cake O' Clock.Cake O' Clock is a place where you can find your desire cake.Ypu can also customze your cake . So if you are looking for a awesome cake for your party, Cake O' Clock is always with you...</p>
                <button className='btn'>Explore More</button>
            </div>
            <div>
                <img className='banner-img' src={banner1} alt="" />
            </div>
        </div>
    );
};

export default Banner;