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
        <AppHeader>
                <div className="StoreName">
                    <>
                        <FontAwesomeIcon icon={faShop} size="2x" style={{paddingRight:"5%"}}/>
                    </>
                    <><b> FAKESTORE </b></>
                </div>
                <div className="Nav">
                    <MyNavLink route="/" label="Home" />
                    <MyNavLink route="/products" label="Products" />
                    <MyNavLink route="/cart" label="Cart" />
                    <ThemeToggle />
                </div>    
        </AppHeader>
    )
}