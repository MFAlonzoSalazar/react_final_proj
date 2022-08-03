import MyNavLink from './MyNavLink'
import ThemeToggle from './ThemeToggle'
import { ThemeContext } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AppHeader } from '../StyledComponents'

export default function Header() {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
    return(
        <>
            <AppHeader>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display: "flex", padding:" 5px", justifyContent:'space-evenly'}}>
                        <FontAwesomeIcon icon={faShop} size="2x" style={{paddingTop:"10px", paddingRight:"5px"}}/>
                        <p><b> FAKESTORE </b></p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", width:"20%"}}>
                        <MyNavLink route="/" label="Home" />
                        <MyNavLink route="/products" label="Products" />
                        <MyNavLink route="/cart" label="Cart" />
                        <MyNavLink route="/login" label="Login" />
                        <ThemeToggle />
                    </div>    
                </div>
            </AppHeader>
            
        </>
    )
}