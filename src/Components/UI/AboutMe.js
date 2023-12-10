import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode, faUserGraduate} from "@fortawesome/free-solid-svg-icons";


function AboutMe(){



    // Create a roadmap for achievements with 1-2 sentences
    return(
        <Container id={"bookSection"}>
            <Container >
                <h1 className={"Mid-Intro"} >About me</h1>
            </Container>
            <Container className={"Mid-section"} >

                <Container className={"mid-section-image"} >
                    <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/pro-headshot.png?raw=true"} alt={"Profile pic"}/>
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
                    <p className={"intro-sum"}>Software Engineer, Traveler, and an aspiring AR Developer.</p>
                    <p className={"intro-sum"}>
                        Computers have always captivated me, leading me on a rewarding journey through the tech industry.
                        Fueled by a passion for innovation and practicality, I dove headfirst into self-taught programming,
                        fortified by comprehensive Full Stack Web Development courses on Udemy.
                    </p>
                    <p className={"intro-sum"}>
                        With each project I undertake, I strive to expand my programming skills, constantly looking to weave creativity into functionality.
                        As of now, I'm deepening my knowledge base by pursuing a Bachelor of Science in Computer Science at Florida International University (FIU).
                        But it's the magic of Augmented Reality (AR) that truly sparks my dreams.
                        I envision a future where the line between our digital experiences and tangible reality becomes seamlessly integrated.
                        And I'm determined to be at the forefront of making that fusion come alive.
                    </p>





                </Container>
            </Container>

        </Container>
    );
}
export default AboutMe;