import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MainPage.css";


function MainPage() {
    return (
        <div>
            <Navbar className={"MainPage"} bg="#1E242A" variant="dark" fixed={"top"} >
                <Container className={"justify-content-center"}>
                        <Nav>
                            <Nav.Item className={"item"}>
                                <Nav.Link className={"hover-underline-animation"} href="/"><span className={"item-num"}>01.<span className={"link-title"}>.</span></span >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={"item"}>
                                <Nav.Link className={"hover-underline-animation"} href="/Resume"><span className={"item-num"}>02.<span className={"link-title"}>.</span></span>Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={"item"}>
                                <Nav.Link className={"hover-underline-animation"} href="/Contact"><span className={"item-num"}>03.<span className={"link-title"}>.</span></span>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default MainPage;