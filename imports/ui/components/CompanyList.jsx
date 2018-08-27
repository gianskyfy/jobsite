import React, { Component } from 'react';

export default class Companylist extends Component {
    constructor(props) {
        super(props);
    }

    loadRating = (rating) => {
        const ratings = [];
        for( let i = 0; i < 5; i++) {
            if(rating - i >= 1) {
                ratings.push(<span key={"star" + i} className="star"></span>);
            } else if(rating - i > 0) {
                ratings.push(<span key={"star" + i} className="star half"></span>);
            } else {
                ratings.push(<span key={"star" + i} className="star empty"></span>);
            }
        }
        return ratings;
    }

    render() {
        let company = this.props.company;
        return (
            <a href="single-company-profile.html" className="col-lg-3 col-md-4 company zoomIn animated faster">
                <div className="company-inner-alignment">
                    <span className="company-logo">
                        <img src="/img/companies/1/company-logo.png" alt="" />
                    </span>
                    <h4>{company.name}</h4>
                    <div className="star-rating" data-rating={company.rating}>
                        
                        {this.loadRating(company.rating)}

                    </div>
                </div>
            </a>
        );
    }
}
