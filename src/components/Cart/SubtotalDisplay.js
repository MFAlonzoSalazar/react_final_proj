import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { CartProductInfo } from "../StyledComponents";
export default function SubtotalDisplay() {

    const { total } = useContext(CartContext);

    return(
        <div>
            <CartProductInfo> Subtotal : {total.toFixed(2)} </CartProductInfo>

        </div>
    )

}