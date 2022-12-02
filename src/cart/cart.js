import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToCart, RemoveToCart } from '../redux/Action/Action';
import './cart.css'
import { Increment, Decrement } from '../redux/Action/Action';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // console.log("warn::=>", props.data)
  const counter = useSelector((state) => state.cardItems.cardData);
  // const removeToCart = useSelector((state)=> state)
  // console.warn("removeToCart", removeToCart)


  return (
    <div className='cart-body'>
      <div className='cart-body2'>
        {counter.map((item, index) => {
          return (
            <div className='cart-data' key={index}>
              <div className='cart_img_deals'>
                <img src={item.image} alt={item.name}
                  className="img-thumbnail" />
              </div>
              <div className="cart_img_content">
                <div className="deals2_head">
                  <h4>{item.name}</h4>
                </div>
                <br />
                <div className="cart_deals_copy">
                  <h6 className="h6">₹ {item.price}</h6>
                </div>
                <div className="cart_deals_discCoupon">
                  <span className='h3'>{item.disc}</span>
                </div>
                <div className="cart_count">
                  <span className='h3' onClick={() => props.Decrement(item)}>-</span>
                  <span className='h3'>{item.qty}</span>
                  <span className='h3' onClick={() => props.Increment(item)}>+</span>
                </div>
                <br/>
                <div className="cart_byn">
                  <button type="submit" className="btn btn-success">Place an Order</button>
                  <br />
                  <button type="submit" className="btn btn-danger" onClick={() => props.RemoveToCart(item)}>Remove</button>
                </div>
                &nbsp;
                <div className="cart-item-price">&#x20B9;{(item.qty * item.price).toFixed(2)}<span></span></div>
              </div>
            </div>

          )
        })
        }
      </div>
      <div className='cart-total'>

        <div className='cart-total-data'>
          <div className='cart-data-total'>Total Cost:&emsp; <span style={{fontVariant: 'small-caps', fontWeight: '600'}}>&#x20B9;{counter.reduce((sum, i) => (
            sum += i.qty * i.price
          ), 0).toFixed(2)}</span>
          </div>
          <div className='cart-data-total'>Quantity:&emsp; <span style={{fontVariant: 'small-caps', fontWeight: '600'}}>{counter.reduce((sum, i) => (sum +=i.qty), 0)}</span></div>
          <br />
          <div className='cart-data-totals total'><Link to={`:id`}> <span>place an order</span></Link></div>
        </div>

      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  data: state.cardItems.cardData
})
const mapDispatchToProps = (dispatch) => ({
  addToCardHandler: (data) => dispatch(addToCart(data)),
  RemoveToCart: (data) => dispatch(RemoveToCart(data)),
  Increment: (data) => dispatch(Increment(data)),
  Decrement: (data) => dispatch(Decrement(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// export default cart;
