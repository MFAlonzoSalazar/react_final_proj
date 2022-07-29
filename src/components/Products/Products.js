import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("");
    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(setProducts, setLoading);        
    },[])

    return(
        <div className="Home">
            {!loading ? (
                <div>
                    {products.length > 0 ? (
                        products.map((product, index) =>(
                            <ProductCard 
                                key={index} 
                                image={product.image}
                                title={product.title} 
                                price={product.price}
                            />
                        ))
                    ) : (
                        <h3> No Products Found </h3>
                    )}
                </div>
            ): (
                <p>Loading ...</p>
            )}
        </div>
    )
}