import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../productUtils";

export default function Products() {
    const [products, setProducts] = useState([]); 
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