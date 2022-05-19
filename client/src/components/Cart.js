import React, { useContext, useEffect, useRef, useState } from 'react'
import CartItem from './CartItem'
import appContext from '../context/appContext'
const Cart = (props) => {

    const { setprogress, showAlert, alert } = props
    props.setprogress(0)
    const context = useContext(appContext)
    const { getallcartitems, cart, cartfood } = context
    const runCallback = (cb) => {
        return cb();
    };

    useEffect(() => {
        getallcartitems()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div  >
                <h1 className=' cart-heading'>Cart</h1>
            </div>
            <div className='row my-3'>

                {cart.map((element) => {
                    let j = -1
                    return element['quantity'].map((i) => {
                        j++
                        return <CartItem key={i._id} name={cartfood} position={j} quantity={i.quantity} />
                    })
                })
                }
                {/* {cart.map((element) => {
                    let j = -1
                    let food=element['name'];
                    return element['quantity'].map((i) => {
                        j++;
                        return <CartItem key={i._id} name={food} position={j} quantity={i.quantity} />
                    })
                })
                } */}
            </div>
        </>
    )
}
export default Cart