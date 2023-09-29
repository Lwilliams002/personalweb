import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode, faUserGraduate} from "@fortawesome/free-solid-svg-icons";


function AboutMe(){

    return(
        <Container id={"bookSection"}>
            <Container >
                <h1 className={"Mid-Intro"} >About me</h1>
            </Container>
            <Container className={"Mid-section"} >

                <Container className={"mid-section-image"} >
                    <img className="Mid-section-image" src={"https://github.com/Lwilliams002/personalweb/blob/master/public/mid-section.jpeg?raw=true"} alt={"Profile pic"}/>
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
    );
}
export default AboutMe;