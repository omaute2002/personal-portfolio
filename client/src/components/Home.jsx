import React, { useEffect, useContext, useState } from "react";
import "./Home.css";
import InformationCard from "./InformationCard";
import { CardContext } from "../CardContext";
import "aos/dist/aos.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faFilePdf,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { cardContext, setCardContext } = useContext(CardContext);
  const [resumeUrl, setResumeUrl] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1500, // You can customize the duration of animations
      once: false, // Ensure the animation happens more than once
    });


  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [cardContext]);

  

  function downloadResume() {
    console.log("resume URl: ", resumeUrl);
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    } else {
      console.error("resume URl is not available");
    }
  }

  return (
    <>
      <div
        id="home__section"
        className="min-h-screen  flex flex-col lg:flex-row"
        style={{ left: position.x, top: position.y }}
      >
        {/* Left Section */}
        <div
          data-aos="fade-up"
          id="left__flex__side"
          className="w-full lg:w-1/2 text-white flex p-6"
        >
          <div id="name__div">
            <h1 className="text-5xl md:text-6xl lg:text-9xl">Hello, I'm</h1>
            <h1 className="text-5xl md:text-6xl lg:text-9xl">Om Aute</h1>
            <p className="intro__para lg:text-lg md:text-base sm:text-sm text-slate-400">
              I am an enthusiastic full stack web developer with a
              specialization in the MERN stack. Having crafted several full
              stack projects, I am now delving into DevOps concepts to broaden
              my expertise. I am committed to utilizing my skills and drive to
              contribute to real-world problem solving, aiming to make a
              significant and impactful difference.
            </p>
            <div className="about__section text-xl">
              <p
                className="text-lg text-slate-500 hover:text-white cursor-pointer"
                onClick={() => setCardContext("skills")}
              >
                01 - Skills
              </p>
              <p
                className="text-lg text-slate-500 hover:text-white cursor-pointer"
                onClick={() => setCardContext("projects")}
              >
                02 - Projects
              </p>
              <p
                className="text-lg text-slate-500 hover:text-white cursor-pointer"
                onClick={() => setCardContext("experiences")}
              >
                03 - Experience
              </p>
              <p
                className="text-lg text-slate-500 hover:text-white cursor-pointer"
                onClick={() => setCardContext("education")}
              >
                04 - Education
              </p>
            </div>
            <div className="social-icons mt-8 ml-2">
              <a
                href="https://www.linkedin.com/in/om-aute/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mr-6"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/omaute2002"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mr-6"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://x.com/AuteOm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mr-6"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                className="social-icon mr-6"
                href="https://drive.google.com/file/d/1aJRAl_MdCuoAYDXqCTnhIG2zGTbpA2pS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={downloadResume}
              >
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </a>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 sm:ml-2 md:ml-6 text-black flex items-center justify-center">
          <InformationCard key={cardContext} />
        </div>
      </div>
    </>
  );
}

export default Home;
