import { CartDisplayDiv } from "../StyledComponents";
import CartProductDisplay from "./CartProductDisplay";


export default function CartDisplay({id}) {
    return(
        <CartDisplayDiv>
            <CartProductDisplay id={id} />
        </CartDisplayDiv>     
    );
}