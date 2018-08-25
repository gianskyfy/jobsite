import React, { Component } from 'react';
export default  class MainMenu extends Component {
    constructor(props) {
        super(props);
    }

    urlInclude(urls, currentPage)
    {
        let isUrl = false;

        for(var i in urls)
        {
            if(currentPage.includes(urls[i]))
            {
                isUrl = true;
                continue;
            }
        }

        return isUrl;
    }

    renderMenu()
    {
        let currentPage = FlowRouter._current.path;

        let user = this.props.user;
        if(!user)
        {
            return <div className="menu-loader">
                <div className='menu-loader--line'></div>
                <div className='menu-loader--line'></div>
                <div className='menu-loader--line'></div>
                <div className='menu-loader--line'></div>
                <div className='menu-loader--line'></div>
            </div>
        } 
        else if(user.profile.role_type == 0)
        {
            return <ul data-submenu-title="Overview">
                                        
            <li className={currentPage.includes('/dashboard') ? 'active' : ''}><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
            <li className={currentPage.includes('/postjob' || '/managejob') ? 'active-submenu' : ''}><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
                <ul>
                    <li className={currentPage == '/managejob' ? 'active' : ''}><a href="/managejob">Manage Jobs</a></li>
                    <li className={currentPage == '/postjob' ? 'active' : ''}><a href="/postjob">Post a Job</a></li>
                </ul>	
            </li>
        </ul>
        }
        else if(user.profile.role_type == 1)
        {
        return <ul data-submenu-title="Overview">
                                        
            <li className={currentPage.includes('/dashboard') ? 'active' : ''}><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
            <li className={ this.urlInclude(['applications', 'findjobs', 'viewjob'], currentPage) ? 'active-submenu' : ''}><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
                <ul>
                    <li className={ this.urlInclude(['applications'], currentPage) ? 'active' : ''}><a href="/applications">My Applications</a></li>
                    <li className={ this.urlInclude(['findjobs', 'viewjob'], currentPage)  ? 'active' : ''}><a href="/findjobs">Find jobs</a></li>
                </ul>	
            </li>
        </ul>
        }
    }

    render() {
        return this.renderMenu()
    }
}