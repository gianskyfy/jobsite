import React from 'react';
import { mount } from 'react-mounter';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

//mainlayout
import Main from '/imports/ui/layouts/Main';
import App from '/imports/ui/layouts/App';

import MainPage from '/imports/ui/pages/MainPage';
import LoginPage from '/imports/ui/pages/LoginPage';
import SignupPage from '/imports/ui/pages/SignupPage';
import Dashboard from '../../imports/ui/pages/Dashboard';
import PostJob from '../../imports/ui/pages/PostJob';
// export const renderRoutes = () => (
//   <Router>
//     <div>
//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignupPage}/>
//       <Route exact path='/' component={App}/>
//     </div>
//   </Router>
// )

// free routes
FlowRouter.route('/', {
    action() {
        mount(App, {
          content: (<MainPage />)
        })
    }
});

FlowRouter.route('/signup', {
  action() {
      mount(App, {
        content: (<SignupPage />)
      })
  }
});

FlowRouter.route('/dashboard', {
  middlewares: [checkAuthentication],
  authenticated: true,
  action() {
      mount(Main, {
        content: (<Dashboard />)
      })
  }
});

FlowRouter.route('/postjob', {
  middlewares: [checkAuthentication],
  authenticated: true,
  action() {
      mount(Main, {
        content: (<PostJob />)
      })
  }
});

FlowRouter.notFound = {
  action: function() {
      if(Meteor.userId() === null)
        FlowRouter.go("/");
      else
        FlowRouter.go("/dashboard");   
  }
};

function checkAuthentication(context) {
    if(Meteor.userId() === null)
        FlowRouter.go("/");  
}