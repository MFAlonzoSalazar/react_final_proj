import { useState, useEffect, useContext } from "react";
import { getProductsById } from "../productUtils";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { ButtonPrimary, StyledButton } from "../../StyledComponents";

export default function ProductDetails() {
    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(Number(1));

    const { productId } = useParams();
    const { addToCart, calculateTotal } = useContext(CartContext);

    let addToBag = (productId, title , image, price, quantity) => {
        if(quantity <= Number(0)) {
            return;
        }
        calculateTotal(price, quantity);
        addToCart(productId, title , image, price, quantity);
    }
    
    useEffect(() => {
        getProductsById(productId, setProductInfo,setLoading);        
    },[])

    return(
        <div className="ProductDetails" >
            <div className="PictureCard">
                <p style={{textAlign: "left", paddingLeft:"5px"}}>{productInfo.category}</p>
                <img className="DetailsImg" src={productInfo.image} style={{}}/>
            </div>
           
           <div className="DetailsCard">
                <h1 style={{textAlign:"left"}}>{productInfo.title}</h1>
               
                <p>{productInfo.description}</p>
                <br />
                <p><b>Price : ${Number(productInfo.price).toFixed(2)} </b> </p>
                
                <form>
                    <label htmlFor="quantity">Quantity</label>
                    <input className="CartInput"
                        name="quantity" 
                        type="number" 
                        required
                        value={quantity} 
                        autoComplete="off"
                        min="1"
                        onChange={(event => setQuantity(Number(event.target.value)))}
                    />
                    <StyledButton type="button" onClick={() =>
                        addToBag(productId, productInfo.title, productInfo.image, productInfo.price, quantity)}>
                        Add To Cart
                    </StyledButton>
                </form>
           </div>
        </div>
    )
}