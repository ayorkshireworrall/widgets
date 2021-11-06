import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import Page from '../../components/UI/Page/Page';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Login.module.css';
import { MESSAGE } from '../../shared/errorConstants';

const Login = props => {
    const [isSignup, setIsSignup] = useState(false);
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const {register, handleSubmit, errors } = useForm();

    const dispatch = useDispatch();

    const isLoading = useSelector(state => {
        return state.auth.isLoading;
    });

    const authErrors = useSelector(state => state.auth.errors);
    const authErrorMessage = authErrors && MESSAGE[authErrors.response.status]? MESSAGE[authErrors.response.status] : 'An unspecified error occurred';

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    });

    let timer = null;

    const loginSubmission = () => {
        dispatch(actions.initiateLogin(formValues.email, formValues.password));
    };

    const signupSubmission = () => {
        console.log('TODO: Implement sign up');
    }

    const onSubmit = () => {
        if (isSignup) {
            signupSubmission();
        } else {
            loginSubmission();
        }
    }

    const handleInputChange = (event, identifier) => {
        let inputValue = event.target.value;
        const newFormValues = {
            ...formValues,
            [identifier]: inputValue 
        }
        setFormValues(newFormValues);
    }

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    }

    let submitText = isSignup ? 'Sign Up' : 'Login';
    let optionText = isSignup ? 'Have an account? Login' : 'New user? Sign up';
    let title = isSignup ? 'Sign Up Details' : 'Login Details';
    let submit = (
        <input type="submit" value={submitText}/>
    )
    if (isLoading) {
        submit = (<div className={classes.Boxing}><Spinner color='#ffffff'/></div>);
    }

    const userErrors = errors.email ? errors.email.message : authErrors? authErrorMessage : '';

    return (
        <Page>
            <div className={`${classes.Login}`}>
                <h1>{title}</h1>
                <span>Username/Email:</span>
                <form onSubmit={handleSubmit(() => onSubmit())}>
                    <input 
                        name="email" 
                        ref={register({ 
                            required: "Please enter an email",
                            // pattern: {
                            //     value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                            //     message: "Please enter a valid email address"
                            // },
                        })}
                        onChange={event => handleInputChange(event, 'email')}/>
                    <span className={classes.Error}>{userErrors}</span>
                    <span>Password:</span>
                    <input 
                        name="password" 
                        type="password"
                        ref={register({
                            required: "Please enter a password",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}
                        onChange={event => handleInputChange(event, 'password')}/>
                    <span className={classes.Error}>{errors.password? errors.password.message : ''}</span>
                    {submit}
                </form>
                <span className={classes.Signup} onClick={toggleSignup}>{optionText}</span>
            </div>
            {isAuthenticated && <Redirect to="home"/>}
        </Page>
    )
}

export default Login;