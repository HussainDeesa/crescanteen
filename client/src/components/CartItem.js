import React, { useContext, useEffect, useRef, useState } from 'react'
import '../App.css';
import del from '../images/delete.png'
import appContext from '../context/appContext'

const Cart = () => {
  const context = useContext(appContext)
  const { getallcartitems, cart } = context
  const runCallback = (cb) => {
    return cb();
  };
  useEffect(() => {
    getallcartitems()
    // eslint-disable-next-line
  }, [])

  return (
    <>
 

          <div className='container' >
            <h1 className=' cart-heading'>Cart</h1>
            <div className='cart-items container'>
              <div className='cart-item '>
                <img className='cart-item-img' src="https://th.bing.com/th/id/OIP.Kswr8LI4_fyWelxsf5zp8gHaEV?w=288&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                <div className='cart-details '>
                  <h5 className='cart-title '>Demo</h5>
                  <img className='del-cart-img' src={del}></img>
                  <span className='cart-price'>Price: </span>
                  <span className='cart-quantity'>Quantity: </span>
                  <span className='cart-total'>Total: </span>
                </div>
              </div>

            </div>
          </div>
        

    </>
  )
}

export default Cart