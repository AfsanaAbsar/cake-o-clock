import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import social from '../../images/social.png'
import './Social.css'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button className='social-btn' onClick={() => signInWithGoogle()}> <div><img src={social} alt="" /></div> <div>Start With Google</div></button>

        </div>
    );
};

export default Social;