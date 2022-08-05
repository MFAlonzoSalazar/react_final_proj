import { useContext, useState } from "react";
import CartDisplay from "../Cart&Checkout/CartDisplay";
import SubtotalDisplay from "../Cart&Checkout/SubtotalDisplay";
import { CartContext } from "../Contexts/CartContext";
import BillingAddrForm from "../Checkout/Forms/BillingAddrForm";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
    const { cart } = useContext(CartContext);
    const [sameAddr, setSameAddr] = useState(false);
    let showBillingAddrInput = (isSameAddr) => {
        if (isSameAddr === false) {
            return(
                <BillingAddrForm />
            )
        }
        return
    }

    if(cart.length === 0) {
        return(
            <h2>Please Add Items To Cart To Checkout</h2>
        );    
    } else {
        return(
            <div style={{paddingLeft:"20%", paddingTop:"56px"}}>
                <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                    <CheckoutForm 
                        showBillingAddrInput={showBillingAddrInput} 
                        sameAddr={sameAddr} 
                        setSameAddr={setSameAddr}
                    />                    
                    <div style={{paddingTop:"30px", paddingBottom:"60px"}}>
                        <h1>Cart Overview</h1>
                        <CartDisplay />
                    </div>
                </div>
                <SubtotalDisplay/>
            </div>
        );
    }
    
}