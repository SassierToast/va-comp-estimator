import React from 'react';
import './index.css';

function Results(props) {

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-6 offset-md-3 output-box text-center">
          <h3>Estimated Monthly Payment</h3>
          <br />
          <h3>${props.result}</h3>
        </div>
      </div>
    </div>
  )

}

export default Results;