import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { CartProductInfo } from "../StyledComponents";
export default function SubtotalDisplay() {

    const { total, cart } = useContext(CartContext);

    return(
        <div className="CartSubtotal">
            <p> Subtotal : ${Math.abs(total).toFixed(2)} </p>

        </div>
    )

}