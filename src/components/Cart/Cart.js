import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import CartDisplay from "./CartDisplay";
export default function Cart() {
    const { cart, total, setTotal } = useContext(CartContext);

    return(
        <div>
           <h1>Your Bag</h1>
           {cart.length > 0 ? (
                cart.map((product) => (
                    <CartDisplay 
                        id={product.id} 
                    />
                ))                      
            ) : (
                <h2> No Items In Your Cart </h2>
           )}
        </div>
    )
}