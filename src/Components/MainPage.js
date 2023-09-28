import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faDiagramProject, faBookOpen, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import "./MainPage.css";

function MainPage() {
    return (
        <Container>
            <Navbar className={"MainPage"} bg="#1E242A" variant="dark" fixed={"bottom"}>
                <Container className={"justify-content-center"}>
                    <Nav>
                        <Link activeClass="active" to="homeSection" spy={true} smooth={true} duration={1} offset={-250}>
                            <FontAwesomeIcon icon={faHouseUser} className="icon-style" size={"lg"} />
                        </Link>
                        <Link activeClass="active" to="bookSection" spy={true} smooth={true} duration={1} offset={-150} >
                            <FontAwesomeIcon icon={faBookOpen} className="icon-style" size={"lg"} />
                        </Link>
                        <Link activeClass="active" to="projectSection" spy={true} smooth={true} duration={1} offset={-10}>
                            <FontAwesomeIcon icon={faDiagramProject} className="icon-style" size={"lg"} />
                        </Link>
                        <Link activeClass="active" to="messageSection" spy={true} smooth={true} duration={1} offset={-250}>
                            <FontAwesomeIcon icon={faMessage} className="icon-style" size={"lg"} />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default MainPage;
