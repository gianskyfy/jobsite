import React, { Component, Text } from 'react';
import { withHistory, Link } from 'react-router-dom';
import '/imports/ui/styles/header-all.css';
import { Accounts } from 'meteor/accounts-base';

export default class Navbar extends Component {

  render() {
    return (
      <div className='nav-container'>
        <div className='title'>
          <div className='title-header'>
            <img src='/img/salefy-logo-w.png'/>
          </div>
        </div>
        <div className='options'>
          <div className='login'>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
    )
  }
}
