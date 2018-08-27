import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { fetch } from '/lib/api/Jobs';

import FindJoblist from '../components/FindJoblist';

//import scripts
import LayoutScripts from "../js/layoutscripts";
import InputScripts, {customStyles} from "../js/inputscripts";
LocalTagsCollection = new Meteor.Collection("LocalTags", {connection: null});

class FindJobPage extends Component {
  constructor(props) {
	super(props);

  }

  componentDidMount() {
	let inputScripts = new InputScripts();
	new LayoutScripts().load();
	inputScripts.loadTag(LocalTagsCollection);
  }

  onChange(e)
  {
	if(e.target)
		this.setState({[ e.target.name]: e.target.value });
	else
		this.setState({ "job-type": e.value });
  }

  loadJobs()
  {
    return this.props.jobs.map((job) => (
        <FindJoblist key={job._id} job={job} />
    ));
  }

  render() {
    return (
        <div>
            <div className="dashboard-content-inner" >
                
                <div className="dashboard-headline">
                    <h3>Find Jobs</h3>

                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Dashboard</a></li>
                            <li>Find Jobs</li>
                        </ul>
                    </nav>
                </div>
        
                <div className="row">
                    <div className="listings-container grid-layout margin-top-35">
                    {this.props.jobs.length == 0 ? (
                        <div id="loadingText">No Jobs Posted.</div>
                    ) : (
                         this.loadJobs()
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const FindJob = withTracker(() => {
    const jobs = fetch();
    return {
      jobs,
    };
  })(FindJobPage);

export default FindJob;