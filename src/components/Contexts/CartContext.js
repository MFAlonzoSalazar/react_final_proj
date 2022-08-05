import { createContext, useState } from "react";

const CartContext = createContext([]);


const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    let calculateTotal = (quantity, price) => {
        if(total === 0) {
            setTotal(Number(price)*Number(quantity));
        } else {
            const tempTotal = Number(total) + Number(Number(price)*Number(quantity));
            setTotal(tempTotal);
        }
        
    }

    const addToCart = (productId, title, image, price, quantity, itemTotal) => {
        const product = cart.find(x => x.id === productId)
        setCartCount(Number(cartCount) + Number(quantity));
        if(product) {
                product.quantity = Number(product.quantity) + Number(quantity);
                product.itemTotal = (Number(product.price)*Number(product.quantity));
          
        } else {
            cart.push({
                id: productId,
                title: title,
                image: image,
                price: price,
                quantity: quantity,
                itemTotal: price,
            });
        }
        console.log(cart);
    };
    
    const removeFromCart = (productId, quantity) => {
        if (quantity === Number(0)) {
            const index = cart.indexOf(cart.find(x => x.id === productId));
            cart.splice(index, 1);
        } 
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, calculateTotal, setCartCount, cartCount, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
};

export {CartContext, CartProvider};