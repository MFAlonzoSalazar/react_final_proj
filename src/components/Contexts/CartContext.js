import { createContext, useState } from "react";

const CartContext = createContext(new Map());


const CartProvider = (props) => {
    const [cart, setCart] = useState(new Map());

    const addToCart = (productId, quantity) => {
        if(cart.has(productId)) {
            cart.set(productId, Number(cart.get(productId)) + Number(quantity));
        } else {
            cart.set(productId, quantity);
        }
        console.log(cart);
    };
    
    const removeFromCart = (productId, quantity) => {
        if (Number(quantity) === 0) {
            cart.delete(productId);
        } else {
            cart.set(productId, quantity);
        }
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
};

export {CartContext, CartProvider};