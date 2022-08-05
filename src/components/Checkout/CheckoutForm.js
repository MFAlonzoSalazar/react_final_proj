import ShippingAddrForm from "../Checkout/Forms/ShippingAddrForm";
import ShippingOption from "./Options/ShippingOption";
import Payment from "./Forms/Payment";
import { StyledForm } from "../StyledComponents";
import { Form} from 'react-bootstrap'

export default function CheckoutForm({showBillingAddrInput, sameAddr, setSameAddr}) {
    return(
        <Form>
            <StyledForm>
                <ShippingAddrForm />
                <ShippingOption />
                <Payment sameAddr={sameAddr} setSameAddr={setSameAddr}/>
                {showBillingAddrInput(sameAddr)}  
            </StyledForm>    
        </Form>
    );
}