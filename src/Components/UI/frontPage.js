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
                            <h1 className={"intro-title"}>Hi, I am
                              <h1 className={"intro-title-loop"}>
                                <AnimatedText
                                  phrases={[
                                    "Lesly Williams",
                                    "Full Stack Web Developer",
                                    "Backend Developer",
                                    "API Developer",
                                  ]}
                                  typingSpeed={150}
                                  delay={1500}
                                />
                              </h1>
                            </h1>
                            <p className={"intro-sum"}>
                              I am a full stack web developer with a strong focus on backend development.
                                I specialize in designing and implementing efficient server-side solutions, API development, and database management.
                                My goal is to create robust and scalable systems to support engaging user experiences.
                            </p>

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