import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
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

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('sent email')
    }


    const handleUserSignIn = e => {
        e.preventDefault();


        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form'>
            <div className='form-container'>
                <div>
                    <h2>Log In</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Your password' required />
                        </div>
                        <input className='btn' type="submit" value="Submit" />
                    </form>


                    <p>New to Cake O' Clock ? <Link to='/register'> Create An Account</Link></p>
                    <p>Forgot Password ? <Link to='' onClick={resetPassword}> Reset Password</Link></p>
                </div>

            </div>
            <div className='social'>
                <Social></Social>
            </div>
        </div>
    );
};

export default Login;