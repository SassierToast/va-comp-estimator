
import React from 'react';
import './index.css';

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        Welcome to the VA Disability Compensation Estimator
      </h1>
      <p className="lead">
        Use this tool to estimate your monthly VA Disability Compensation benefits based on your combined evaluation for compensation.
      </p>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Definitions</button>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">About</button>

      <div className="row">
        <div className="col-md-6">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              <h5>Definitions</h5>
              <p><b>Effective Date:</b> The date from which you wish to estimate benefits. Rates generally change on December 1 each year.</p>
              <p><b>Spouse Aid and Attendance:</b> An additional monthly benefit awarded if your spouse meets certain medical criteria.</p>
              <p><b>Dependent Parents:</b> Parents who meet certain criteria demonstrating their financial dependence upon you.</p>
              <p><b>Minor Children:</b> Biological, adopted, or step children under the age of 18.</p>
              <p><b>School Children:</b> Biological, adopted, or step children between the ages of 18 and 23 who are attending school.</p>
              <p><b>Combined Evaluation for Compensation:</b> Usually found near the end of the Rating Codesheet. This is the percentage upon which benefits are based.</p>
              <p>To file a claim for disability compensation, please visit <a href="https://www.va.gov/disability/how-to-file-claim/" target="_blank" rel="noopener noreferrer">https://www.va.gov/disability/how-to-file-claim/</a>.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="collapse multi-collapse" id="multiCollapseExample3">
            <div className="card card-body">
              <h5>About</h5>
              <p>Version 1.0.0 of this VA Disability Compensation Estimator was released by Eric Hove in May 2019.</p>
              <p>The GitHub repository for this project may be found <a href = "https://github.com/eghove/va-comp-estimator" target="_blank" rel="noopener noreferrer">here.</a></p>
              <p>You may learn more about Eric Hove by visiting <a href = "https://eghove.github.io/" target="_blank" rel="noopener noreferrer">here.</a></p>
              <p><b>Disclaimer:</b> The VA Disability Compensation Estimator is not affiliated with the U.S. Department of Veterans Affairs, and is intended for educational purposes only. Any estimate displayed is unofficial and should not be construed as a promise of monetary benefits. To file a claim for disability compensation, please visit <a href="https://www.va.gov/disability/how-to-file-claim/" target="_blank" rel="noopener noreferrer">https://www.va.gov/disability/how-to-file-claim/</a>.</p>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Jumbotron;
