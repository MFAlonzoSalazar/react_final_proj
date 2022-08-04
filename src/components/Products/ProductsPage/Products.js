import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../productUtils";
import { ProductsHeader } from "../../StyledComponents";

export default function Products() {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(setProducts, setLoading);        
    },[])

    return(
        <div>
            <ProductsHeader> Products </ProductsHeader>

            {!loading ? (
                <div className="ProductDisplay">
                    {products.length > 0 ? (
                        products.map((product, index) =>(
                            <div className="Product"> 
                                <ProductCard 
                                    key={index} 
                                    id={product.id}
                                    image={product.image}
                                    title={product.title} 
                                    price={product.price.toFixed(2)}
                                />
                            </div>
                        ))
                    ) : (
                        <h3> No Products Found </h3>
                    )}
                </div>
            ): (
                <h1>Loading ...</h1>
            )}
        
        </div>
    )
}