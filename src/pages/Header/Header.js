import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (

        <div className='header'>
            <img src={logo} alt="" />

            <nav>

                <Link to="/home">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/checkout">ORDERS</Link>

                <Link to="/blogs">BLOGS</Link>
                {
                    user ? <Link onClick={logout} to="/login">LOG OUT</Link> : <Link to="/login">LOG IN</Link>
                }

            </nav>
        </div>

    );
};

export default Header;