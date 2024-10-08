import "./frontPage.css";
import {Button, Container} from "react-bootstrap";
import AnimatedText from './AnimatedText';



function frontPage() {
    const goToMessageSection = () => {
        const section = document.getElementById("messageSection");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const openResumePDF = () => {
        window.open('https://raw.githubusercontent.com/Lwilliams002/personalweb/master/public/resume.pdf', '_blank');
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks

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
                                                "Aspiring AR Developer",
                                                "iOS Mobile Developer",
                                                "Full Stack Developer",
                                                
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
                            </Container>



                            </Container>
                    </Container>
        </Container>

    )
}

export default frontPage;