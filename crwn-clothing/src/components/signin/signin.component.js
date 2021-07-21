import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {history} = this.props;
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            history.push('/');
        } catch (error) {
            console.log('Error logging in', error);
        }
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

export default withRouter(SignIn);