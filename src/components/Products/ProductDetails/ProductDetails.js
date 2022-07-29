import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsById } from "../ProductUtils";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1);

    const { state } = useLocation();
    const productId = state;

    const navigate = useNavigate();

    useEffect(() => {
        getProductsById(productId, setProductInfo,setLoading);        
    },[])

    let addToCart = () => {
        navigate("/cart", {state: {id: productId, quantity: quantity}})
    }

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
                    <input type="button" value="Add To Cart" onClick={addToCart}/>

                </form>
           </div>
        </div>
    )
}