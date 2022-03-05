import React from "react";
import "./App.css";
import Head from "./components/Head";
import Tax_Head from "./components/Tax_Head";
import Info from "./components/Info";
import Price from "./components/Price";
import Summary from "./components/Summary";

const  App = () => {
  return (
    <React.Fragment>
      <Head />
      <Tax_Head/>
      <Info
        title1="Casual Bengali Pun"
        color1="Black"
        fabricType1="Cotton"
        codeHSN1="07001250"
        quantity1="1"
        price1="540"
        title="Marathi Pun"
        color="Red"
        fabricType="Polo"
        codeHSN="02145698"
        quantity="2"
        price="420"
      />
      <Price
        subTotal="1380.00" //Sub Total
        taxAmount="165.00" //SGST/IGST
        amount="1545.00" // Total
        delivery="0.00"
      />
      <Summary codeHSN="07001250" taxAmount="1380.00" gst="165.00"/>
    </React.Fragment>
  );
}

export default App;
