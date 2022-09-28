import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MainPage.css";
import {Link} from "react-router-dom";


function MainPage() {
    return (
        <div>
            <Navbar className={"MainPage"} bg="#1E242A" variant="dark" fixed={"top"} >
                <Container className={"justify-content-center"}>
                        <Nav>
                            <Nav.Item className={"item"}>
                                <Link className={"hover-underline-animation"} to="/"><span className={"item-num"}>01.<span className={"link-title"}>.</span></span >Home</Link>
                            </Nav.Item>
                            <Nav.Item className={"item"}>
                                <Link className={"hover-underline-animation"} to="/resume"><span className={"item-num"}>02.<span className={"link-title"}>.</span></span>Resume</Link>
                            </Nav.Item>
                            <Nav.Item className={"item"}>
                                <Link className={"hover-underline-animation"} to="/contact"><span className={"item-num"}>03.<span className={"link-title"}>.</span></span>Contact</Link>
                            </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default MainPage;