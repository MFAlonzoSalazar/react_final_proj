import { NavLink } from 'react-router-dom'
import { StyledLink, StyledSpan } from '../StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';

export default function MyNavLink({route, label}) {
    const { cartCount } = useContext(CartContext);

    let styleByActiveStatus = (isActive) => {
        return isActive ? {fontWeight:"bold", textDecoration:"none"} : 
            {fontWeight:"normal", textdecoration:"none"};
    }

    return(
        <NavLink className="Links" to={route} style={({isActive})=>styleByActiveStatus(isActive)} >
            <StyledLink>
                { label === "Cart" ? (
                    <>
                        <FontAwesomeIcon className="Cart"icon={faCartShopping} width="20px" size="1x"/>
                        <StyledSpan className="badge">{cartCount}</StyledSpan>
                    </>
                    
                ) : ( label)}
            </StyledLink>
        </NavLink>
    )
}