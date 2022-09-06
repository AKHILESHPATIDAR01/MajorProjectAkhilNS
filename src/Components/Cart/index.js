import React, { useContext } from 'react'
import { cartContext } from '../../Global/cartContext';
import { productContext } from '../../Global/productContext';

function Cart() {
    const {products} = useContext(productContext);
    const {dispatch, shoppingCart, totalPrice, qty} = useContext(cartContext);

    const listItems = shoppingCart.map((item) =>   
        <>
        <div className="cartProduct">
            <div className="cartProduct-img">
                <img src={item.image} />
            </div>
            <div className="cartProduct-details">
                <div className="c-p-title-small">{item.title_small}</div>
                <div className="c-p-catagory">{item.category}</div>
                <div className="c-p-price">₹{item.price}</div>
                <button className="c-p-btn" onClick={() => dispatch({type: 'DEC', id: item.id, products})} >-</button>
                <div className="c-p-price1"> {item.qty}</div>
                <button className="c-p-btn" onClick={() => dispatch({type: 'INC', id: item.id, products})} >+</button>
                <button className="c-p-btn1" onClick={() => dispatch({type: 'DELETE_PRODUCT', id: item.id, products})} >x</button>
            </div>
        </div>
        </>
        )   

    return (
        <> 
            <div class = "products">
                <div class = "container">
                    <h1 class = "lg-title">Cart</h1>

                    <div className="cart-container">
                        <div className="cart-product">
                            {listItems}
                        </div>
                        <div className="cart-details">
                            <div className="cart-summry">
                                <p className="c-s-heading">Cart Summary</p>
                                <p className="c-s-totalItems">Total Items : {qty} </p>
                                <p className="c-s-totalAmmout">Total Ammount : ₹{totalPrice}</p>
                                <button className="c-s-paybtn">Pay</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Cart
