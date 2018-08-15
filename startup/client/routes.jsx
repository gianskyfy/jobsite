import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import App from '/imports/ui/layouts/App.jsx';
import Main from '/imports/ui/layouts/Main.jsx';

import LoginPage from '/imports/ui/pages/LoginPage.jsx';
import SignupPage from '/imports/ui/pages/SignupPage.jsx';

export const renderRoutes = () => (
  <Router>
    <div>
      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignupPage}/>
      <Route exact={true} path='/' component={App}/>
    </div>
  </Router>
)
