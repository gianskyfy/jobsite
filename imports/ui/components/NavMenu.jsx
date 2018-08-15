import React, { Component, Text } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
export default class NavMenu extends Component {

  render() {
    return (
      <li key="{this.props.menu._id}"><a href="#">{this.props.menu.name}</a>
      {this.props.menu.sub.length > 0 && // check if the menu has a sub menu, else ignore
          <ul  className="dropdown-nav">
          {
            this.props.menu.sub.map((smenu) => (
                <li key={smenu._id}><a href="browse-companies.html">{smenu.name}</a></li>
            ))
          }
        </ul>
      }
      </li>
    )
  }
}
