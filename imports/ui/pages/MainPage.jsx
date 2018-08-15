import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="intro-banner" data-background-image="/src/assets/images/home-background.jpg">
      	<div className="container">

      		<div className="row">
      			<div className="col-md-12">
      				<div className="banner-headline">
      					<h3>
      						<strong>Hire experts or be hired for any job, any time.</strong>
      						<br/>
      						<span>Thousands of small businesses use <strong className="color">Salesfy</strong> to turn their ideas into reality.</span>
      					</h3>
      				</div>
      			</div>
      		</div>

      		<div className="row">
      			<div className="col-md-12">
      				<div className="intro-banner-search-form margin-top-95">

      					<div className="intro-search-field">
      						<label htmlFor="intro-keywords" className="field-title ripple-effect">What job you want?</label>
      						<input id="intro-keywords" type="text" placeholder="Job Title or Keywords" />
      					</div>

      					<div className="intro-search-button">
      						<button className="button ripple-effect">Search</button>
      					</div>
      				</div>
      			</div>
      		</div>

      		<div className="row">
      			<div className="col-md-12">
      				<ul className="intro-stats margin-top-45 hide-under-992px">
      					<li>
      						<strong className="counter">1,586</strong>
      						<span>Jobs Posted</span>
      					</li>
      					<li>
      						<strong className="counter">1,232</strong>
      						<span>Salelancers</span>
      					</li>
      				</ul>
      			</div>
      		</div>

      	</div>
      </div>

      <div className="section margin-top-65">
      	<div className="container">
      		<div className="row">
      			<div className="col-xl-12">

      				<div className="section-headline centered margin-bottom-15">
      					<h3>Popular Job Categories</h3>
      				</div>

      				<div className="categories-container">

      					<a href="jobs-grid-layout-full-page.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-file-code-o"></i>
      						</div>
      						<div className="category-box-counter">612</div>
      						<div className="category-box-content">
      							<h3>Web & Software Dev</h3>
      							<p>Software Engineer, Web / Mobile Developer & More</p>
      						</div>
      					</a>

      					<a href="jobs-list-layout-full-page-map.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-cloud-upload"></i>
      						</div>
      						<div className="category-box-counter">113</div>
      						<div className="category-box-content">
      							<h3>Data Science & Analitycs</h3>
      							<p>Data Specialist / Scientist, Data Analyst & More</p>
      						</div>
      					</a>

      					<a href="jobs-list-layout-full-page-map.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-suitcase"></i>
      						</div>
      						<div className="category-box-counter">186</div>
      						<div className="category-box-content">
      							<h3>Accounting & Consulting</h3>
      							<p>Auditor, Accountant, Fnancial Analyst & More</p>
      						</div>
      					</a>
      					<a href="jobs-list-layout-1.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-pencil"></i>
      						</div>
      						<div className="category-box-counter">298</div>
      						<div className="category-box-content">
      							<h3>Writing & Translations</h3>
      							<p>Copywriter, Creative Writer, Translator & More</p>
      						</div>
      					</a>

      					<a href="jobs-list-layout-2.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-pie-chart"></i>
      						</div>
      						<div className="category-box-counter">549</div>
      						<div className="category-box-content">
      							<h3>Sales & Marketing</h3>
      							<p>Brand Manager, Marketing Coordinator & More</p>
      						</div>
      					</a>

      					<a href="jobs-list-layout-1.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-image"></i>
      						</div>
      						<div className="category-box-counter">873</div>
      						<div className="category-box-content">
      							<h3>Graphics & Design</h3>
      							<p>Creative Director, Web Designer & More</p>
      						</div>
      					</a>

      					<a href="jobs-list-layout-2.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-bullhorn"></i>
      						</div>
      						<div className="category-box-counter">125</div>
      						<div className="category-box-content">
      							<h3>Digital Marketing</h3>
      							<p>Darketing Analyst, Social Profile Admin & More</p>
      						</div>
      					</a>

      					<a href="jobs-grid-layout-full-page.html" className="category-box">
      						<div className="category-box-icon">
      							<i className="icon-line-awesome-graduation-cap"></i>
      						</div>
      						<div className="category-box-counter">445</div>
      						<div className="category-box-content">
      							<h3>Education & Training</h3>
      							<p>Advisor, Coach, Education Coordinator & More</p>
      						</div>
      					</a>

      				</div>

      			</div>
      		</div>
      	</div>
      </div>

      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
      	<div className="container">
      		<div className="row">
      			<div className="col-xl-12">

      				<div className="section-headline margin-top-0 margin-bottom-35">
      					<h3>Featured Jobs</h3>
      					<a href="jobs-list-layout-full-page-map.html" className="headline-link">Browse All Jobs</a>
      				</div>

      				<div className="listings-container compact-list-layout margin-top-35">

      					<a href="single-job-page.html" className="job-listing with-apply-button">

      						<div className="job-listing-details">

      							<div className="job-listing-company-logo">
      								<img src="/src/assets/images/company-logo-01.png" alt="" />
      							</div>

      							<div className="job-listing-description">
      								<h3 className="job-listing-title">Bilingual Event Support Specialist</h3>

      								<div className="job-listing-footer">
      									<ul>
      										<li><i className="icon-material-outline-business"></i> Hexagon <div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
      										<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
      										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
      										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
      									</ul>
      								</div>
      							</div>

      							<span className="list-apply-button ripple-effect">Apply Now</span>
      						</div>
      					</a>

      					<a href="single-job-page.html" className="job-listing with-apply-button">

      						<div className="job-listing-details">

      							<div className="job-listing-company-logo">
      								<img src="/src/assets/images/company-logo-05.png" alt="" />
      							</div>

      							<div className="job-listing-description">
      								<h3 className="job-listing-title">Competition Law Officer</h3>

      								<div className="job-listing-footer">
      									<ul>
      										<li><i className="icon-material-outline-business"></i> Laxo</li>
      										<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
      										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
      										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
      									</ul>
      								</div>
      							</div>

      							<span className="list-apply-button ripple-effect">Apply Now</span>
      						</div>
      					</a>

      					<a href="single-job-page.html" className="job-listing with-apply-button">

      						<div className="job-listing-details">

      							<div className="job-listing-company-logo">
      								<img src="/src/assets/images/company-logo-02.png" alt="" />
      							</div>

      							<div className="job-listing-description">
      								<h3 className="job-listing-title">Barista and Cashier</h3>

      								<div className="job-listing-footer">
      									<ul>
      										<li><i className="icon-material-outline-business"></i> Coffee</li>
      										<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
      										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
      										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
      									</ul>
      								</div>
      							</div>

      							<span className="list-apply-button ripple-effect">Apply Now</span>
      						</div>
      					</a>

      					<a href="single-job-page.html" className="job-listing with-apply-button">

      						<div className="job-listing-details">

      							<div className="job-listing-company-logo">
      								<img src="/src/assets/images/company-logo-03.png" alt="" />
      							</div>

      							<div className="job-listing-description">
      								<h3 className="job-listing-title">Restaurant General Manager</h3>

      								<div className="job-listing-footer">
      									<ul>
      										<li><i className="icon-material-outline-business"></i> King <div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
      										<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
      										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
      										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
      									</ul>
      								</div>
      							</div>

      							<span className="list-apply-button ripple-effect">Apply Now</span>
      						</div>
      					</a>

      					<a href="single-job-page.html" className="job-listing with-apply-button">

      						<div className="job-listing-details">

      							<div className="job-listing-company-logo">
      								<img src="/src/assets/images/company-logo-05.png" alt="" />
      							</div>

      							<div className="job-listing-description">
      								<h3 className="job-listing-title">International Marketing Coordinator</h3>

      								<div className="job-listing-footer">
      									<ul>
      										<li><i className="icon-material-outline-business"></i> Skyist</li>
      										<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
      										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
      										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
      									</ul>
      								</div>
      							</div>

      							<span className="list-apply-button ripple-effect">Apply Now</span>
      						</div>
      					</a>

      				</div>

      			</div>
      		</div>
      	</div>
      </div>

      <div className="section margin-top-65 margin-bottom-65">
      	<div className="container">
      		<div className="row">

      			<div className="col-xl-12">
      				<div className="section-headline centered margin-top-0 margin-bottom-45">
      					<h3>Featured Cities</h3>
      				</div>
      			</div>

      			<div className="col-xl-3 col-md-6">
      				<a href="jobs-list-layout-1.html" className="photo-box" data-background-image="/src/assets/images/featured-city-01.jpg">
      					<div className="photo-box-content">
      						<h3>San Francisco</h3>
      						<span>376 Jobs</span>
      					</div>
      				</a>
      			</div>

      			<div className="col-xl-3 col-md-6">

      				<a href="jobs-list-layout-full-page-map.html" className="photo-box" data-background-image="/src/assets/images/featured-city-02.jpg">
      					<div className="photo-box-content">
      						<h3>New York</h3>
      						<span>645 Jobs</span>
      					</div>
      				</a>
      			</div>

      			<div className="col-xl-3 col-md-6">

      				<a href="jobs-grid-layout-full-page.html" className="photo-box" data-background-image="/src/assets/images/featured-city-03.jpg">
      					<div className="photo-box-content">
      						<h3>Los Angeles</h3>
      						<span>832 Jobs</span>
      					</div>
      				</a>
      			</div>

      			<div className="col-xl-3 col-md-6">

      				<a href="jobs-list-layout-2.html" className="photo-box" data-background-image="/src/assets/images/featured-city-04.jpg">
      					<div className="photo-box-content">
      						<h3>Miami</h3>
      						<span>513 Jobs</span>
      					</div>
      				</a>
      			</div>

      		</div>
      	</div>
      </div>

      <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
      	<div className="container">
      		<div className="row">

      			<div className="col-xl-12">
      				<div className="section-headline margin-top-0 margin-bottom-25">
      					<h3>Highest Rated Freelancers</h3>
      					<a href="freelancers-grid-layout.html" className="headline-link">Browse All Freelancers</a>
      				</div>
      			</div>

      			<div className="col-xl-12">
      				<div className="default-slick-carousel freelancers-container freelancers-grid-layout">

      					<div className="freelancer">

      						<div className="freelancer-overview">
      							<div className="freelancer-overview-inner">

      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<div className="verified-badge"></div>
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-big-01.jpg" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="single-freelancer-profile.html">Tom Smith <img className="flag" src="/src/assets/images/flags/sg.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></a></h4>
      									<span>Sales Executive</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="5.0"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Singapore</strong></li>
      									<li>Sales Success <strong>95%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      					<div className="freelancer">

      						<div className="freelancer-overview">
      							<div className="freelancer-overview-inner">

      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<div className="verified-badge"></div>
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-big-02.jpg" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="#">David Peterson <img className="flag" src="/src/assets/images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
      									<span>iOS Expert + Node Dev</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="5.0"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Berlin</strong></li>
      									<li>Rate <strong>$40 / hr</strong></li>
      									<li>Job Success <strong>88%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      					<div className="freelancer">

      						<div className="freelancer-overview">
      							<div className="freelancer-overview-inner">
      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-placeholder.png" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="#">Marcin Kowalski <img className="flag" src="/src/assets/images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>
      									<span>Front-End Developer</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="4.9"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Warsaw</strong></li>
      									<li>Rate <strong>$50 / hr</strong></li>
      									<li>Job Success <strong>100%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      					<div className="freelancer">

      						<div className="freelancer-overview">
      								<div className="freelancer-overview-inner">

      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<div className="verified-badge"></div>
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-big-03.jpg" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="#">Sindy Forest <img className="flag" src="/src/assets/images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top" /></a></h4>
      									<span>Magento Certified Developer</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="5.0"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Brisbane</strong></li>
      									<li>Rate <strong>$70 / hr</strong></li>
      									<li>Job Success <strong>100%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      					<div className="freelancer">

      						<div className="freelancer-overview">
      								<div className="freelancer-overview-inner">

      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-placeholder.png" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="#">Sebastiano Piccio <img className="flag" src="/src/assets/images/flags/it.svg" alt="" title="Italy" data-tippy-placement="top"/></a></h4>
      									<span>Laravel Dev</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="4.5"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Milan</strong></li>
      									<li>Rate <strong>$80 / hr</strong></li>
      									<li>Job Success <strong>89%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      					<div className="freelancer">

      						<div className="freelancer-overview">
      								<div className="freelancer-overview-inner">

      								<span className="bookmark-icon"></span>

      								<div className="freelancer-avatar">
      									<a href="single-freelancer-profile.html"><img src="/src/assets/images/user-avatar-placeholder.png" alt="" /></a>
      								</div>

      								<div className="freelancer-name">
      									<h4><a href="#">Gabriel Lagueux <img className="flag" src="/src/assets/images/flags/fr.svg" alt="" title="France" data-tippy-placement="top" /></a></h4>
      									<span>WordPress Expert</span>
      								</div>

      								<div className="freelancer-rating">
      									<div className="star-rating" data-rating="5.0"></div>
      								</div>
      							</div>
      						</div>

      						<div className="freelancer-details">
      							<div className="freelancer-details-list">
      								<ul>
      									<li>Location <strong><i className="icon-material-outline-location-on"></i> Paris</strong></li>
      									<li>Rate <strong>$50 / hr</strong></li>
      									<li>Job Success <strong>100%</strong></li>
      								</ul>
      							</div>
      							<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
      						</div>
      					</div>

      				</div>
      			</div>

      		</div>
      	</div>
      </div>

      <div className="section padding-top-60 padding-bottom-75">
      	<div className="container">
      		<div className="row">

      			<div className="col-xl-12">
      				<div className="section-headline centered margin-top-0 margin-bottom-35">
      					<h3>Membership Plans</h3>
      				</div>
      			</div>

      		</div>
      	</div>
      </div>
      </div>
    )
  }
}
