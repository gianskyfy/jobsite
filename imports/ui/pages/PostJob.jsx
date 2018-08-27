import React, { Component } from 'react';
import { insert } from '/lib/api/Jobs';

import Select from 'react-select';

//import scripts
import LayoutScripts from "../js/layoutscripts";
import InputScripts, {customStyles} from "../js/inputscripts";
LocalTagsCollection = new Meteor.Collection("LocalTags", {connection: null});
class PostJob extends Component {
  constructor(props) {
		super(props);
		
		this.postJob = this.postJob.bind(this);
		this.onChange = this.onChange.bind(this);
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

  postJob(e) {
	let Tags = [];

	LocalTagsCollection.find().fetch().map((job) => (
			Tags.push(job.TagName)
	));

	insert.call({
			title: this.state['job-title'],
			location: this.state['job-location'],
			type: Number.parseFloat(this.state['job-type']),
			tags: Tags,
			commission: Number.parseFloat(this.state['job-commission']),
			description: this.state['job-description']
	  }, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				FlowRouter.go("/dashboard");
			}
	  });
  }

  render() {
    return (
        <div className="dashboard-content-inner" >
			
			<div className="dashboard-headline">
				<h3>Post a Job</h3>

				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Dashboard</a></li>
						<li>Post a Job</li>
					</ul>
				</nav>
			</div>
	
			<div className="row">

				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						<div className="headline">
							<h3><i className="icon-feather-folder-plus"></i> Job Submission Form</h3>
						</div>

						<div className="content with-padding padding-bottom-10">
							<div className="row">

								<div className="col-xl-8">
									<div className="submit-field">
										<h5>Job Title</h5>
										<input name="job-title" onChange={this.onChange} type="text" className="with-border" />
									</div>
								</div>

								<div className="col-xl-4">
									<div className="submit-field">
										<h5>Job Type</h5>

										<Select
											name="job-type"
											styles={customStyles}
											className="with-border"
											onChange={this.onChange}
											options={[
												{ value: 0, label: 'Full Time' },
												{ value: 1, label: 'Part Time' }
											]} />
									</div>

									
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>Location</h5>
										<div className="input-with-icon">
											<div id="autocomplete-container">
												<input name="job-location" onChange={this.onChange} id="autocomplete-input" className="with-border" type="text" placeholder="Type Address" />
											</div>
											<i className="icon-material-outline-location-on"></i>
										</div>
									</div>
								</div>

								<div className="col-xl-2">
									<div className="submit-field">
										<h5>Commision %</h5>
										<div className="input-with-icon">
											<input name="job-commission" onChange={this.onChange} className="with-border" type="text" placeholder="Min" />
											<i className="currency">%</i>
										</div>
									</div>
								</div>

								<div className="col-xl-4">
									<div className="submit-field">
										<h5>Tags <span>(optional)</span>  <i className="help-icon" data-tippy-placement="right" title="Maximum of 10 tags"></i></h5>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input name="job-tags" onChange={this.onChange} type="text" className="keyword-input with-border" placeholder="e.g. job title, responsibilites" />
												<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
											</div>
											<div className="keywords-list"></div>
											<div className="clearfix"></div>
										</div>

									</div>
								</div>

								<div className="col-xl-12">
									<div className="submit-field">
										<h5>Job Description</h5>
										<textarea name="job-description" onChange={this.onChange} cols="30" rows="5" className="with-border"></textarea>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-12">
					<a href="#" onClick={this.postJob} className="button ripple-effect big margin-top-30 pull-right">
						<i className="icon-feather-plus"></i> Post a Job
					</a>
				</div>

			</div>

		</div>
    )
  }
}

export default PostJob;