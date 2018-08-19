import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import store from '/imports/redux/store';
import { getUser } from '/imports/reducers/actions/authActions';

import { renderRoutes } from '/startup/client/routes.jsx';

// import alll global js and css
import 'simplebar';

import '/imports/ui/styles/global.less';
import 'font-awesome/css/font-awesome.css';

Meteor.startup(() => {
    store.dispatch(getUser());

    render(renderRoutes, document.getElementById('target'));
});
