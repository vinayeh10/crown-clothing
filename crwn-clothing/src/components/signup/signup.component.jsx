import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './signup.styles.scss';

class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleOnSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Password not matching');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
    
            await createUserProfileDocument(user, {displayName});
    
            this.setState({displayName: '' , email: '', password: '', confirmPassword: ''});
        } catch (error) {
            console.log('Error signing up', error);
        }

    }


    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have account</h2>
                <span>Sign up using email and password</span>

                <form className='sign-up-form' onSubmit={this.handleOnSubmit}>
                    <FormInput 
                    label="Display Name"
                    handleChange={this.handleChange}
                    required
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    />

                    <FormInput
                    label="Email"
                    handleChange={this.handleChange}
                    required
                    type="email"
                    name="email"
                    value={this.state.email}
                    />

                    <FormInput
                    label="Password"
                    handleChange={this.handleChange}
                    required
                    type="password"
                    name="password"
                    value={this.state.password}
                    />
                    
                    <FormInput 
                    label="Confirm Password"
                    required
                    handleChange={this.handleChange}
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    />

                    <CustomButton type="submit" value="submit form">Sign UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;