import React, { useEffect, useState } from 'react'
import ListItem from './ListItem/ListItem';

import classes from './WidgetList.module.css';

const WidgetList = props => {

    return (
        <ul className={classes.WidgetList}>
            {props.widgets.map(widget => <ListItem name={widget.name} description={widget.description}/>)}
        </ul>
    )
}

export default WidgetList;