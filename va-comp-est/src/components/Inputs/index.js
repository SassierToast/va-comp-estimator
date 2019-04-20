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
              {/* Effective Date Selector */}
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
              {/* Two toggle switches */}
              <div className="row">
                <div className="col-md-6 text-center">
                  <p>Single/Married</p>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="maritalStatus" />
                    <label className="custom-control-label" for="maritalStatus"></label>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <p>Spouse Aid and Attendance</p>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="spAA" />
                    <label className="custom-control-label" for="spAA"></label>
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
