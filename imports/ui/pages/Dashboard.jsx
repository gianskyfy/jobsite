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
        <Joblist key={job._id} job={job} />
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
                                    <div id="loadingText">No Jobs Found. <br />Please post a new one.</div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

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