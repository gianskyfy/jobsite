import React from 'react';
import { mount } from 'react-mounter';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

//mainlayout
import Main from '/imports/ui/layouts/Main';
import App from '/imports/ui/layouts/App';

import MainPage from '/imports/ui/pages/MainPage';
import LoginPage from '/imports/ui/pages/LoginPage';
import SignupPage from '/imports/ui/pages/SignupPage';

// Company
import Dashboard from '../../imports/ui/pages/Dashboard';
import PostJob from '../../imports/ui/pages/PostJob';

//Sales
import FindJob from '../../imports/ui/pages/FindJob';
import ViewJob from '../../imports/ui/pages/ViewJob';

//add the loading page
import LoadingPage from '../../imports/ui/pages/LoadingPage';

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
  triggersEnter: [checkAuthentication],
  authenticated: true,
  action() {
      Tracker.autorun(() => {
          let user = Meteor.user();
          mount(Main, {
            user,
            content: (!user) ? 
            (<LoadingPage />) : 
            (user.profile.role_type == 0 ) ? (<Dashboard user={user} />) : ("HAHA Noob")
          })
      });
  }
});


FlowRouter.route('/managejob', {
  triggersEnter: [checkAuthentication],
  authenticated: true,
  action() {
        Tracker.autorun(() => {
          let user = Meteor.user();
          mount(Main, {
            user,
            content: (!user) ? 
            (<LoadingPage />) : 
            (user.profile.role_type == 0 ) ? (<Dashboard user={user} />) : FlowRouter.redirect("/")
          })
      });
  }
});

FlowRouter.route('/postjob', {
  triggersEnter: [checkAuthentication],
  authenticated: true,
  action() {
      Tracker.autorun(() => {
          let user = Meteor.user();
          mount(Main, {
            user,
            content: (!user) ? 
            (<LoadingPage />) : 
            (user.profile.role_type == 0 ) ? (<PostJob />) : FlowRouter.redirect("/")
          })
      });
  }
});

// Sale's Pages
FlowRouter.route('/findjobs', {
  triggersEnter: [checkAuthentication],
  authenticated: true,
  action() {
      Tracker.autorun(() => {
          let user = Meteor.user();
          mount(Main, {
            user,
            content: (!user) ? 
            (<LoadingPage />) : 
            (user.profile.role_type == 1 ) ? (<FindJob />) : FlowRouter.redirect("/")
          })
      });
  }
});

FlowRouter.route('/viewjob/:jobid', {
  triggersEnter: [checkAuthentication],
  authenticated: true,
  action() {
      Tracker.autorun(() => {
          let user = Meteor.user();
          mount(Main, {
            user,
            content: (!user) ? 
            (<LoadingPage />) : 
            (user.profile.role_type == 1 ) ? (<ViewJob />) : FlowRouter.redirect("/")
          })
      });
  }
});

FlowRouter.notFound = {
  action: function() {
      if(Meteor.userId() === null)
        FlowRouter.redirect("/");
      else
        FlowRouter.redirect("/dashboard");   
  }
};

function checkAuthentication(context) {
    if(Meteor.userId() === null)
    {
        FlowRouter.go("/");
    }
}