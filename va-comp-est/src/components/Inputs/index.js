import React, { Component } from 'react';
import Results from '../Results'
import './index.css';

// need to make this a stateful component so responses get saved.
class Inputs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6 offset-md-3  input-box">
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
              <div className="row inputs-section">
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
              {/* Radio buttons for dependent parents */}
              <div className="row inputs-section">
                <div className="col-md-12 text-center">
                  <p>Dependent Parents</p>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">None</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">One</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label className="form-check-label" for="inlineRadio3">Two</label>
                  </div>
                </div>
              </div>
              {/* Scroll selectors for children */}
              <div className="row inputs-section">
                <div className="col-md-6 text-center">
                  <p>Children Under 18</p>
                  <form>
                    <div className="col-auto my-1">
                      <label className="mr-sm-2 sr-only" for="depChildren18">Dependent Children Under 18</label>
                      <select className="custom-select mr-sm-2" id="depChildren18">
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 text-center">
                  <p>Children Between 18 and 23 attending school</p>
                  <form>
                    <div className="col-auto my-1">
                      <label className="mr-sm-2 sr-only" for="depChildrenSchool">Dependent Children Under 18</label>
                      <select className="custom-select mr-sm-2" id="depChildrenSchool">
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              {/* Slider for combined evaluation for compensation percentage */}
              <div className="row inputs-section">
                <div className="col-md-12">
                  <label for="compRating">Combined Evaluation for Compensation</label>
                  <input type="range" className="custom-range" min="0" max="100" step="10" id="compRating"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Results></Results>
      </div>
    )
  }
}

export default Inputs;
