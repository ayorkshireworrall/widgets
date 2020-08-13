import React, { useEffect, useState } from 'react'
import ListItem from './ListItem/ListItem';

const WidgetList = props => {

    return (
        <ul>
            {props.widgets.map(widget => <ListItem name={widget.name} description={widget.description}/>)}
        </ul>
    )
}

export default WidgetList;