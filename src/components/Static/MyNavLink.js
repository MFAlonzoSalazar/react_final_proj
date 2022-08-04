import { NavLink } from 'react-router-dom'
import { StyledLink } from '../StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export default function MyNavLink({route, label}) {

    let styleByActiveStatus = (isActive) => {
        return isActive ? {fontWeight:"bold", textDecoration:"none"} : 
            {fontWeight:"normal", textdecoration:"none"};
    }

    return(
        <NavLink className="Links" to={route} style={({isActive})=>styleByActiveStatus(isActive)} >
            <StyledLink>
                { label === "Cart" ? <FontAwesomeIcon className="Cart"icon={faCartShopping} size="1x"/> :
                    label ==="Account" ? <FontAwesomeIcon icon={faUser} size="1x"/> :
                    label                  
                }
            </StyledLink>
        </NavLink>
    )
}