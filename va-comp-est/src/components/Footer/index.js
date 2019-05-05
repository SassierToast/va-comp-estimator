import React from 'react';
import './index.css';

function Footer(props) {
  return (
    <footer className="row">
      <div className="col-md-12">
      <p>{props.text}</p>
      </div>
    </footer>
  )
}

export default Footer;