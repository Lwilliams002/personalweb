import { Col, Container, Row } from "react-bootstrap";
import "./Resume.css";

const handleClick = () => {
  window.location.href = "https://github.com/lwilliams002";
};

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
            <div className="github-box" onClick={handleClick}>
              <img
                src="https://github.com/Lwilliams002/personalweb/blob/master/public/img.png?raw=true"
                alt="GitHub Icon"
              />
              <p>View on GitHub</p>
            </div>
          </Col>
          <Col lg={4}>
            <Container className={"left-side"}>
              <h3 className="section-title">Contact</h3>
              <p>(754) 217-9770</p>
              <p>Lwilliams.devs@gmail.com</p>
              <p>Miami, Florida</p>
              <p>linkedin.com/in/lwilliams002</p>
              <hr />
              <h3 className="section-title">Education</h3>
              <p>Bachelor of Science Computer Science</p>
              <p>Florida International University</p>
              <p>2023 - Current</p>
              <hr />
              <h3 className="section-title">Skills</h3>
              <Row>
                <Col>
                  <p>Python</p>
                  <p>Java</p>
                  <p>C#</p>
                  <p>JavaScript</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                </Col>
                <Col>
                  <p>React</p>
                  <p>HTML5 / CSS3</p>
                  <p>Git / GitHub</p>
                  <p>
                    Visual Studio / PyCharm / IntelliJ IDEA
                  </p>
                  <p>Illustrator / Photoshop / Figma</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
