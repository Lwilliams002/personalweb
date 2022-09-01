import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import "./ContactPop.css"
import emailjs from "emailjs-com";
import {useRef} from "react";

function ContactPop(props) {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_t2vm5op', 'template_0dhumig', form.current, '5Nm7zQk1V8BzDAONm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <Container >
            <Modal
                {...props}
                className={"contact-popup"}
                size={"lg"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className={"title"}>
                        Let's get in touch!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={"contact-popup"} ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control className={"input-box"} type="text" placeholder="Name" name={"name"} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className={"input-box"} type="email" placeholder="Email address" name={"email"} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Control className={"input-box"} type="text" placeholder="Subject" name={"subject"} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className={"message-box"} as="textarea" placeholder="Message" name={"message"} />
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Button className={"button-email"} onClick={props.onHide} type="submit">Submit</Button>
                                </Col>
                            </Row>

                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>
    )

}
export default ContactPop;