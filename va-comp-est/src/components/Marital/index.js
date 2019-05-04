import React from 'react';
// import './index.css';

function Marital(props) {
  if (props.maritalStatus === "single") {
    return (
      <p><b>Single </b>or Married</p>
    )
  } else {
    return (
      <p>Single or <b>Married</b></p>
    )
  }
}

export default Marital;