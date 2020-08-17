import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import * as actions from '../../../store/actions';

import classes from './WidgetForm.module.css';

const WidgetForm = props => {

    const [nameInput, setNameInput] = useState('')
    const [descInput, setDescInput] = useState('')

    const dispatch = useDispatch();

    const handleNameInput = e => {
        e.preventDefault();
        setNameInput(e.target.value);
    }

    const handleDescInput = e => {
        e.preventDefault();
        setDescInput(e.target.value);
    }

    const widgetSubmission = e => {
        e.preventDefault();
        if (nameInput.length === 0) {
            alert("Must enter a name (will be handled by form soon)")
        } else {
            dispatch(actions.startAddWidget({name: nameInput, description: descInput}))
        }
    }

    return (
        <div className={classes.WidgetForm}>
            {console.log("Re render form")}
            <h1>Add a Widget</h1>
            <form onSubmit={e => widgetSubmission(e)}>
                <span>Name:</span>
                <input 
                    name='name'
                    onChange={e => handleNameInput(e)}/>
                <span>Description:</span>
                <textarea onChange={e => handleDescInput(e)}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default WidgetForm;