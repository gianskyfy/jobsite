import React, { Component } from 'react';
//import controller
import MenuBurger from './MenuBurger.jsx';

export default  class HeaderRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  className="right-side">

        <div  className="header-widget">
          { Meteor.userId() == null ? (
          <div className="header-notifications">
            <div  className="header-notifications-trigger">
              <a href="#" className="signIn" onClick={this.props.signin}><i className="icon-feather-log-in"></i> Sign In</a>
            </div>
          </div>
          ) : (
          <div  className="header-notifications user-menu">
            <div  className="header-notifications-trigger">
              <a href="#"><div  className="user-avatar status-online"><img src="/img/resources/user-avatar-small-01.jpg" alt=""/></div></a>
            </div>
            <div  className="header-notifications-dropdown">

              <div  className="user-status">

                <div  className="user-details">
                  <div  className="user-avatar status-online"><img src="/img/resources/user-avatar-small-01.jpg" alt=""/></div>
                  <div  className="user-name">
                    Tom Smith <span>Freelancer</span>
                  </div>
                </div>
              </div>

              <ul  className="user-menu-small-nav">
                <li><a href="/dashboard"><i  className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                <li><a href="#" onClick={this.props.logout}><i  className="icon-material-outline-power-settings-new"></i> Logout</a></li>
              </ul>

            </div>
          </div>
          )}
        </div>

        <MenuBurger />

      </div>
    )
  }
}
