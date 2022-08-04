import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import CartDisplay from "./CartDisplay";
import { StyledContainer } from "../StyledComponents";
export default function Cart() {
    const { cart } = useContext(CartContext);

    return(
        <div>
           <h1>Your Bag</h1>
           <StyledContainer>
                {cart.length > 0 ? (
                        cart.map((product) => (
                            <CartDisplay 
                                id={product.id} 
                            />
                        ))                     
                    ) : (
                        <h2> No Items In Your Cart </h2>
                )}
            </StyledContainer>
        </div>
    )
}