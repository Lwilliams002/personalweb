import FrontPage from "../UI/frontPage";
import Projects from "./Projects";
import {Container} from "react-bootstrap";
import "./Home.css"
import ContactPop from "../UI/ContactPop";
import AboutMe from "../UI/AboutMe";
function Home(){

    return(
        <Container>
            <Container >
                <FrontPage />
            </Container>

            <Container >
                <AboutMe />
            </Container>

            <Container id={"projectSection"} className={"project"}>
                <Projects />
            </Container>

            <Container id={"messageSection"} className={"message"} >
                <ContactPop />
            </Container>

        </Container>
    )
}
export default Home