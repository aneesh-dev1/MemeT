import React from 'react'
import './style/info.css'
function Info(props) {
  return (
    <div className='info'>
        <div className='info__headings'>
            <div className='headings__left'>
               <span >Sl.No</span>
               <span>Product and Description</span>
            </div>
            <div className='headings__right'>
                <span>HSN/SAC</span>
                <span>Qty(pcs)</span>
                <span>Price</span>
                <span>SGST/GST</span>
                <span>Amount</span>
            </div>
            
        </div>
        <div className='info__data1'>
                <span className='slno' >1</span>
                <span className='item'>{props.title1}<br/>({props.color1} {props.fabricType1} T-shirt)</span>
                <span className='number'>{props.codeHSN1}</span>
                <span className='qty'>{props.quantity1}</span>
                <span className='data1__price'>Rs. {props.price1}</span>
                <div className='extra'><span className='percent'>12% </span><span className='value'>Rs. 64.80</span></div>
                <span className='total'>Rs. {props.price1*props.quantity1}</span>
            </div>
        <div className='info__data2'>
                <span className='slno' >2</span>
                <span className='item'>{props.title}<br/>({props.color} {props.fabricType} T-shirt)</span>
                <span className='data2__number'>  {props.codeHSN}</span>
                <span className='qty'>{props.quantity}</span>
                <span className='data1__price'>Rs.{props.price}</span>
                <div className='extra'><span className='percent'>12% </span><span className='value'>Rs. 100.80</span></div>
                <span className='total'>Rs. {props.price*props.quantity}</span>
            </div>
    </div>
  )
}

export default Info