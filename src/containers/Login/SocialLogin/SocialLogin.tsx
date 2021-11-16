import React from 'react';
import facebookIcon from '../../../assets/images/facebook-icon.png'
import googleIcon from '../../../assets/images/google-icon.png'
import * as actions from '../../../store/actions';
import classes from './SocialLogin.module.css';
import { useDispatch, useSelector } from 'react-redux';
interface Props {};

const SocialLogin: React.FC<Props> = ({}) => {
    const GOOGLE_AUTH_URL: string = 'www.google.co.uk'
    const FACEBOOK_AUTH_URL: string = 'www.facebook.com'

    const dispatch = useDispatch();

    const googleLogin = () => {
        console.log('give me strength')
        dispatch(actions.initiateSocialLogin('/oauth2/authorization/google'))
    }

    return (
        <div className={`${classes.Container}`}>
            <a className={`${classes.Button} ${classes.Facebook}`} href='javascript:void'>
                <img src={facebookIcon} />
                <span>Login With Facebook</span>
            </a>

            <a className={`${classes.Button} ${classes.Google}`} href='javascript:void' onClick={() => googleLogin()}>
                <img src={googleIcon} />
                <span>Login With Google</span>
            </a>
        </div>
    );
}

export default SocialLogin;