import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import './Home.css'
import Reviews from './Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;