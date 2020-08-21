import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../../components/UI/Page/Page';
import Spinner from '../../components/UI/Spinner/Spinner';
import WidgetList from './WidgetList/WidgetList';
import WidgetForm from './WidgetForm/WidgetForm';
import * as actions from '../../store/actions';

const Widgets = props => {

    const isLoading = useSelector(state => {
        return state.widgets.loading;
    });

    const widgets = useSelector(state => {
        return state.widgets.widgetList;
    })

    const dispatch = useDispatch();
    const onInitWidgets = useCallback(() => dispatch(actions.initWidgets()), [dispatch]);

    useEffect(() => {
        onInitWidgets();
    }, [onInitWidgets]);

    return (
        <Page>
            {console.log("Re render Widgets")}
            <WidgetList widgets={widgets}/>
            {isLoading && <div style={{paddingTop:'10px', paddingBottom:'20px'}}>
                    <Spinner color='#000000'/>
                </div>}
            <WidgetForm/>
        </Page>
    )
}

export default Widgets;