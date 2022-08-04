import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import { CartItems, CartProductImg, CartProductInfo } from "../StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default function CartProductDisplay({id}) {
    const { cart, total, calculateTotal, removeFromCart } = useContext(CartContext);
    const product = cart.find(x => x.id === id);

    let modifyCart = (newQuantity) => {
        if (newQuantity === 0) { 
            const difference = Number(0) - Number(product.quantity);
            product.itemTotal = 0;
            calculateTotal(difference, product.price);
            removeFromCart(product.id, Number(0));
        }   else {
            const difference = Number(newQuantity) - Number(product.quantity);
            calculateTotal(difference, product.price);
            product.itemTotal = Number(product.price) * Number(newQuantity);
            product.quantity = newQuantity;
            
        }
        
    }
    if(cart.length > 0) {
        return(
            <CartItems>
                    <CartProductImg src={product.image} />

                    <div style={{display: "flex", flexDirection:"column", textAlign:"left"}}>
                        <p> {product.title} </p>
                        <div className="CartFlex">
                            <div>
                                <input className="CartModifier"
                                        name="quantity" 
                                        type="number" 
                                        value={product.quantity} 
                                        autoComplete="off"
                                        min="1"
                                        onChange={(event => modifyCart((event.target.value)))}      
                                />
                                <FontAwesomeIcon className="Remove" icon={faTrashCan} onClick={()=> modifyCart(0)} /> 
                            </div> 
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