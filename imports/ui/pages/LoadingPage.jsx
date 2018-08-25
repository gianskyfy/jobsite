import React, { Component } from 'react';

class LoadingPage extends Component {
  constructor(props) {
    super(props);
  }

  loadLines()
  {
    return Array.apply(0, Array(10)).map((x, i) =>
        <div key={i} className='content-loader--line'></div>
    )
  }

  render() {
    return (
        <div className="dashboard-content-inner" >
                
            <div className="row">
                <div className='content-loader'>
                    { this.loadLines() }
                </div>
            </div>

        </div>
    )
  }
}

export default LoadingPage;