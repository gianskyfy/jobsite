import React from 'react';
import { mount } from 'react-mounter';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

//mainlayout
import MainLayout from '/imports/ui/layouts/MainLayout';

// containers
import App from '/imports/ui/layouts/App';


import MainPage from '/imports/ui/pages/MainPage';
import LoginPage from '/imports/ui/pages/LoginPage';
import SignupPage from '/imports/ui/pages/SignupPage';

// export const renderRoutes = () => (
//   <Router>
//     <div>
//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignupPage}/>
//       <Route exact path='/' component={App}/>
//     </div>
//   </Router>
// )

isAuthenticated()
{
  return (Meteor.userId() !== null)
}

FlowRouter.route('/', {
    action() {
        mount(App, {
          content: (<MainPage />)
        })
    }
});

FlowRouter.route('/dashboard', {
  action() {
      if(!this.isAuthenticated())
        FlowRouter.go("/err");

      mount(App, {
        content: (<MainPage />)
      })
  }
});
