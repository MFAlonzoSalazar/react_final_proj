import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
export default function CartProductDisplay({id}) {
    const { cart, total } = useContext(CartContext);
    return(
        <div>
            {total}
        </div>
    )
}