import React, { Component } from 'react';
import { bindActionCreators } from 'redux';  
import { connect } from 'react-redux';
import { logout, getUser } from '../../reducers/actions/authActions';

//import controller
import MenuBurger from './MenuBurger.jsx';

class HeaderRight extends Component {
  constructor(props) {
      super(props);

      this.state = { };
  }

  render() {
    const { user } = this.props;
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
                    { user ? (
                      <label>{ user.name } <span>{ user.email }</span></label>
                    ) : (
                      <label>Salesfy User</label>
                    )}
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

function mapStateToProps(state) {
  let returnArray = {};

  if(state.auth != null)
  {
      returnArray["user"] = state.auth.userInfo;
  }
  console.log();
  return returnArray;
}


export default connect(mapStateToProps, { logout })(HeaderRight);