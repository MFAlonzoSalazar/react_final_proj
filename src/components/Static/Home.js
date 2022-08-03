import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../StyledComponents";
// got slideshow code from https://www.w3schools.com/howto/howto_js_slideshow.asp

export default function Home() {
    const navigate = useNavigate();
    const goToProducts = () => {
        navigate('/products');
    };
    return(
        <div className="Home" >
            <h1>Welcome to FakeStore</h1>
            <p> We have a wide range of products we think you will love !</p>  
            <ButtonPrimary onClick={goToProducts}> Take A Look </ButtonPrimary>
        </div>
    )
}