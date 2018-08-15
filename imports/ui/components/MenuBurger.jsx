import React, { Component } from 'react';
import SideMenu from './SideMenu.jsx';
export default  class MenuBurger extends Component {

  render() {
    return (
      <span  className="mmenu-trigger">
        <button  className="hamburger hamburger--collapse" type="button">
          <span  className="hamburger-box">
            <span  className="hamburger-inner"></span>
          </span>
        </button>
        <SideMenu />
      </span>
    )
  }
}
