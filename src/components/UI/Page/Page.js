import React from 'react';

import classes from './Page.module.css';

const Page = props => {
    return (
        <section className={classes.Page}>{props.children}</section>
    )
}

export default Page;