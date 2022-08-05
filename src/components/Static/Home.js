import { useNavigate } from "react-router-dom";
import { StyledButton } from "../StyledComponents";
import { Carousel } from "react-bootstrap";
// got slideshow code from https://www.w3schools.com/howto/howto_js_slideshow.asp

export default function Home() {
    const navigate = useNavigate();
    const goToProducts = () => {
        navigate('/products');
    };
    return(
        <div className="Home" >
            <h1 className="CenteredHeader">Welcome to FakeStore</h1>
            <br />
            <p> We have a wide range of products we think you will love !</p>  

            <Carousel className="Slides"  >
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <StyledButton onClick={goToProducts}> Take A Look </StyledButton>
        </div>
    )
}