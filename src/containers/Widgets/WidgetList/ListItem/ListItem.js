import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../../../store/actions';

import classes from './ListItem.module.css';

const ListItem = props => {
    const widget = props.info;

    const dispatch = useDispatch();

    const handleRemove = (event, id) => {
        event.preventDefault();
        dispatch(actions.startRemoveWidget(id));
    }

    return (
        <li className={classes.ListItem}>
            <h1>{widget.name}</h1>
            <p>{widget.description}</p>
            <button onClick={e => handleRemove(e, widget.id)}>Remove</button>
        </li>
    )
}

export default ListItem;