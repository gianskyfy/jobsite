import React, { Component, Text } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, getUser } from '../../reducers/actions/authActions';
import { isHeadMain } from '../../reducers/actions/componentActions';

// import helpers
import Modal from 'react-modal';

// import external scripts
import HeaderScripts from '../js/headerscripts.jsx';
// import Navigation Menu
import NavMenu from './NavMenu.jsx';
import HeaderRight from './HeaderRight.jsx';

// set up modal
const customStyles = { content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
}};

Modal.setAppElement('body');

class HeaderBar extends Component {
  constructor(props)
  {
    super(props);

    this.Menus = [
      { _id: 1, name: 'Home', sub: [] },
      { _id: 2, name: 'For Salelancers',
        sub: [{ _id: 3, name: "Browse Companies"}, { _id: 4, name: "Browse Jobs"}] },
      { _id: 5, name: 'For Employers',
        sub: [{ _id: 6, name: "Find Saleslancers"}]  },
    ];

    this.state = { 
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // bind onchange
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.props.isHeadMain();
    if(this.props.getUser());
  }

  componentDidMount() {
    new HeaderScripts().load();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loadMenus() {
      return this.Menus.map((menu) => (
          <NavMenu key={menu._id} menu={menu} />
      ));
  }
  
  onChange(e)
  {
    this.setState({[ e.target.name]: e.target.value });
  }

  onClick(e)
  {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    let navs;
    if(this.props.showHeaderMenu)
    {
        navs =<nav id="navigation"><ul id="responsive"> {this.loadMenus()} </ul></nav>;
    }

    return (
      <div>
        <header id="header-container"  className="fullwidth " >
        	<div id="header">
        		<div  className="container">

        			<div  className="left-side">
                <div id="logo">
                    <img src="/img/logo.png" />
                </div>
                { navs }
                <div  className="clearfix"></div>
        			</div>

              <HeaderRight signin={ this.openModal } />
        		</div>
        	</div>

        </header>
        <div  className="clearfix"></div>

        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <div className="modal">
              <div className="title">
                <h2>Sign In</h2>
                <button onClick={this.closeModal}>close</button>
              </div>
              <div className="body">
                <div>
                  <img className="modal-logo" src="/img/logo.png" />
                </div>
                <form>
                  <label>Username</label>
                  <input id="uname" name="username" value={this.state.username} onChange={ this.onChange } />

                  <label>Password</label>
                  <input id="pword" name="password" value={this.state.password} onChange={ this.onChange } />
                  <label className="small-note blue">Not yet registered? Click <a href="#">Here</a></label>
                  <label className="small-note blue">Forgot your password? Click <a href="#">Here</a></label>
                  <button className="button ripple-effect" onClick={this.onClick}>Sign In</button>
                </form>
              </div>
            </div>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  if(state.component != null)
    return { showHeaderMenu: state.component.showMenu }
  else
    return { }
}

export default connect(mapStateToProps, { isHeadMain, login, getUser })(HeaderBar);