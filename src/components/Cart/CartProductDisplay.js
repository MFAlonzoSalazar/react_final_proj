import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import { CartItems, CartProductImg, CartProductInfo } from "../StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";


export default function CartProductDisplay({id}) {
    const { cart, cartCount, setCartCount, calculateTotal, removeFromCart } = useContext(CartContext);
    const product = cart.find(x => x.id === id);
    const page = useLocation();


    let modifyCart = (newQuantity) => {
        if(newQuantity === 0) {
            newQuantity = 1;
        } else if (newQuantity > 100) {
            newQuantity = 100
        }
        const difference = Number(newQuantity) - Number(product.quantity);
        setCartCount(Number(difference) + Number(cartCount));
        calculateTotal(difference, product.price);
        product.itemTotal = Number(product.price) * Number(newQuantity);
        product.quantity = newQuantity;    
    } 

    let deleteFromCart = () => {
        product.itemTotal = 0;
        const difference = Number(0) - Number(product.quantity);
        setCartCount(Number(difference) + Number(cartCount)); 
        calculateTotal(difference, product.price);
        removeFromCart(product.id, Number(0));
    }

    let showCartModifier = () => {
        if (page.pathname === "/cart") {
            return(
                <div>
                    <input className="CartModifier"
                        name="quantity" 
                        type="number" 
                        value={product.quantity} 
                        min="1"
                        max="100"
                        onChange={(event => modifyCart(Number(event.target.value)))}
                    />
                    <FontAwesomeIcon className="Remove" icon={faTrashCan} onClick={deleteFromCart} /> 
                </div> 
            );
        } 
        return(
            <div>
                <p>Qty: {product.quantity}</p>
            </div>
        )
    }

    if(cart.length > 0) {
        return(
            <CartItems>
                    <div style={{width:"120px", textAlign:"center"}}>
                        <CartProductImg src={product.image} />
                    </div>
                    <div style={{display: "flex", flexDirection:"column", textAlign:"left"}}>
                        <p> {product.title} </p>
                        <div className="CartFlex">
                            {showCartModifier()}
                            <p> Price : ${product.price.toFixed(2)} </p> 
                            <b> Total : ${Number(product.itemTotal).toFixed(2)} </b>
                        </div>
                    </div>
            </CartItems>
        )
    } else {
        return
    }
    
}