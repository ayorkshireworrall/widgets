import React from 'react';
import { useForm } from 'react-hook-form';

import Page from '../../components/UI/Page/Page';
import classes from './Login.module.css';

const Login = props => {
    const {register, handleSubmit, watch, errors } = useForm();
    return (
        <Page>
            <div className={classes.Login}>
                <h1>Login Details</h1>
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
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </Page>
    )
}

export default Login;