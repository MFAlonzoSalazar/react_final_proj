import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import CartDisplay from "../Cart&Checkout/CartDisplay";
import { StyledContainer } from "../StyledComponents";
import SubtotalDisplay from "../Cart&Checkout/SubtotalDisplay";
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
                    <h2 style={{paddingRight:"15%"}}> No Items In Your Cart </h2>
            )}
            
        </div>
    )
}