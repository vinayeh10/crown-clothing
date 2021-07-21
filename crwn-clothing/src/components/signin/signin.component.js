import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />
                    <FormInput label='Password' handleChange={this.handleChange} type="password" value={this.state.password} required name='password' />
                    
                    <div className="signin-actions-container">
                    <CustomButton type="submit" value='Submit form'>Sign In </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn={true}> Sign In with Google </CustomButton>
                    </div>
                    </form>
            </div>
        );
    }
}

export default SignIn;