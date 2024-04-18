import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Abhay Deep Singh </b> 
                  and I am a <b className="purple">Computer Science Honors Presidential Scholar </b> 
                    at <b className="purple">Georgia State University </b>
                      in Atlanta, Georgia.
                <br />
                <br />
                        I am proficient in various programming languages such as&nbsp;
                  <b className="purple">
                    {""}
                    Python, JavaScript, Swift, CPP, C, HTML/CSS.{" "}
                  </b>
                <br />
                <br />
                I also have 2 years of work experience working with frameworks and libraries such as&nbsp;

                  <b className="purple">
                    {""}
                    NodeJS, ReactJS, NextJS, IBM QISKIT, Pandas, and NumPy{" "}
                  </b> for my web development intenship and research project.
                <br />

                <br />I have overhauled my skillset by learning IOS development alongside web development with a strong understanding of  &nbsp;
                  <b className="purple">Swift, XCode with StoryBoards and ViewController flows, and mobile first approach. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
