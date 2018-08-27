import React, { Component } from 'react';
import { fetchApplications } from '/lib/api/UserApplication';
import { withTracker } from 'meteor/react-meteor-data';
import ApplicationList from "../components/ApplicationList";

//import scripts
import LayoutScripts from "../js/layoutscripts";

class ApplicationsPage extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
	new LayoutScripts().load();
  }

  onChange(e)
  {
    this.setState({[ e.target.name]: e.target.value });
  }

  loadApplications()
  {
    return this.props.jobs.map((job) => (
        <ApplicationList key={job._id} job={job} />
    ));
  }

  render() {

    return (
        <div>
            <div>
                <div className="dashboard-content-inner">
                    <div className="dashboard-headline">
                        <h3>My Applications</h3>

                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Applications</a></li>  
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">

                                <div className="headline">
                                    <h3><i className="icon-material-outline-business-center"></i> Applied Jobs</h3>
                                </div>

                                <div className="content">
                                    <ul className="dashboard-box-list">
                                        { this.props.jobs.length == 0 ? (
                                            <div id="loadingText">No Application Found. <br />
                                            <small>Let's go make some!</small></div>
                                        ):(
                                            this.loadApplications()
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const Applications = withTracker(() => {
    const jobs = fetchApplications();
    return {
        jobs
    };
})(ApplicationsPage);

export default Applications;