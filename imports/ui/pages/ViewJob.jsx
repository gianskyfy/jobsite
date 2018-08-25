import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { fetch } from '/lib/api/Jobs';
import Moment from 'react-moment';

import ApplyModal from "../components/ApplyModal";

//import scripts
import LayoutScripts from "../js/layoutscripts";
let popup;
let shownModal;
class ViewJobPage extends Component {

  constructor(props) {
    super(props);
    
    this.showModal = this.showModal.bind(this)
  }

  componentDidMount() {
	new LayoutScripts().load();
  }

  onChange(e)
  {
    this.setState({[ e.target.name]: e.target.value });
  }

  showModal(e)
  {
    if(e.type == 'click' || (e.type == "keydown" && e.keyCode == 27))
    {
        if(!popup)
        {
            popup = document.createElement("div");
            popup.id = "mainApplyModal";
            document.body.appendChild(popup);
        }

        shownModal = shownModal ? false : true;
        
        if(shownModal)
            document.addEventListener("keydown", this.showModal);
        else
            document.removeEventListener("keydown", this.showModal);

        ReactDOM.render(shownModal ? <ApplyModal job={this.props.jobs[0]} showModal={this.showModal} /> : "", popup);
    }
  }

  render() {
    const job = (this.props.jobs) ? this.props.jobs[0] : null;
    return (
        (!job) ?
        (
            <div>Loading...</div>
        ) : (
        <div>
            <div className="col-lg-12" >
                
                <div className="row">
                    <div className="single-page-header" style={{width: "100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-page-header-inner">
                                        <div className="left-side">
                                            <div className="header-image"><a href="/img/companies/1/company-logo.png"><img src="/img/companies/1/company-logo.png" alt="" /></a></div>
                                            <div className="header-details">
                                                <h3>{job.Title}</h3>
                                                <h5>About the Employer</h5>
                                                <ul>
                                                    <li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> {job.owner.company.name}</a></li>
                                                    <li>
                                                        <div className="star-rating" data-rating="4.9">
                                                            <span className="star"></span><span className="star"></span>
                                                            <span className="star"></span><span className="star"></span>
                                                            <span className="star"></span>
                                                        </div>
                                                    </li>
                                                    <li><i className="icon-material-outline-location-on"></i> { job.Location }</li>
                                                    <li><div className="verified-badge-with-title">Verified</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="background-image-container"></div>
                    </div>

                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-8 col-lg-8 content-right-offset">

                                <div className="single-page-section">
                                    <h3 className="margin-bottom-25">Job Description</h3>
                                    <p>{ job.Description }</p>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar-container">

                                    <a href="#" onClick={ this.showModal } className="apply-now-button popup-with-zoom-anim">Apply Now <i className="icon-material-outline-arrow-right-alt"></i></a>
                                        
                                    <div className="sidebar-widget">
                                        <div className="job-overview">
                                            <div className="job-overview-headline">Job Summary</div>
                                            <div className="job-overview-inner">
                                                <ul>
                                                    <li>
                                                        <i className="icon-material-outline-location-on"></i>
                                                        <span>Location</span>
                                                        <h5>{job.Location}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-business-center"></i>
                                                        <span>Job Type</span>
                                                        <h5>{ job.Type == 0 ? "Full Time" : "" }</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-local-atm"></i>
                                                        <span>Commission</span>
                                                        <h5>{job.Commission}%</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-access-time"></i>
                                                        <span>Date Posted</span>
                                                        <h5><Moment fromNow ago>{job.created}</Moment></h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    )
  }
}

const ViewJob = withTracker(() => {
    const jobs = fetch({_id: FlowRouter._current.params.jobid});
    return {
      jobs,
    };
})(ViewJobPage);

export default ViewJob;