import { StyledRow } from "../../StyledComponents";
import StateOptions from "../Options/StateOptions";
import { Form, Col, Row, FloatingLabel } from 'react-bootstrap'

export default function BillingAddrForm() {
    return(
        <>
            <StyledRow>
                <h1> Billing Address </h1>
                <br />
                <Row>
                    <Col>
                        <FloatingLabel className="mb-3" controlId="floatingInput" label="Name">
                            <Form.Control className="Form" type="name" placeholder="Name" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel className="mb-3" controlId="floatingInput" label="Address" >
                            <Form.Control className="Form" type="address" placeholder="Address" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel className="mb-3" controlId="floatingInput" label="ZIP Code" >
                            <Form.Control type="address" placeholder="ZIP Code" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel className="mb-3" controlId="floatingInput" label="State" >
                            <Form.Select type="address" aria-label="Floating label select example">
                                <StateOptions />
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel className="mb-3" controlId="floatingInput" label="City" >
                            <Form.Control type="address" placeholder="City" />
                        </FloatingLabel>
                    </Col>
                </Row>
            </StyledRow>
        </>
    );
}