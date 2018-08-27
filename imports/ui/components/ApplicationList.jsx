import React, { Component } from 'react';
import Moment from 'react-moment';
import { cancelApplications } from '/lib/api/UserApplication';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

// Task component - represents a single todo item
export default class ApplicationList extends Component {
    constructor(props) {
        super(props);
    }

    handleCancel = (job_id) => {
        cancelApplications(job_id);
    }

    confirmCancel = (job_id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui zoomIn animated faster'>
                  <h3>Are you sure?</h3>
                  <p>You want to cancel this application?</p>
                  
                  <button className="button margin-top-35 ripple-effect" onClick={() => {
                      this.handleCancel(job_id)
                      onClose()
                  }}>Yes, Cancel it!</button>
                  <button className="button cancel margin-top-35 ripple-effect" onClick={onClose}>No</button>
                </div>
              )
            }
        })
    }

    render() {
        let job = this.props.job.job;
        return (
            <li>
                <div className="job-listing">

                    <div className="job-listing-details">

                        <a href="#" className="job-listing-company-logo">
                            <img src="/img/companies/1/company-logo.png" alt="" />
                        </a>

                        <div className="job-listing-description">
                            <h3 className="job-listing-title"><a href={"/viewjob/" + job.job_id}>{job.title}</a></h3>

                            <div className="job-listing-footer">
                                <ul>
                                    <li><i className="icon-material-outline-business"></i> {job.owner.company}</li>
                                    <li><i className="icon-material-outline-location-on"></i> {job.address}</li>
                                    <li><i className="icon-material-outline-business-center"></i> { job.type == 0 ? "Full Time" : "" }</li>
                                    <li><i className="icon-material-outline-access-time"></i> <Moment fromNow ago>{job.created}</Moment></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttons-to-right single-right-button">
                    <a href="#" onClick={() => this.confirmCancel(this.props.job._id)} className="button red ripple-effect ico" data-tippy-placement="left" data-tippy="" data-original-title="Remove"><i className="icon-feather-trash-2"></i></a>
                </div>
            </li>
        );
    }
}
