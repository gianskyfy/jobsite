import React from 'react';
import { Provider } from 'react-redux';

// import store for Redux
import store from '/imports/redux/store';

const MainLayout = ({content}) => (
    <div>
        <Provider store={store}>
        {content}
        </Provider>
    </div>
)

export default MainLayout;