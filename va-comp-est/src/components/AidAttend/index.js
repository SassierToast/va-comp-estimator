import React from 'react';
// import './index.css';

function AidAttend(props) {
  if (props.aidAttend === "no") {
    return (
      <p><b>No </b>or Yes</p>
    )
  } else {
    return (
      <p>No or <b>Yes</b></p>
    )
  }
}

export default AidAttend;