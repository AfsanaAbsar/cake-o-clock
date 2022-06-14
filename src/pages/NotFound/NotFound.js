import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div> <div className='not-found-img'>
                <img src="https://i.ibb.co/qWks8SR/2488756.jpg" alt="" />
            </div></div>
            <div className='error-page-btn'>
                <Link to='/home'>
                    <button>Go To Home  </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;