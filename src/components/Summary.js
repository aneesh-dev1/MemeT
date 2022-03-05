import React from "react";
import "./style/summary.css";
function Summary(props) {
  return (
    <div className="summary">
      <div className="summary__title">HSN/SAC Summary:</div>

      <div className="summary__headings">
        <span className="value" >HSN/SAC</span >
        <span className="value" >Taxable Amount</span >
        <span className="value">SGST/IGST</span >
        <span className="value">Total Tax Amount</span >
      </div>
      <div className="summary__value">
      <span className="value" >{props.codeHSN}</span >
        <span className="value" >Rs.{props.taxAmount}</span >
        <span className="value"> <span className="value1">12%  Rs {props.gst}</span></span >
        <span className="value">Rs. {props.gst}</span >
      </div>
      <div className="summary__final">
      <span className="value" >Total</span >
        <span className="value" >Rs.{props.taxAmount}</span >
        <span className="value"> <span className="value1">Rs {props.gst}</span></span >
        <span className="value">Rs. {props.gst}</span >
      </div>
    </div>
  );
}

export default Summary;
