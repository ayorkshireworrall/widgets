import React from 'react';

import classes from './WidgetForm.module.css';

const WidgetForm = props => {
    return (
        <div className={classes.WidgetForm}>
            <h1>Add a Widget</h1>
            <form>
                <span>Name:</span>
                <input/>
                <span>Description:</span>
                <textarea/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default WidgetForm;