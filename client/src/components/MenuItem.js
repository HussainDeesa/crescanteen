import React, { useContext, useState } from 'react'
import appContext from "../context/appContext"

const MenuItem = (props) => {
    const Context = useContext(appContext)
    const { getallmenu, getallcartitems } = Context
    const { menu,setprogress } = props;
    const [cart, setCart] = useState({ food_id: '', quantity: '1' })
   
    // getallcartitems();
    const handleOnChange = (e) => {
        setCart({ ...cart, [e.target.name]: e.target.value })

    }
    const addToCart = async (id) => {
        const response = await fetch(`api/cart/addtocart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')

            },
            body: JSON.stringify({ food_id: id, quantity: cart.quantity })
        });
        setprogress(85)
        setTimeout(() => {
            getallcartitems()
            setprogress(100)
        }, addToCart);
    }
    const handleAddToCart = (id) => {
        setprogress(25)
        // e.preventDefault()
            addToCart(id, () => {
            })
        
        // console.log('clicked add to cart');
    }
    return (
        <div className="card menu-card" style={{ width: '18rem' }}>
            <img src={menu.image} className="card-img-top menu-img" alt="..." />
            <span className="position-absolute category-badge badge translate-middle  rounded-pill">
                {menu.category}
            </span>

            <div className="card-body">
                <h5 className="card-title" id='name'>{menu.name}</h5>
                <p className="card-text" id='price'>Price: ₹{menu.price}</p>
                <form >
                    <label htmlFor="description" className="label-quantity">Quantity: </label>
                    <select value={cart.quantity} className='input-quantity' name='quantity'onChange={handleOnChange} required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                 
                    <div className='add-to-cart '>
                        <a href="#" className="btn btn-primary add-to-cart-btn" onClick={() => { handleAddToCart(menu._id)}} >Add to cart</a></div>
                </form>
            </div>
        </div>
    )
}

export default MenuItem 