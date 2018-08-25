import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Provider } from 'react-redux';

// import all class
import '/imports/ui/styles/bootstrap-grid.css';
import '/imports/ui/styles/icons.css';
import '/imports/ui/styles/main.css';
import '/imports/ui/styles/component.css';
import '/imports/ui/styles/component.scss';

import HeaderBar from '/imports/ui/components/HeaderBar.jsx';
import MainMenu from '/imports/ui/components/MainMenu.jsx';
import FooterBar from '/imports/ui/components/FooterBar.jsx';

import MainScripts from '../js/mainscripts.jsx';

// import store for Redux
import store from '../../redux/store';

class MainLayout extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    new MainScripts().load();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderBar />
            <div className="dashboard-container">

              <div className="dashboard-sidebar">
                  <div className="dashboard-sidebar-inner" data-simplebar>
                      <div className="dashboard-nav-container">

                          <a href="#" className="dashboard-responsive-nav-trigger">
                              <span className="hamburger hamburger--collapse" >
                                  <span className="hamburger-box">
                                      <span className="hamburger-inner"></span>
                                  </span>
                              </span>
                              <span className="trigger-title">Dashboard Navigation</span>
                          </a>
                          
                          <div className="dashboard-nav">
                              <div className="dashboard-nav-inner">
                                    <MainMenu user={this.props.user} />
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <div className="dashboard-content-container" data-simplebar>
                    <div>
                        { this.props.content }
                        <FooterBar />
                    </div>
              </div>
            </div>
          </div>
      </Provider>
    );
  }
}

export default MainLayout;