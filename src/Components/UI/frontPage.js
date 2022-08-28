import "./frontPage.css";
import {Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Typical from 'react-typical';
import Modal from "./Modal";


function frontPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks


    return (
        <Container className={"frontPage"}>
            <Row>
                <Col lg={12}>
                    <Container className={"justify-content-center"}>
                        <Container>
                            <img className={"profile"} src={"../EyeWinck.png"} alt={"Profile pic"}/>
                            <h1 className={"intro-title"}>Hi, I am<h1 className={"intro-title-loop"}>
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "Lesly Williams",
                                        1000,
                                        "Full Stack Developer",
                                        1000,
                                        "Project Manager",
                                        1000,
                                        "gamer",
                                        1000
                                    ]}
                                />
                            </h1>
                            </h1>
                            <p className={"intro-sum"}>I am a frontend web developer. I can provide clean code and pixel
                                perfect design. I also make website more & more interactive with web animations.</p>
                        </Container>
                        <Container>
                            <Modal/>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default frontPage;