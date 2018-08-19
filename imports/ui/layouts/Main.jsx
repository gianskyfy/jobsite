import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import all class
import '/imports/ui/styles/bootstrap-grid.css';
import '/imports/ui/styles/icons.css';
import '/imports/ui/styles/main.css';
import '/imports/ui/styles/component.css';

import HeaderBar from '/imports/ui/components/HeaderBar.jsx';

// import store for Redux
import store from '../../redux/store';

class Main extends Component {

  constructor(props) {
    super(props);
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

                                  <ul data-submenu-title="Overview">
                                        <li><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                        <li className="active-submenu"><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
                                            <ul>
                                                <li><a href="#">Manage Jobs <span className="nav-tag">3</span></a></li>
                                                <li><a href="#">Manage Candidates</a></li>
                                                <li><a href="/postjob">Post a Job</a></li>
                                            </ul>	
                                        </li>
                                  </ul>
                                  
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <div className="dashboard-content-container" data-simplebar>
                    <div>
                        { this.props.content }
                    </div>
              </div>
            </div>
          </div>
      </Provider>
    );
  }
}

export default Main;