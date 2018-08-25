import React, { Component } from 'react';
import { insert } from '/lib/api/UserApplication';
class ApplyModal extends Component {
    constructor(props) {
        super(props);

        this.apply = this.apply.bind(this);
    }

    onChange(e)
    {
        this.setState({[ e.target.name]: e.target.value });
    }

    apply()
    {
        let job = this.props.job;
        insert.call({
            job: job
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                FlowRouter.go("/dashboard");
            }
        });
    }

    render() {
        let css = {top: "0px", position: "absolute", height: "920px"};
        return  <div id="mainApplyModalContent">
            <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready" tabIndex="-1" style={css}><div className="mfp-container mfp-inline-holder"><div className="mfp-content"><div id="small-dialog" className="zoom-anim-dialog dialog-with-tabs">
                <div className="sign-in-form">

                    <ul className="popup-tabs-nav">
                        <li className="active"><a href="#tab">Apply Now</a></li>
                    </ul>

                    <div className="popup-tabs-container">

                        <div className="popup-tab-content" id="tab">
                            
                            <div className="welcome-text">
                                <h3>Make your pitch!</h3>
                            </div>
                                
                            <form method="post" id="apply-now-form">
                                    <textarea type="text" className="input-text with-border" name="name" id="name" placeholder="I'm awesome!" required="" />
                            </form>
                            
                            <button onClick={ this.apply } className="button margin-top-35 full-width button-sliding-icon ripple-effect" type="button" form="apply-now-form">Apply Now <i className="icon-material-outline-arrow-right-alt"></i></button>

                        </div>

                    </div>
                </div>
                <button title="Close (Esc)" type="button" className="mfp-close" onClick={this.props.showModal}></button></div></div></div>
            </div>
        </div>
    }
}

export default ApplyModal;