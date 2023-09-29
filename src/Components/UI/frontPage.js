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
    const goToMessageSection = () => {
        const section = document.getElementById("messageSection");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const openResumePDF = () => {
        window.open('https://raw.githubusercontent.com/Lwilliams002/personalweb/master/public/Apple%20Resume%20V2.pdf', '_blank');
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className={"frontPage"} id={"homeSection"} >
            <Container className={"justify-content-center"}>

                        <Container  >
                            <Container>
                                <h1 className={"intro-title"} >Hello I'm
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
                                    <Button  variant="outline-light" onClick={goToMessageSection}>
                                        Contact
                                    </Button>
                                    <Button variant="light" onClick={openResumePDF}>
                                        Resume
                                    </Button>
                                </Container>
                                <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/EyeWinck.png?raw=true"} alt={"Profile pic"}/>
                            </Container>



                            </Container>
                    </Container>
        </Container>

    )
}

export default frontPage;