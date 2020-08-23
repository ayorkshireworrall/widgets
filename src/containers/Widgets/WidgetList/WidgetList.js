import React from 'react'
import ListItem from './ListItem/ListItem';

import classes from './WidgetList.module.css';

const WidgetList = props => {

    return (
        <ul className={classes.WidgetList}>
            {props.widgets.map(widget => {
            return <ListItem key={widget.id} info={widget}/>
            })}
        </ul>
    )
}

export default WidgetList;