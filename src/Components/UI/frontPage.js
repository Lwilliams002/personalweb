import "./frontPage.css";
import {Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function frontPage() {

    return (
        <Container className={"frontPage"}>
            <Row>
                <Col lg={12} >
                    <Container className={"justify-content-center"}>
                        <img className={"profile"} src={"../EyeWinck.png"} alt={"Profile pic"} />
                        <h1 className={"intro-title"}>Hi, I am<span className={"name-array"}> Lesly Williams</span></h1>
                        <p className={"intro-sum"}>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <div>
                            <ul>
                                <li><FontAwesomeIcon icon="fa-brands fa-github-square" /></li>
                            </ul>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default frontPage;