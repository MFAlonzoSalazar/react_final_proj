import CardOptions from "../Options/CardOptions"
import { StyledRow } from "../../StyledComponents";
import { Form, Col, Row, FloatingLabel} from 'react-bootstrap'
import { useState } from "react";
export default function Payment({sameAddr, setSameAddr}) {
    let setChecked = () => {
        setSameAddr(!sameAddr);
    }
    return(
        <StyledRow>
            <h1> Payment </h1>
            <br />
            <Row>  
                <Col>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Card Type" >
                        <Form.Select type="address" aria-label="Floating label select example">
                            <CardOptions />
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Card Number" >
                        <Form.Control type="address" autoComplete="off" placeholder="123 456 78910" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Month" >
                        <Form.Control type="address" autoComplete="off" placeholder="Month" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Year" >
                        <Form.Control type="address" placeholder="Year" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="CVV" >
                        <Form.Control type="address" placeholder="CVV" />
                    </FloatingLabel>
                </Col>
            </Row>  
            <br />
            <Row>
                <Col style={{textAlign:"left"}}>
                    <Form.Check 
                        type="checkbox"
                        name="sameAddr"
                        id="sameAddr"
                        label="Billing address is the same as shipping"
                        onChange={(event => setChecked())}
                    />
                </Col>
            </Row>
        </StyledRow>
    );
}