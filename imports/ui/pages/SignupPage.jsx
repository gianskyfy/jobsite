import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import '/imports/ui/styles/signup.less';
import Navbar from '/imports/ui/components/Navbar.jsx';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    Accounts.createUser({
      username: email,
      email: email,
      password: password,
      profile: {
        'name': name,
      }
    }, (err) => {
      if (err) {
        console.log('error loggin in');
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='signup-container'>
          <div className='signup-box'>
            <form id='signup-form'
              onSubmit={this.handleSubmit}
              >
              <div className='name-box'>
                <input type='name'
                  id='signup-name'
                  placeholder='Name'
                />
              </div>
              <div className='email-box'>
                <input type='email'
                  id='signup-email'
                  placeholder='Email'
                />
              </div>
              <div className='password-box'>
                <input type='password'
                  id='signup-password'
                  placeholder='Password'
                />
              </div>
              <input type='submit'
                id='signup-button'
                value='Signup'
              />
              <div className='register'>
                Forgot your password? Just too bad!
              </div>
            </form>
          </div>
          <div className='signup-img'>HAHA</div>
        </div>
      </div>

    )
  }
}
