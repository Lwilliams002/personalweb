import {Button, Container, Form} from "react-bootstrap";
import CustomPopup from "../../CustomPopup";
import {useState} from "react";
import "./Modal.css"

function Modal() {
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    return (

        <Container className={"contact-popup"}>
            <Button onClick={() => setVisibility(!visibility)} className={"contact"}
                    variant="outline-light">Contact</Button>
            <CustomPopup
                className={"contact-popup"}
                onClose={popupCloseHandler}
                show={visibility}
                title="Let's get in touch!"
            >
                <Form className={"contact-popup"}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" placeholder="Message" />
                    </Form.Group>
                    <Button className={"form-button"} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </CustomPopup>
        </Container>
    )

}
export default Modal;