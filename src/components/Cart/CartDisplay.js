import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import { CartDisplayDiv } from "../StyledComponents";
import CartProductDisplay from "./CartProductDisplay";

export default function CartDisplay({image,price,quantity,title}) {
    return(
        <CartDisplayDiv>
            <CartProductDisplay />
            
        </CartDisplayDiv>
    );
}