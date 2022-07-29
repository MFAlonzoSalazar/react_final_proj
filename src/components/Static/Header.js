import { Outlet } from 'react-router-dom'
import MyNavLink from './MyNavLink'

export default function Header() {
    return(
        <>
            <header>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <b>Products</b>
                    <div style={{display:"flex"}}>
                        <MyNavLink route="/" label="Home" />
                        <MyNavLink route="/products" label="Products" />
                        <MyNavLink route="/cart" label="Cart" />
                        <MyNavLink route="/login" label="Login" />
                    </div>
                </div>
            </header>
            
        </>
    )
}