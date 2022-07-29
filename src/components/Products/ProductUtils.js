export let getProducts = async (setProducts, setLoading) => {
    setLoading(true);
    let url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    setLoading(false);
}

export let getProductsById = async(productId, setProductInfo) => {
    let url= `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductInfo(data);
}