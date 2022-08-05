import { useNavigate } from "react-router-dom"
import { ProductCardButton } from "../../StyledComponents";
export default function ProductCard({id,image,title,price}) {

    const navigate = useNavigate();
    let openDetails = () => {
        navigate(`/products/${id}`);
    }

    return(
        <ProductCardButton onClick={openDetails}>
            <div>
                <img className="Product-Image" src={image} width="30%"/>
            </div>
            <div>
                <div className="Product-Title"> <b>{title}</b> </div>
                <div className="Product-Price"> <b>Price: </b>${price} </div>
            </div>
        </ProductCardButton>
    )
}