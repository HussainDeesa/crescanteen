import React, { useContext, useEffect, useRef, useState } from 'react'
import CartItem from './CartItem'
import appContext from '../context/appContext'
const Cart = (props) => {

    const { setprogress, showAlert, alert } = props
    props.setprogress(0)
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
            <div className='row my-3'>

            {cart.map((element) => {
                return element['name'].map((i)=>{
                    <CartItem key={i._id} cart={element}  />
                })
            }) 
            }
            {/* <CartItem/> */}
            </div>
        </>
    )
}

export default Cart