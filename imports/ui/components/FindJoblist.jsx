import React, { Component } from 'react';
import Moment from 'react-moment';
// Task component - represents a single todo item
export default class FindJoblist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let job = this.props.job;
        return (
            <a href={ "/viewjob/" + job._id } className="job-listing zoomIn animated faster">

                <div className="job-listing-details">
                    <div className="job-listing-company-logo">
                        <img src="/img/companies/1/company-logo.png" alt="" />
                    </div>
                    <div className="job-listing-description">
                        <h4 className="job-listing-company">{ job.owner.company } <span className="verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h4>
                        <h3 className="job-listing-title">{job.title}</h3>
                    </div>
                </div>

                <div className="job-listing-footer">
                    <span className="bookmark-icon"></span>
                    <ul>
                        <li><i className="icon-material-outline-location-on"></i> { job.location }</li>
                        <li><i className="icon-material-outline-business-center"></i>  { job.type == 0 ? "Full Time" : "" }</li>
                        <li><i className="icon-material-outline-account-balance-wallet"></i> { job.commission }%</li>
                        <li><i className="icon-material-outline-access-time"></i> <Moment fromNow ago>{job.created}</Moment></li>
                    </ul>
                </div>
            </a>
        );
    }
}
