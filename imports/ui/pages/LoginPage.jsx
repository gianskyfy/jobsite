import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Particles from 'react-particles-js';

import Navbar from '/imports/ui/components/Navbar.jsx';
import '/imports/ui/styles/login.less';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log('error logging in');
        // this.setState({
        //   error: err.reason
        // });
      } else {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return(
      <div>
        <Navbar />
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 1
                }
              }
            }
          }}
          style={{
            position: 'absolute',
            height: '500vh',
            width: '500vw',
            zIndex: '-1',
          }}
        />
        <div className='login-container'>
          <div className='login-img'>
            <img src='/img/salefy-logo.png'/>
          </div>
          <div className='login-box'>
            <div className='login-title'>
              Login to Salefy
            </div>
            <form id='login-form'
              onSubmit={this.handleSubmit}
              >
              <div className='email-box'>
                <input type='email'
                  id='login-email'
                  placeholder='Email'
                />
              </div>
              <div className='password-box'>
                <input type='password'
                  id='login-password'
                  placeholder='Password'
                />
              </div>
              <input type='submit'
                id='login-button'
                value='Login'
              />
              <div className='register'>
                Don't have an account? Register <Link to='/signup'>here</Link>.
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
