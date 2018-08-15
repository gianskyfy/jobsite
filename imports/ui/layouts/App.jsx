import React, { Component } from 'react';
import Task from '/imports/ui/components/Task.js';
import MainPage from '../pages/MainPage.jsx';

// import jquery
import $ from 'jquery/dist/jquery.min.js';

// import all class
import '/imports/ui/styles/bootstrap-grid.css';
import '/imports/ui/styles/icons.css';
import '/imports/ui/styles/main.css';
import '/imports/ui/styles/component.css';

import HeaderBar from '/imports/ui/components/HeaderBar.jsx';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    // now we load jquery into global

    super(props);

    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push('/login');
      }
    });
  }

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div>
        <HeaderBar logout={this.logout} />
        <div class="content-wrap">
          <MainPage />
        </div>
      </div>
    );
  }
}
