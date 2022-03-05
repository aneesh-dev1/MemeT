import React from "react";
import Memet from "../assets/Memet.png";
import rlogo from "../assets/rlogo.png";
import "./style/head.css";
function Head() {
  return (
    <div className="invoice">
      <div className="invoice__left">
        <div className="left__memeT">
          <img src={Memet} alt="logo" className="memet__logo" />
        </div>
        <div className="left__add">
          <span className="left__add__head">Meme - T</span>
          <span className="left__add__body">
            Shreenath Plaza, Ajmer Road, Bhankrota
            <br />
            Jaipur, Rajasthan, 302026
            <br />
            India
            <br />
            29ABG0254789741
            <br />
            memet.manager@gmail.com
          </span>
        </div>
      </div>
      <div className="invoice__right">
        <img src={rlogo} className="right__rlogo" />
      </div>
    </div>
  );
}
export default Head;
