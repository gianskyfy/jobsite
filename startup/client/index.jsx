import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { render } from 'react-dom';
import '/imports/ui/styles/global.less';
import 'font-awesome/css/font-awesome.css';

import { renderRoutes } from '/startup/client/routes.jsx'

// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });

Meteor.startup(() => {
    Tracker.autorun(() => {
        const oldest = _.max(Monkeys.find().fetch(), (monkey) => {
          return monkey.age;
        });
      
        if (oldest) {
          Session.set('oldest', oldest.name);
        }
      });
});
