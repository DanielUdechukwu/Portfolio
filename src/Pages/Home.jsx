import React, { useEffect, useRef } from "react";
import Circletype from "circletype";
import Nav from "../components/Nav";
import "../main.css";
import Hands from "../assets/Hands.svg";
import Resume from "../assets/My Resume.pdf";
import Me from "../assets/New_Me.jpg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import Group45 from "../assets/Group 45.svg";
import Workspace from "../assets/workspace.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const circleType = new Circletype(textRef.current);
    circleType.radius(2);
    return () => {
      circleType.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section class="hero container-fluid">
          <div class="w-[90%] lg:w-[80%] mx-auto hero-main d-flex">
            <div class="hero-left">
              <div class="hero-intro d-flex">
                <img src={Hands} alt="" />
                <p>Hello, my name is</p>
              </div>
              <h3 class="first-name">Daniel.</h3>
              <h2 class="job-description">Front-end Web developer</h2>
              <p class="job-brief">
                I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
                BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
                INTERACTIONS THAT DELIGHT PEOPLE.
              </p>

              <div class="btn d-flex">
                <button
                  class="hero-button"
                  onclick="window.location.href= '#contact-form'"
                >
                  Get in touch
                </button>
                <a href={Resume} download="Daniel's Resume">
                  <button class="nav-button btn-mobile">Download Resume</button>
                </a>
              </div>
            </div>

            <div class="hero-img">
              <img src={Me} alt="" />
              <p ref={textRef} id="circle">
                Scroll to Explore &#8226;&#8226; Scroll to Explore&#8226;&#8226;
              </p>
            </div>
          </div>
        </section>

        <section class="container-fluid stack-section">
          <div class="w-[90%] mx-auto d-flex stacks">
            <h4>HTML5</h4>
            <span class="asterick d-flex">*</span>
            <h4>CSS</h4>
            <span class="asterick d-flex">*</span>
            <h4>JavaScript</h4>
            <span class="asterick d-flex">*</span>
            <h4>Bootstrap</h4>
            <span class="asterick d-flex">*</span>
            <h4>TailwindCSS</h4>
            <span class="asterick d-flex">*</span>
            <h4>ReactJS</h4>
          </div>
        </section>

        <section class="container-fluid about">
          <div class="w-[90%] lg:w-[80%] mx-auto about-main d-flex">
            <div class="about-me">
              <h4>
                About <span>Daniel.</span>
              </h4>
              <p class="description">
                I am a Front-end web developer from Nigeria with a eye for good
                and accurate design and typography. I work with various
                Front-end technologies passionate about delivering good user
                experience to clients. I'm excited to make the leap and continue
                refining my skills with the right company.
              </p>
              <div class="socials d-flex">
                <a href="https://github.com/DanielUdechukwu" target="_blank">
                  <img src={Github} alt="" />
                </a>
                <a href="https://twitter.com/ChumaUdechukwu" target="_blank">
                  <img src={Twitter} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/udechukwudc"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>

              <div class="tech-stack-2">
                <h5 class="recent-tech-heading">
                  Here are a few technologies I’ve been working with recently:
                </h5>
                <div class="recent-tech">
                  <div class="d-flex category">
                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>HTML</p>
                    </div>

                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>CSS</p>
                    </div>

                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>JavaScript</p>
                    </div>
                  </div>

                  <div class="d-flex category">
                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>Tailwindcss</p>
                    </div>

                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>Bootstrap</p>
                    </div>

                    <div class="d-flex">
                      <img src={Group45} alt="" />
                      <p>Git</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="workspace mt-8 lg:mt-0">
              <img src={Workspace} alt="" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
