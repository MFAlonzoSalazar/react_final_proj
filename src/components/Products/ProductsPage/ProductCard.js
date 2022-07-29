import { useNavigate } from "react-router-dom"
export default function ProductCard({id,image,title,price,setProductId}) {

    const navigate = useNavigate();
    let openDetails = () => {
        setProductId(id)
        navigate(`/products/${id}`, {state: id});
    }

    return(
        <button onClick={openDetails}>
            <img className="Product-Image" src={image} width="10%" height="20%"/>
            <div className="Product-Title"> <b>{title}</b> </div>
            <div className="Product-Price"> ${price} </div>
        </button>
    )
}