import React, { Component } from 'react';
import { Session } from 'meteor/session'
import { withTracker } from 'meteor/react-meteor-data';
import { fetch } from '/lib/api/Company';

import CompanyList from '../components/CompanyList';

class CompaniesPage extends Component {

  constructor(props) {
    super(props);
  }

  onChange(e)
  {
    this.setState({[ e.target.name]: e.target.value });
  }

  loadLetterSearch = () => {
    let letters= [];
    for (var i = 65; i <= 90; i++) {
        let charCode = String.fromCharCode(i);
        letters.push(<a href="#" className={Session.get('letter-filter') == charCode ? "current" : ""} key={"ls-" + i} onClick={() => { Session.set('letter-filter', charCode); }}>{charCode}</a>);
    }
    return letters;
  }

  loadCompanies = () => {
    return this.props.companies.map((company) => (
        <CompanyList key={company._id} company={company} />
    ));
  }

  render() {
    const companies = this.props.companies;
    return (
        <div>
            <div>
                <div className="dashboard-content-inner">
                    <div className="dashboard-headline">
                        <h3>Browse Companies</h3>

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
                                <div className="letters-list">
                                    {this.loadLetterSearch()}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                                { companies.length > 0 ? (
                                    <div className="companies-list">
                                        {this.loadCompanies()}
                                    </div>
                                ):(
                                    <div>
                                        <br />
                                        <div id="loadingText">No Company Found.</div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const Companies = withTracker(() => {
    var filter = Session.get('letter-filter') ? {name: new RegExp('^' + Session.get('letter-filter'), 'i')} : {};
    console.log(filter);
    const companies = fetch(filter, {rating: -1});
    return {
        companies
    };
})(CompaniesPage);

export default Companies;