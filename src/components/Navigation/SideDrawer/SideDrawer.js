import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Closed];
    if (props.open) {
        sideDrawerClasses = [classes.SideDrawer, classes.Open];
    }

    let attachedClasses = sideDrawerClasses.join(' ');
    return (
        <React.Fragment>
            <div className={attachedClasses} >SideDrawer</div>
            <Backdrop show={props.open} clicked={props.toggleOpen}></Backdrop>
        </React.Fragment>
    )
}

export default SideDrawer;