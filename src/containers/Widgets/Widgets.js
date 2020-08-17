import React from 'react';
import { useSelector } from 'react-redux';

import Page from '../../components/UI/Page/Page';
import Spinner from '../../components/UI/Spinner/Spinner';
import WidgetList from './WidgetList/WidgetList';
import WidgetForm from './WidgetForm/WidgetForm';

const Widgets = props => {

    const isLoading = useSelector(state => {
        return state.widgets.loading;
    });

    const widgets = useSelector(state => {
        return state.widgets.widgetList;
    })

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