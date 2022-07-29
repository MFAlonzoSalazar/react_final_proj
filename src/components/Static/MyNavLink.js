import { NavLink } from 'react-router-dom'

export default function MyNavLink({route, label}) {
    let styleByActiveStatus = (isActive) => {
        return isActive ? {fontWeight:"bold", textDecoration:"none"} : 
            {fontWeight:"normal", textdecoration:"none"};
    }
    return(
        <NavLink className="Links" to={route} style={({isActive})=>styleByActiveStatus(isActive)} >
            <p>{label}</p>
        </NavLink>
    )
}