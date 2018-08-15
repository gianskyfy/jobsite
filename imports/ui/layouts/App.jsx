import React, { Component } from 'react';
import { Provider } from 'react-redux';
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

// import store for Redux
import store from '../../redux/store';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    // now we load jquery into global

    super(props);

    this.state = this.getMeteorData();
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
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
      <Provider store={store}>
        <div>
          <HeaderBar />
          <div className="content-wrap">
            <MainPage />
          </div>
        </div>
      </Provider>
    );
  }
}
