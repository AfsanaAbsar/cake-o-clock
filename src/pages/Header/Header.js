import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <div className='header'>

                    <nav>

                        <Link to="/home">HOME</Link>
                        <Link to="/about">ABOUT</Link>

                        <Link to="/blogs">BLOGS</Link>

                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;