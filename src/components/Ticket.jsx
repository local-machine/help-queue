import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return(
    <div>
      <style jsx>{`
      body {
        font-family: Helvetica;
      }
      .box {
        border: none;
        display: block;
        border-bottom: 2px solid #fff;
        margin-bottom: 10px;
      }
      .box:hover {
        border-bottom: 2px solid #ccc;
        outline: 0;
        background-color: lightgray;
      }
      a {
        color: #888;
        text-decoration: none;
      }
    `}</style>
      <div className="box">
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
