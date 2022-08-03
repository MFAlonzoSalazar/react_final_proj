import { NavLink } from 'react-router-dom'
import { StyledLink } from '../StyledComponents';

export default function MyNavLink({route, label}) {

    let styleByActiveStatus = (isActive) => {
        return isActive ? {fontWeight:"bold", textDecoration:"none", color:"#8AA6C1"} : 
            {fontWeight:"normal", textdecoration:"none"};
    }

    return(
        <NavLink className="Links" to={route} style={({isActive})=>styleByActiveStatus(isActive)} >
            <StyledLink>{label}</StyledLink>
        </NavLink>
    )
}