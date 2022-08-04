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
            calculateTotal(difference, product.price);
            removeFromCart(product.id, Number(0));
        }   else {
            const difference = Number(newQuantity) - Number(product.quantity);
            calculateTotal(difference, product.price);
            product.quantity = newQuantity;
        }
        
    }
    if(cart.length > 0) {
        return(
            <CartItems>
                    <CartProductImg src={product.image} />

                    <div style={{display: "flex", flexDirection:"column"}}>
                        <CartProductInfo> {product.title} </CartProductInfo>
                        <div className="CartFlex">
                            
                            <CartProductInfo> Price : ${product.price.toFixed(2)} </CartProductInfo>
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
                        </div>
                    </div>
            </CartItems>
        )
    } else {
        return
    }
    
}