import { CartDisplayDiv } from "../StyledComponents";
import CartProductDisplay from "./CartProductDisplay";
import SubtotalDisplay from "./SubtotalDisplay";

export default function CartDisplay({id}) {
    return(
        <div className="CartDisplayFlex">
            <CartDisplayDiv>
                <CartProductDisplay id={id} />
            </CartDisplayDiv>
            
            <SubtotalDisplay/>
            
        </div>
        
    );
}