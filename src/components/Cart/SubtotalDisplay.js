import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { CartProductInfo } from "../StyledComponents";
export default function SubtotalDisplay() {

    const { total } = useContext(CartContext);

    return(
        <div className="CartSubtotal">
            <p> Subtotal : {total.toFixed(2)} </p>

        </div>
    )

}