import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.min.js';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    parent = this;
    parent.fullPageScrollbar();
    
    $(window).on('load resize', function() {
		var headerHeight = $("#header-container").outerHeight();
        var windowHeight = $(window).outerHeight() - headerHeight;

        
        $('.full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container').css({ height: windowHeight });
        $('.dashboard-content-inner').css({ 'min-height': windowHeight });

        parent.fullPageScrollbar();
	});
  }

  fullPageScrollbar() {
    $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(function(i, elem) {
        var headerHeight = $("#header-container").outerHeight();
        var windowHeight = $(window).outerHeight() - headerHeight;
        var sidebarContainerHeight = $(elem).find(".sidebar-container, .dashboard-nav-container").outerHeight();

        // Enables scrollbar if sidebar is higher than wrapper
        if (sidebarContainerHeight > windowHeight) {
            $(elem).css({ height: windowHeight });
    
        } else {
            $(elem).find('.simplebar-track').hide();
        }
    });

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
                            <h3><i className="icon-material-outline-business-center"></i> My Job Applications</h3>
                        </div>

                        <div className="content">
                            <ul className="dashboard-box-list">
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
                                        <a href="dashboard-manage-candidates.html" className="button ripple-effect">
                                            <i className="icon-material-outline-supervisor-account"></i> Manage Applciation
                                        </a>
                                        <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                                        <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                    </div>
                                </li>
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

export default Dashboard;