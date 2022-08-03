import { useState, useEffect, useContext } from "react";
import { getProductsById } from "../productUtils";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { ButtonPrimary } from "../../StyledComponents";

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
            <div style={{display:"flex", flexDirection:"column", width: "50%"}}>
                <p style={{textAlign: "left"}}>{productInfo.category}</p>
                <img src={productInfo.image} width="60%" height="80%" style={{paddingLeft:"5%", paddingTop:"10px"}}/>
            </div>
           
           <div style={{width:"50%", paddingRight:"5%", textAlign:"left"}}>
                <h1 style={{textAlign:"left"}}>{productInfo.title}</h1>
               
                <p>{productInfo.description}</p>
                <br />
                <p><b>Price : ${productInfo.price}</b> </p>
                
                <form>
                    <label htmlFor="quantity">Quantity</label>
                    <input className="CartInput"
                        name="quantity" 
                        type="number" 
                        value={quantity} 
                        autoComplete="off"
                        min="0"
                        onChange={(event => setQuantity(event.target.value))}
                    />
                    <ButtonPrimary type="button" onClick={() => addToCart(productId, quantity)}>
                        Add To Cart
                    </ButtonPrimary>
                </form>
           </div>
        </div>
    )
}