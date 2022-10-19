import React, {useContext} from "react";
import {Context} from '../CartContext'
import useHover from '../hooks/useHover'


function CartItem(props) {

    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)

    const binIconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">

            <i 
                className={binIconClass}
                onClick={()=>removeFromCart(props.id)}
                ref={ref}
            ></i>

            <div className="item-img-container">
                <img className="item-img" alt={props.id} src={props.url} />
            </div> 
            <div className="item-price">{props.price}</div>
        </div>
    )
}

export default CartItem