import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Page from '../../components/UI/Page/Page';
import classes from './Login.module.css';

const Login = props => {
    const [isSignup, setIsSignup] = useState(false);
    const {register, handleSubmit, watch, errors } = useForm();

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    }

    let submitText = isSignup ? 'Sign Up' : 'Login';
    let optionText = isSignup ? 'Have an account? Login' : 'New user? Sign up';
    let title = isSignup ? 'Sign Up Details' : 'Login Details'

    return (
        <Page>
            <div className={classes.Login}>
                <h1>{title}</h1>
                <span>Email:</span>
                <form onSubmit={handleSubmit(() => console.log("Valid Form Submitted"))}>
                    <input 
                        name="email" 
                        ref={register({ 
                            required: "Enter an email",
                            pattern: {
                                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                message: "Please enter a valid email address"
                            },
                        })}/>
                    <span className={classes.Error}>{errors.email? errors.email.message : ''}</span>
                    <span>Password:</span>
                    <input 
                        name="password" 
                        type="password"
                        ref={register({
                            required: "Enter a password",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}/>
                    <span className={classes.Error}>{errors.password? errors.password.message : ''}</span>
                    <input type="submit" value={submitText}/>
                </form>
                <span className={classes.Signup} onClick={toggleSignup}>{optionText}</span>
            </div>
        </Page>
    )
}

export default Login;