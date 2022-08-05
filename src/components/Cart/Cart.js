import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import CartDisplay from "./CartDisplay";
import { StyledContainer } from "../StyledComponents";
import SubtotalDisplay from "./SubtotalDisplay";
export default function Cart() {
    const { cart } = useContext(CartContext);
    {console.log(cart)}

    return(
        <div>
           <h1>Your Bag</h1>
            {cart.length > 0 ? (
                <StyledContainer>
                    <div style={{width:"100%"}}>
                        {cart.map((product) => (
                            <CartDisplay 
                                id={product.id} 
                            />
                        ))
                        }
                    </div>
                    <SubtotalDisplay /> 
                </StyledContainer>              
                ) : (
                    <h2> No Items In Your Cart </h2>
            )}
            
        </div>
    )
}