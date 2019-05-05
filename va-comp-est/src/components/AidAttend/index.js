import React from 'react';
// import './index.css';

function AidAttend(props) {
  if (props.aidAttend === "no") {
    return (
      <p className="special-mobile"><b>No </b>or Yes</p>
    )
  } else {
    return (
      <p className="special-mobile">No or <b>Yes</b></p>
    )
  }
}

export default AidAttend;