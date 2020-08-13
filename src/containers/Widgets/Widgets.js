import React, { useState } from 'react';

import Page from '../../components/UI/Page/Page';
import WidgetList from './WidgetList/WidgetList';
import WidgetForm from './WidgetForm/WidgetForm';

const Widgets = props => {

    const [widgets, setWidgets] = useState([
        {name: 'Alex', description: 'This man is an absolute bloody Legend'},
        {name: 'Baloo', description: 'This dog is absolutely Adorable'},
        {name: 'Shirlyn', description: 'This lady is Hot Hot Hot!'}
    ])
    return (
        <Page>
            <WidgetList widgets={widgets}/>
            <WidgetForm/>
        </Page>
    )
}

export default Widgets;