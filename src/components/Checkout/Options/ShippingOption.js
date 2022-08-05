import { StyledRow } from "../../StyledComponents";
import { Form, Col, Row} from 'react-bootstrap'
export default function ShippingOption() {
    return(
        <StyledRow>
            <h1> Shipping Options </h1>
            <br />
            <Row>
                <Col style={{textAlign:"left", paddingLeft:"5%"}}>
                    <Form.Check 
                        type="radio" 
                        name="shipping" 
                        id="shipping-1"
                        value="free"
                        label="Everyday Free Shipping (3-6 Business Days)" 
                        readOnly
                        checked
                    />
                </Col>
            </Row>
        </StyledRow>
    );
}