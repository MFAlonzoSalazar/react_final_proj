import { CartDisplayDiv } from "../StyledComponents";
import CartProductDisplay from "./CartProductDisplay";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";


export default function CartDisplay({id}) {
    const { cart } = useContext(CartContext);
    return(
        <>
            {cart.map((product) => (
                <CartDisplayDiv>
                    <CartProductDisplay id={product.id} />
                </CartDisplayDiv>   
            ))
            }
        </>     
    );
}