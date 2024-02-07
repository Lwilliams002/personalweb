import Container from "react-bootstrap/Container";
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
function AboutMe() {
  const splineViewerContainerRef = useRef(null);
  const [splineViewerHeight, setSplineViewerHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const windowHeight = window.innerHeight;
      const desiredHeight = windowHeight * 0.5; // Adjust this multiplier as needed (0.5 means 50% of viewport height)

      if (splineViewerContainerRef.current) {
        splineViewerContainerRef.current.style.height = `${desiredHeight}px`;
        setSplineViewerHeight(desiredHeight);
      }
    }

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize); // Update height on window resize

    return () => window.removeEventListener('resize', handleResize); // Clean up on component unmount
  }, []);


  return (
    <Container id={"bookSection"}>
      <Container style={{ marginTop: splineViewerHeight / 4, marginBottom: splineViewerHeight / 4 }} ref={splineViewerContainerRef}>
        <spline-viewer url="https://prod.spline.design/wyoZ5NaVZeTkle6P/scene.splinecode"></spline-viewer>
      </Container>
      <Container className={"Mid-section"}>
        <Container className={"mid-section-image"}>
          <img className={"profile"} src={"https://github.com/Lwilliams002/personalweb/blob/master/public/pro-headshot.png?raw=true"} alt={"Profile pic"} />
        </Container>
        <Container className="about-me">
          <h2 className={"Mid-Intro"}>Hello! I'm Lesly</h2>
          <p className={"intro-sum"}>Augmenting the world</p>
          <p className={"intro-sum"}>
          I'm a Computer Science student at FIU with a deep fascination for Augmented Reality (AR) and a 
          knack for creating engaging mobile experiences. Driven by innovation and fueled by endless curiosity,
          I'm constantly learning and pushing the boundaries of what's possible with code.
          </p>
          
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
