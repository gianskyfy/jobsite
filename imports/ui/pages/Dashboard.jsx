import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { fetch } from '/lib/api/Jobs';

//import components
import Joblist from '../components/Joblist';

//import scripts
import LayoutScripts from "../js/layoutscripts";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new LayoutScripts().load();
  }

  renderJobs() {
    if(this.props.jobs != null)
    {
        return this.props.jobs.map((job) => (
        <Joblist key={job._id} />
        ));
    }
    else{
        return <div>123</div>
    }
  }

  render() {
    return (
        <div className="dashboard-content-inner" >
                
            <div className="dashboard-headline">
                <h3>Overview</h3>

                <nav id="breadcrumbs" className="dark">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </nav>
            </div>

            <div className="row">

                <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">

                        <div className="headline">
                            <h3><i className="icon-material-outline-business-center"></i> My Job Postings</h3>
                        </div>

                        <div className="content">
                            <ul className="dashboard-box-list">
                                {this.props.jobs.length !== 0 ? (
                                    this.renderJobs()
                                ) : (
                                    <div id="loadingText">Loading Jobs...</div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="dashboard-footer-spacer"></div>
            <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                    © 2018 <strong>Salefy</strong>. All Rights Reserved.
                </div>
                <ul className="footer-social-links">
                    <li>
                        <a href="#" title="Facebook" data-tippy-placement="top">
                            <i className="icon-brand-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Twitter" data-tippy-placement="top">
                            <i className="icon-brand-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Google Plus" data-tippy-placement="top">
                            <i className="icon-brand-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="LinkedIn" data-tippy-placement="top">
                            <i className="icon-brand-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </div>

        </div>
    )
  }
}

const Dashboard = withTracker(() => {
  const jobs = fetch();
  return {
    jobs,
  };
})(DashboardPage);

export default Dashboard;