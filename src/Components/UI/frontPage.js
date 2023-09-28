import "./frontPage.css";
import {Button, Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import AnimatedText from './AnimatedText';
import ContactPop from "./ContactPop";
import {useState} from "react";
import {Grid, Typography} from "@mui/material";
import {faUserGraduate, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Resume from "../Pages/Skillset";
import "../Pages/Skillset.css"
import Projects from "../Pages/Projects";


function frontPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className={"frontPage"} >
            <Container className={"justify-content-center"}>
                        <Container >
                            <h1 className={"intro-title"}>Hello I'm
                                <h1 className={"intro-name"}>Lesly Williams</h1>
                              <h1 className={"intro-title-loop"}>
                                <AnimatedText
                                  phrases={[
                                    "Full Stack Developer",
                                    "Backend Developer",
                                    "API Developer",
                                  ]}
                                  typingSpeed={50}
                                  delay={1500}
                                />
                              </h1>
                            </h1>

                            <Container className={"contact-box"}>
                                <Button variant="outline-light" onClick={() => setModalShow(true)}>
                                    Contact
                                </Button>
                                <Button variant="light" onClick={() => setModalShow(true)}>
                                    Resume
                                </Button>
                            </Container>
                            <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/EyeWinck.png?raw=true"} alt={"Profile pic"}/>


                            <Container>
                                <h1 className={"Mid-Intro"}>About me</h1>
                            </Container>

                            <Container className={"Mid-section"}>
                                <Container >
                                    <img className={"Mid-section-image"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/mid-section.JPG?raw=true"} alt={"Profile pic"}/>
                                </Container>

                                <Container className="about-me">

                                    <div className="info-boxes">
                                        <div className="info-box">
                                            <div className="icon-content">
                                                <div className="info-icon">
                                                    <FontAwesomeIcon size={"lg"} icon={faUserGraduate}></FontAwesomeIcon>
                                                </div>
                                                <div className={"info-text"}>
                                                    <p className={"info-box-title"}>Experience</p>
                                                    <p className={"info-box-sub"}>2 years</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-box">
                                            <div className="icon-content">
                                                <div className="info-icon">
                                                    <FontAwesomeIcon size={"lg"} icon={faLaptopCode}></FontAwesomeIcon>
                                                </div>
                                                <div className={"info-text"}>
                                                    <p className={"info-box-title"}>Projects</p>
                                                    <p className={"info-box-sub"}>3 completed projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <p className={"intro-sum"}>Hello! I'm Lesly,</p>
                                    <p className={"intro-sum"}>Software Engineer, Developer, Blockchain Enthusiast, Traveler and Man of culture.</p>
                                    <p className={"intro-sum"}>
                                        A natural affinity for computers has sparked a pursuit into the tech industry with aspirations of
                                        creating applications and software to help further the advancement of innovation in technology.
                                    </p>
                                    <p className={"intro-sum"}>
                                        Most of my foundational programming skills are from a coding bootcamp with Generation USA.
                                        My hunger to flexibly explore practical solutions in a creative manner led me down the self-taught path.
                                        As I continue to build new projects and revise old ones, I am always seeking to improve my programming toolbelt.
                                        Currently, I am in pursuit of finishing my Associate in Science in Networking Services Technology - Enterprise Cloud Computing degree at Miami-Dade College.
                                    </p>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
        </Container>

    )
}

export default frontPage;