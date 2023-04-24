import { Col, Container, Row } from "react-bootstrap";
import "./Resume.css";

function Resume() {
  return (
    <Container className={"resume"}>
      <h1 className="name">Career Objective</h1>
      <Container>
        <Row>
          <Col lg={8}>
            <Container className={"right-side"}>
              <p>
                Highly motivated and detail-oriented software developer with
                experience in building full-stack applications. Skilled in
                JavaScript, Python, HTML, CSS, and various web frameworks.
                Seeking a challenging internship position to apply my skills and
                contribute to the software development community.
              </p>
            </Container>
          </Col>
          <Col lg={4}>
            <Container className={"left-side"}>
              <h3 className="section-title">Contact</h3>
              <p>(754) 217-9770</p>
              <p>Lesly.Williams001@mymdc.net</p>
              <p>Miami, Florida</p>
              <p>linkedin.com/in/lwilliams002</p>
              <br />
              <h3 className="section-title">Education</h3>
              <p>Bachelor of Science</p>
              <p>Computer Science</p>
              <p>Florida International University</p>
              <p>2022 - Current</p>
              <br />
              <h3 className="section-title">Skills</h3>
              <p>HTML / CSS</p>
              <p>JavaScript</p>
              <p>Python</p>
              <p>React</p>
              <p>Next.js</p>
              <p>Material-UI</p>
            </Container>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Resume;