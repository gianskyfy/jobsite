import React, { Component } from 'react';
import '/imports/ui/styles/task.less';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li className='task-container'>{this.props.task.text}</li>
    );
  }
}
