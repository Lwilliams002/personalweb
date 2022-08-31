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
                            <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/EyeWinck.png?raw=true"} alt={"Profile pic"}/>
                            <h1 className={"intro-title"}>Hi, I am<h1 className={"intro-title-loop"}>
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "Lesly Williams",
                                        2000,
                                        "Full Stack Developer",
                                        1500,
                                        "Project Manager",
                                        1500,
                                    ]}
                                />
                            </h1>
                            </h1>
                            <p className={"intro-sum"}>I am a frontend web developer. I can provide clean code and pixel
                                perfect design. I also make website more & more interactive with web animations.</p>
                        </Container>
                        <Container className={"contact-box"}>
                            <Modal/>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default frontPage;