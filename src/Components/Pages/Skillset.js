import { Col, Container, Row } from "react-bootstrap";
import "./Skillset.css";

function Resume() {
    return (
        <Container className={"resume"}>
            <h1 className="name">My Experience</h1>
            <Row>
                <Col sm={5} className={"right-side"}>
                    <h1>Programming Languages</h1>
                    <ol>
                        <li>Python <span className="experience-text">Experienced</span></li>
                        <li>Java <span className="experience-text">Experienced</span></li>
                        <li>Swift <span className="experience-text">Experienced</span></li>
                        <li>JavaScript <span className="experience-text">Experienced</span></li>
                    </ol>
                </Col>
                <Col sm={{ span: 5, offset: 2 }} className={"left-side"}>
                    <h1>Frameworks and Technologies</h1>
                    <ol>
                        <li>SwiftUI <span className="experience-text">Experienced</span></li>
                        <li>React.js <span className="experience-text">Experienced</span></li>
                        <li>Node.js <span className="experience-text">Experienced</span></li>
                        <li>Flask <span className="experience-text">Experienced</span></li>
                        <li>MongoDB <span className="experience-text">Experienced</span></li>
                        <li>MySQL <span className="experience-text">Experienced</span></li>
                    </ol>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
