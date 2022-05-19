import React, { useContext, useEffect, useRef, useState } from 'react'
import '../App.css';
import del from '../images/delete.png'
import appContext from '../context/appContext'

const Cart = (props) => {
  const context = useContext(appContext)
  const { getallcartitems, cart } = context
  const { quantity, name, position } = props;

  useEffect(() => {
    getallcartitems();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* {console.log(name[position][0].name)}
      {console.log(name[position][0].price)} */}
      {/* {console.log(name[position].name)} */}
      {/* {console.log(name[position][0].image)} */} 
        <div className='cart-items '>
          <div className='cart-item '>
            <img className='cart-item-img' src={name[position][0].image}></img>    
            <div className='cart-details '>
              <h5 className='cart-title '>{name[position][0].name}</h5>
              {/* <img className='del-cart-img' src={del}></img> */}
              <span className='cart-price'>Price: {name[position][0].price} </span>
              <span className='cart-quantity'>Quantity: {quantity}  </span>
              <span className='cart-total'><b>Total : {quantity*name[position][0].price}</b> </span>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart