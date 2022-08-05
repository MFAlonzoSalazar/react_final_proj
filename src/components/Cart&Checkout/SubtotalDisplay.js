import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { StyledCheckoutButton, StyledSubtotalContainer } from "../StyledComponents";
import { useLocation, useNavigate } from 'react-router-dom';

export default function SubtotalDisplay() {

    const { total, setCart, setCartCount } = useContext(CartContext);
    const page = useLocation();
    const navigate = useNavigate();

    const calculateTax = () =>{
        return Math.abs(total) * .0725;
    }

    const showTax = () => { 
        if(page.pathname === "/checkout") {
            return(
                <div style={{display:"flex", flexDirection:"row", columnGap:"222px"}}>
                    <p style={{width:"100%"}}>Estimated Tax</p>
                    <p>${calculateTax().toFixed(2)}</p>
                </div>
            );
        }
        return;
    }

    const showPreTaxTotal = () =>{
        return(
            <StyledSubtotalContainer>
            <div style={{display:"flex", flexDirection:"row", columnGap:"230px"}}>
                <p style={{width:"100%"}}><b>Pre-Tax Order Total</b></p>
                <p><b>${Math.abs(total).toFixed(2)}</b></p>
            </div>
        </StyledSubtotalContainer> 
        );
    }

    const showActualTotal = () => {
        return(
            <StyledSubtotalContainer>
                <div style={{display:"flex", flexDirection:"row", columnGap:"220px"}}>
                    <p style={{width:"100%"}}><b>Order Total</b></p>
                    <p><b>${(Math.abs(total)+calculateTax()).toFixed(2)}</b></p>
                </div>
            </StyledSubtotalContainer> 
        )
    }

    const placeOrder = () => {
        setCart([]);
        setCartCount(0);
        navigate("/products")
    }

    const showRightButton = () => {
        if(page.pathname ==="/cart") {
            // is in cart so needs to go to checkout
            return(
                <StyledCheckoutButton onClick={()=>navigate("/checkout")}>
                    Proceed To Checkout
                </StyledCheckoutButton>
            );
        } else {
            // is in checkout so needs to place order
            // and return to products page
            return(
                <StyledCheckoutButton onClick={placeOrder}>
                    Place Order
                </StyledCheckoutButton>
            );
        }
    }

    return(
        <div className="CartSubtotal">
            <StyledSubtotalContainer>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{width:"100%"}}>Subtotal</p>
                    <p>${Math.abs(total).toFixed(2)}</p>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{width:"100%"}}>Shipping</p>
                    <p style={{color:"#19429A"}}>FREE</p>
                </div>
                { showTax() }
            </StyledSubtotalContainer>
            { page.pathname === "/cart" ? (
                showPreTaxTotal()
            ) : (
                showActualTotal()
            ) }
            {showRightButton()}
            
        </div>
    );

}