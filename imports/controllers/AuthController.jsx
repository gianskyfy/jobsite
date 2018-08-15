import React, { Component, Text } from 'react';

export default class AuthController extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
  }
  logout()
  {
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push('/login');
      }
    });
  }
}
