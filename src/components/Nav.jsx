import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../main.css";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import Resume from "../assets/My Resume.pdf";
import Ham from "../assets/hamburger.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header class="container-fluid relative">
        <nav class="d-flex">
          <div>
            <Link to="/">
              <h2 class="header-text">
                Danny<span class="header-suffix">.exe</span>
              </h2>
            </Link>
          </div>

          <div class="d-flex nav-social">
            <div className="hidden lg:flex gap-8 items-center">
              <Link to="/projects">
                <p>Projects</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </div>
            <div class="nav-icons d-flex">
              <a href="https://github.com/DanielUdechukwu">
                <img src={Github} alt="" />
              </a>
              <a href="https://twitter.com/ChumaUdechukwu">
                <img src={Twitter} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/udechukwudc">
                <img src={Linkedin} alt="" />
              </a>
            </div>
            <a href={Resume} download="Daniel's Resume">
              <button class="nav-button">Download Resume</button>
            </a>
          </div>

          <div
            className={`${
              toggle ? "rotate-180" : "rotate-0"
            } lg:hidden cursor-pointer`}
            onClick={toggleHamburger}
          >
            <img src={Ham} alt="" />
          </div>
        </nav>
        <div
          className={`${
            toggle ? "block" : "hidden"
          } bg-[#1d1e22] lg:hidden absolute w-[60%] h-screen right-0`}
        >
          <div className="text-white py-2">
            <Link to="/projects">
              <p className="text-lg hover:text-black transition ease-in-out delay-150 font-medium py-3 px-4 hover:bg-[#ff8e5e]">
                Projects
              </p>
            </Link>
            <Link to="/contact">
              <p className="text-lg hover:text-black transition ease-in-out delay-150 font-medium py-3 px-4 hover:bg-[#ff8e5e]">
                Contact
              </p>
            </Link>
            <a href={Resume} download="Daniel's Resume">
              <button class="nav-button mt-4 w-[90%] mx-4">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
