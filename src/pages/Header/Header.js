import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <nav>
                <div className='header'>

                    <nav>

                        <Link to="/home">HOME</Link>
                        <Link to="/about">ABOUT</Link>

                        <Link to="/blogs">BLOGS</Link>
                        {
                            user ? <Link onClick={logout} to="/login">Log Out</Link> : <Link to="/login">Log In</Link>
                        }

                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;