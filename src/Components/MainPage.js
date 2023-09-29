import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faDiagramProject, faBookOpen, faMessage } from '@fortawesome/free-solid-svg-icons';
import "./MainPage.css";

function MainPage() {
    useEffect(() => {
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Active Section Highlighting
        const handleScroll = () => {
            const sections = ['homeSection', 'bookSection', 'projectSection', 'messageSection'];
            let current;

            sections.forEach(section => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();

                if (rect.top <= window.innerHeight * 0.1 && rect.bottom >= 0) {
                    current = section;
                }
            });

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                current = 'messageSection';
            }

            document.querySelectorAll('.icon-style').forEach(icon => {
                icon.classList.remove('active');
            });

            if (current) {
                document.querySelector(`a[href="#${current}"] .icon-style`).classList.add('active');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar className={"MainPage"} bg="#1E242A" variant="dark" fixed={"bottom"}>
            <Container className={"justify-content-center"}>
                <Nav>
                    <a href="#homeSection">
                        <FontAwesomeIcon icon={faHouseUser} className="icon-style" size={"lg"} />
                    </a>
                    <a href="#bookSection">
                        <FontAwesomeIcon icon={faBookOpen} className="icon-style" size={"lg"} />
                    </a>
                    <a href="#projectSection">
                        <FontAwesomeIcon icon={faDiagramProject} className="icon-style" size={"lg"} />
                    </a>
                    <a href="#messageSection">
                        <FontAwesomeIcon icon={faMessage} className="icon-style" size={"lg"} />
                    </a>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default MainPage;
