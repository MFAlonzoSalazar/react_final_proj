import { useContext } from "react";
import CartDisplay from "../Cart/CartDisplay";
import SubtotalDisplay from "../Cart/SubtotalDisplay";
import { CartContext } from "../Contexts/CartContext";

export default function Checkout() {
    const { cart } = useContext(CartContext);

    if(cart.length === 0) {
        return(
            <h2>Please Add Items To Cart To Checkout</h2>
        );    
    } else {
        return(
            <div>
                <CartDisplay />
                <SubtotalDisplay/>
            </div>
        );
    }
    
}