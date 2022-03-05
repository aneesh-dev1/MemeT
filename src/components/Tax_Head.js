import React from "react";
import { order } from "../data/order";
import { address } from "../data/address";
import "./style/tax.css";
function Tax_Head() {
  return (
    <>
      <div className="tax">
        <span className="tax__head">TAX INVOICE</span>
        <span className="tax__date">25th November, 2022</span>
        <div className="tax__box1">
          <div className="box1__left">
            <div className="left__query">
              <span className="query">Invoice No. </span>
              <br />
              <span className="query">Invoice Date</span>
              <br />
              <span className="query">Due Date</span>
              <br />
            </div>

            <div className="left__result">
              {order.map((data, key) => {
                return (
                  <div key={key}>
                    <p>:{data.__id}</p>

                    <p>:{data.createdAt}</p>

                    <p>:{data.dueDate}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="box1__right">
            <div className="right__query">
              <span className="query__1">Place of Supply </span>
              <br />
              <span className="query__1">Reciept No.</span>
              <br />
            </div>
            <div className="right__result">
              {order.map((data, key) => {
                return (
                  <div key={key}>
                    <p>:{data.placeOfSupply}</p>

                    <p>:{data.receipt}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="tax__address">
        <div className="address__billadd">Bill To,</div>
        <div className="address__shipadd">Ship To,</div>
      </div>

      <div className="tax__box2">
        <div className="box2__left">
          {address.map((data, key) => {
            return (
              <div key={key}>
                <span className="left__name">{data.recipientName},</span>
                <span className="left__add">{data.firstLine}</span>
                <span className="left__add">{data.secondLine}</span>
                <span className="left__add">{data.state}</span>
                <span className="left__add">India</span>
                <span className="left__add">GSTIN</span>
                <span className="left__add">{data.contact}</span>
              </div>
            );
          })}
        </div>
        <div className="box2__right">
          {address.map((data, key) => {
            return (
                <>
                <span className="right__name">{data.recipientName}</span>
                <span className="right__add">{data.firstLine}</span>
                <span className="right__add">
                  {data.secondLine},{data.state}
                </span>
                <span className="right__add">{data.state}</span>
                <span className="right__add">India</span>
                <span className="right__add">{data.contact}</span>
                </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tax_Head;
