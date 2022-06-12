import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleUserSignIn = e => {
        e.preventDefault();


        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2>Log In</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Your password' />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>

                    <p>new to ema john ? <Link to='/register'> Create An Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;