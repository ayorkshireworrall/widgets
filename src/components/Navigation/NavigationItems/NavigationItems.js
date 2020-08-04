import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => {
    return (
        <nav className={classes.NavigationItems}>
            <ul>
                <NavigationItem link="/home">Home</NavigationItem>
                <NavigationItem link="/login">Login</NavigationItem>
            </ul>
        </nav>
    )
}

export default NavigationItems;