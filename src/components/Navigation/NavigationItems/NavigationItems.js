import React from 'react';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => {
    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    });

    let navClass = '';
    switch (props.navType) {
        case 'SIDE_DRAWER':
            navClass = classes.NavigationItemsSideDrawer;
            break;
        case 'TOOLBAR' :
            navClass = classes.NavigationItemsToolbar;
            break;
        default:
            throw new Error ('Invalid use of NavigationItems component, must provide valid prop \'navType\'');
    }

    let availableItems = (
        <ul>
            <NavigationItem navType={props.navType} link="/home">Home</NavigationItem>
            <NavigationItem navType={props.navType} link="/login">Login</NavigationItem>
        </ul>
    );

    if (isAuthenticated) {
        availableItems = (
            <ul>
                <NavigationItem navType={props.navType} link="/home">Home</NavigationItem>
                <NavigationItem navType={props.navType} link="/widgets">Widget List</NavigationItem>
                <NavigationItem navType={props.navType} link="/logout">Logout</NavigationItem>
            </ul>
        );
    }

    return (
        <nav className={navClass}>
            {availableItems}
        </nav>
    )
}

export default NavigationItems;