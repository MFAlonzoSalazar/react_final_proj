import { useState, useEffect, useContext } from "react";
import { getProductsById } from "../productUtils";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";

export default function ProductDetails() {
    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1);

    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);
    
    useEffect(() => {
        getProductsById(productId, setProductInfo,setLoading);        
    },[])

    return(
        <div style={{display:"flex", justifyContent:"space-between", }}>
           <img src={productInfo.image} width="30%" height="30%" style={{paddingLeft:"5%"}}/>
           <div style={{width:"50%", paddingRight:"5%"}}>
                <h1>{productInfo.title}</h1>
                <p>{productInfo.price}</p>
                <p>{productInfo.category}</p>
                <p>{productInfo.description}</p>
                
                <form>
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        name="quantity" 
                        type="number" 
                        value={quantity} 
                        autoComplete="off"
                        onChange={(event => setQuantity(event.target.value))}
                    />
                    <input type="button" value="Add To Cart" onClick={() => addToCart(productId, quantity)} />

                </form>
           </div>
        </div>
    )
}