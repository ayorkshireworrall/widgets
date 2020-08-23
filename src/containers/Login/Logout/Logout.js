import React, { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";

import * as actions from '../../../store/actions';


const Logout = props => {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => dispatch(actions.initiateLogout()), [dispatch]);

    useEffect(() => {
        onLogout()
    }, [onLogout]);

    return <Redirect to="/"/>
}

export default Logout;