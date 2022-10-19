import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from '../CartContext'

function Header() {

    const {cartContent} = useContext(Context)
    const cartIconClass = cartContent.length > 0 
                            ? "ri-shopping-cart-fill" 
                            : "ri-shopping-cart-line"

    return(
        <header>
        <Link to="/"><h3>PicTorium</h3></Link>
        <Link to="/cart">
            <i className={`${cartIconClass} ri-fw ri-2x`}></i>
        </Link>
        </header>
    )
}

export default Header