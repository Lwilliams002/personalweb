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
        <div className="contact-wrapper">

            <div className= "contact-div">
                <div className="contact-div-text">
                    <i className="fa fa-paper-plane"></i>
                    <p>Email</p>
                    <p>lwilliams.devs@gmail.com</p>
                </div>


            </div>
            <Form id="contact-form" className="form-horizontal" ref={form} onSubmit={sendEmail}>

                <Form.Group className="mb-3 form-group">
                    <Form.Control className={"form-control"} type="text" placeholder="Name" name={"name"} />
                </Form.Group>
                <Form.Group className="mb-3 form-group">
                    <Form.Control className={"form-control"} type="email" placeholder="Email address" name={"email"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control className={"form-control"} type="text" placeholder="Subject" name={"subject"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className={"message-box"} as="textarea" placeholder="Message" name={"message"} />
                </Form.Group>

                {/*Change button color before:: After::*/}
                <Form.Group>
                    <button className="btn btn-primary send-button" type="submit"  onClick={props.onHide}>
                        <div className="alt-send-button">
                            <span className="send-text">SEND</span><i className="fa fa-paper-plane"></i>
                        </div>
                    </button>
                </Form.Group>
            </Form>


        </div>

)

}
export default ContactPop;