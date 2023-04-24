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
                            <CustomLink to={"/"}>Home</CustomLink>
                            <CustomLink to={"/resume"}>Resume</CustomLink>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
function CustomLink({to, children, ...props}){

    return(
        <Nav.Item className={"item"}>
            <Link className={"hover-underline-animation"} to={to} {...props} >{children}</Link>
        </Nav.Item>
    )

}
export default MainPage;