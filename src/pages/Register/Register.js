import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Social from '../Social/Social';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, SetConfirm] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirm = e => {
        SetConfirm(e.target.value);
    }
    if (user) {
        navigate('/home')
    }
    const handleCreateUser = e => {
        e.preventDefault();

        if (password !== confirm) {
            setError('password did not matched')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Your password' required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirm} type="password" name="" id="" placeholder='Enter Your password' required />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>{error}</p>
                    <p>Already Have an account? ? <Link to='/login'> Please log in</Link></p>
                </div>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;