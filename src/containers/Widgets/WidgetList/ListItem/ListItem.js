import React from 'react';

import classes from './ListItem.module.css';

const ListItem = props => {
    return (
        <li className={classes.ListItem}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Remove</button>
        </li>
    )
}

export default ListItem;