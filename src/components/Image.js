import React, {useContext} from "react";
import {Context} from '../CartContext'
import useHover from '../hooks/useHover'

function Image({id, className, imgUrl, fav}) {

    const [hovered, ref] = useHover()
    const {toggleFav, addToCart, cartContent, removeFromCart} = useContext(Context)

    const favIconClass = fav ? "ri-heart-fill" : "ri-heart-line";
    const inCart = cartContent.some(v=>v.id === id);

    const cartIconElement = inCart 
        ? <i className={`ri-shopping-cart-fill cart`} onClick={()=>removeFromCart(id)}></i>
        : <i className={`ri-add-circle-line cart`} onClick={()=>addToCart(id)}></i>
            

    return (
        <div 
            key={id} 
            className={className}
            ref={ref}
        >
            <img src={imgUrl} alt={id} />
            { (hovered || fav) && <i className={`${favIconClass} favorite`} onClick={()=>toggleFav(id)}></i> }
            { (hovered || inCart) && cartIconElement }
            
        </div>
    )
}

export default Image