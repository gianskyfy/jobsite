import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import store for Redux
import store from '../../redux/store';

import HeaderBar from '/imports/ui/components/HeaderBar.jsx';

// import all class
import '/imports/ui/styles/bootstrap-grid.css';
import '/imports/ui/styles/icons.css';
import '/imports/ui/styles/main.css';
import '/imports/ui/styles/component.css';
import '/imports/ui/styles/colors/blue.css';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderBar />
          <div className="content-wrap">
            {this.props.content}
          </div>
        </div>
      </Provider>
    );
  }
}