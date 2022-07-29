import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsById } from "../ProductUtils";

export default function ProductDetails() {
    const [productInfo, setProductInfo] = useState([]);
    const { state } = useLocation();
    const productId = state;

    useEffect(() => {
        getProductsById(productId, setProductInfo);        
    },[])

    return(
        <div>
           {productInfo.title}
        </div>
    )
}