import "./frontPage.css";
import {Button, Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import AnimatedText from './AnimatedText';
import ContactPop from "./ContactPop";
import {useState} from "react";

function frontPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className={"frontPage"}>
            <Row>
                <Col lg={12}>
                    <Container className={"justify-content-center"}>
                        <Container>
                            <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/EyeWinck.png?raw=true"} alt={"Profile pic"}/>
                            <h1 className={"intro-title"}>Hi, I am<h1 className={"intro-title-loop"}>
                                <AnimatedText
                                  phrases={[
                                    "Lesly Williams",
                                    "Full Stack Developer",
                                    "Project Manager",
                                  ]}
                                  typingSpeed={150}
                                  delay={1500}
                                />
                            </h1>
                            </h1>
                            <p className={"intro-sum"}>I am a frontend web developer. I can provide clean code and pixel
                                perfect design. I also make website more & more interactive with web animations.</p>
                        </Container>
                        <Container className={"contact-box"}>
                            <Button variant="outline-light" onClick={() => setModalShow(true)}>
                                Contact
                            </Button>

                            <ContactPop
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default frontPage;