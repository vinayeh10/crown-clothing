import React from 'react';
import './sigin-signup.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignInSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default SignInSignUp;