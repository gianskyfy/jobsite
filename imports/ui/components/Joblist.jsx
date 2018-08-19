import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Joblist extends Component {
  render() {
    return (
        <li>
            <div className="job-listing">

                <div className="job-listing-details">

                    <div className="job-listing-description">
                        <h3 className="job-listing-title">
                            <a href="#">Skyfy - Sales Executive</a> 
                            <span className="dashboard-status-button yellow">Pending</span>
                        </h3>

                        <div className="job-listing-footer">
                            <ul>
                                <li><i className="icon-material-outline-date-range"></i> Posted on 28 June, 2018</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="buttons-to-right always-visible">
                <a href="#" onClick={this.fetchJobs} className="button ripple-effect">
                    <i className="icon-material-outline-supervisor-account"></i> Manage Application
                </a>
                <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
            </div>
        </li>
    );
  }
}
