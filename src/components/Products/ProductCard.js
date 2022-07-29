export default function ProductCard({image,title,price}) {
    return(
        <button>
            <img className="Product-Image" src={image} width="10%" height="20%"/>
            <div className="Product-Title"> <b>{title}</b> </div>
            <div className="Product-Price"> ${price} </div>
        </button>
    )
}