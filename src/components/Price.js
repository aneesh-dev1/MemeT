import React from "react";
import './style/price.css';
function Price(props) {
  return (
    <div className="price">
      <div className="price__left">
        <span className="left__line1">Total in Words<br/></span>
        <span className="left__line2"><i>One Thousand Five Hundred and Forty Five </i><br/></span>
        <span className="left__line3">Thank you for your purchase </span>
      </div>
      <div className="price__right">
        <div className="price__subleft">
          <span className="subtotal">Subtotal</span>
          <span className="subtotal">SGST/GST 12(12%)</span>
          <span className="subtotal">Total</span>
          <span className="subtotal">Delivery Charges</span>
          <span className="final">Total</span>
        </div>
        <div className="price__subright">
        <span className="value">Rs. {props.subTotal}</span>
          <span className="value">Rs.{props.taxAmount}</span>
          <span className="value">Rs. {props.amount}</span>
          <span className="value">Rs. 0.00</span>
          <span className="final_value">Rs. {props.amount}</span>
        </div>
      </div>
    </div>
  );
}

export default Price;
