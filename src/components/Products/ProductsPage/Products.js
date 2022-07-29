import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../ProductUtils";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState(""); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(setProducts, setLoading);        
    },[])

    return(
        <div>
            <h1> Products </h1>

            {!loading ? (
                <div>
                    {products.length > 0 ? (
                        products.map((product, index) =>(
                            <ProductCard 
                                key={index} 
                                id={product.id}
                                image={product.image}
                                title={product.title} 
                                price={product.price}
                                setProductId={setProductId}
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