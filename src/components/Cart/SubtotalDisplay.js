import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { StyledSubtotalContainer } from "../StyledComponents";
export default function SubtotalDisplay() {

    const { total, cart } = useContext(CartContext);

    return(
        <div className="CartSubtotal">
            <StyledSubtotalContainer>
                <div style={{display:"flex", flexDirection:"row", columnGap:"310px"}}>
                    <p>Subtotal</p>
                    <p>${Math.abs(total).toFixed(2)}</p>
                </div>
                <div style={{display:"flex", flexDirection:"row", columnGap:"330px"}}>
                    <p>Shipping</p>
                    <p style={{color:"#19429A"}}>FREE</p>
                </div>
            </StyledSubtotalContainer>
            <StyledSubtotalContainer>
                <div style={{display:"flex", flexDirection:"row", columnGap:"222px"}}>
                    <p><b>Pre-Tax Order Total</b></p>
                    <p><b>${Math.abs(total).toFixed(2)}</b></p>
                </div>
            </StyledSubtotalContainer> 
        </div>
    )

}