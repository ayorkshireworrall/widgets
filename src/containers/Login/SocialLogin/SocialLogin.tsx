import React from 'react';
import facebookIcon from '../../../assets/images/facebook-icon.png'
import googleIcon from '../../../assets/images/google-icon.png'
import classes from './SocialLogin.module.css';
interface Props {};

const SocialLogin: React.FC<Props> = ({}) => {
    const GOOGLE_AUTH_URL: string = 'www.google.co.uk'
    const FACEBOOK_AUTH_URL: string = 'www.facebook.com'

    const responseFacebook = (response: any) => {
        console.log(response);
      }

    return (
        <div className={`${classes.Container}`}>
            <a className={`${classes.Button} ${classes.Facebook}`} href="javascript:void">
                <img src={facebookIcon} />
                <span>Login With Facebook</span>
            </a>

            <a className={`${classes.Button} ${classes.Google}`} href="javascript:void">
                <img src={googleIcon} />
                <span>Login With Google</span>
            </a>
        </div>
    );
}

export default SocialLogin;