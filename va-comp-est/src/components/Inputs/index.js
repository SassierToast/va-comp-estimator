import React, { Component } from 'react';
import './index.css';

// need to make this a stateful component so responses get saved.
class Inputs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6 offset-md-3 input-box">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <select className="form-control" id="effective-date">
                      <option value="" selected disabled hidden>Effective Date</option>
                      <option value="20181201">12/01/2018</option>
                      <option value="20171201">12/01/2017</option>
                      <option value="20161201">12/01/2016</option>
                      <option value="20141201">12/01/2015</option>
                      <option value="20141201">12/01/2014</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs;
