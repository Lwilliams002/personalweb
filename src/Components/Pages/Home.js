import FrontPage from "../UI/frontPage";
import Projects from "./Projects";
import Resume from "./Resume";
import {Container} from "react-bootstrap";
import "./Home.css"
import ContactPop from "../UI/ContactPop";
import Copyrights from "../UI/Copyrights";
function Home(){
    return(
        <Container>
            <Container id={"homeSection"}>
                <FrontPage />
            </Container>

            <Container id={"bookSection"} className={"book"}>
                <Resume />
            </Container>

            <Container id={"projectSection"} className={"project"}>
                <Projects />
            </Container>
            <Container id={"messageSection"} className={"message"}>
                <ContactPop />
            </Container>
        </Container>
    )
}
export default Home