import FrontPage from "../UI/frontPage";
import Projects from "./Projects";

function Home(){
    return(
        <div>
            <FrontPage></FrontPage>
            <h1>My Projects</h1>
            <Projects />
        </div>
    )
}
export default Home