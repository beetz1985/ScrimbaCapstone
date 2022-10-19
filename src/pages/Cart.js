import React, {useState, useContext} from "react";
import {Context} from '../CartContext'
import CartItem from "../components/CartItem";

function Cart() {
    const {cartContent, setCartContent} = useContext(Context)
    const [orderState, setOrderState] = useState("Place Order")

    const price = 5.99
    const itemsCount = cartContent.length;
    const totalCost = (price * itemsCount);
    const itemsInCart = itemsCount > 0;
    const contentElements = cartContent.map(v=><CartItem key={v.id} price={price} {...v}/>)
    
    function handleOrder() {
        setOrderState("...Ordering")
        setTimeout(()=>{
            console.log("Order Placed")
            setCartContent([])
        }, 3000)
    }

    return (
        <div className="cart-wrapper">
            {contentElements}
            <br/>
            <h3 className="cart-total">Total: £{totalCost}</h3>
            <br/>
            {
                itemsInCart 
                ?
                <>
                <div className="order-button">
                    <button onClick={handleOrder}>{orderState}</button>
                </div>
                </>
                :
                <div className="no-items-display">
                    <p>There Are No Items In Your Cart</p>
                </div>
            }
        </div>
    )
}

export default Cart