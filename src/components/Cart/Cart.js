import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import CartDisplay from "./CartDisplay";
import { StyledContainer } from "../StyledComponents";
import SubtotalDisplay from "./SubtotalDisplay";
export default function Cart() {
    
    const { cart } = useContext(CartContext);

    return(
        <div style={{marginLeft:"12%"}}>
           <h1>Your Bag</h1>
            {cart.length > 0 ? (
                <>
                    <StyledContainer>
                        <CartDisplay />
                    </StyledContainer>
                    <SubtotalDisplay />
                </>              
                ) : (
                    <h2> No Items In Your Cart </h2>
            )}
            
        </div>
    )
}