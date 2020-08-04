import React from 'react';
import imgLogo from '../../assets/images/logo.svg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={imgLogo} alt="Logo"/>
    </div>
);

export default logo;