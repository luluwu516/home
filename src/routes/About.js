import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Character from "../components/Character";

import Experience from "../components/Experience";
import Hobby from "../components/Hobby";
import Bio from "../components/Bio";

import birdFly from "../assets/images/about/sider/birdFly.png";
import birdStand from "../assets/images/about/sider/birdStand.png";

const dialogs = [
  "Thank you for learning more about me.",
  "Let's take a look on my side projects!",
];

const About = () => {
  // Character Dialogs
  const [isPlaying, setIsPlaying] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogSubIndex, setDialogSubIndex] = useState(0);

  const expRef = useRef();
  const [bioNum, setBioNum] = useState(1);

  const scrollHandler = () => {
    const about = document.querySelector(".about");
    const exp = document.querySelector(".experiences");

    const scroll = about.scrollTop;
    if (scroll < exp.offsetTop) {
      setBioNum(1);
    } else if (
      scroll >
      expRef.current.clientHeight + 0.5 * about.offsetHeight
    ) {
      setBioNum(3);
      setIsPlaying(true);
    } else {
      setBioNum(2);
    }
  };

  const clickHandler = () => {
    if (isPlaying) {
      if (
        dialogSubIndex === dialogs[dialogIndex].length &&
        dialogIndex === dialogs.length - 1
      ) {
        setDialogSubIndex(0);
        setDialogIndex(0);
        setIsPlaying(false);
      }
      if (dialogSubIndex < dialogs[dialogIndex].length) {
        setDialogSubIndex(dialogs[dialogIndex].length);
      } else {
        setDialogSubIndex(0);
        setDialogIndex((prev) => prev + 1);
      }
    } else {
      setDialogSubIndex(0);
      setDialogIndex(0);
    }
  };

  return (
    <div
      className="about"
      onScroll={() => {
        scrollHandler();
      }}
      onClick={clickHandler}
    >
      <section id="bio" className="bio">
        <Bio />
      </section>
      <section id="experiences" className="experiences" ref={expRef}>
        <Experience />
      </section>
      <section id="hobby" className="hobbies">
        <h2> When I am not learning, I am doing...</h2>
        <Hobby />
        <div className="next">
          <Link to="/projects" className="next_goToProjects">
            <div className="next_goToProjects_sign"></div>
          </Link>
        </div>
        <Character
          page="about"
          isPlaying={isPlaying}
          index={dialogIndex}
          subIndex={dialogSubIndex}
          setSubIndex={setDialogSubIndex}
        />
      </section>
      <div className="about-sider">
        <a
          href="#bio"
          className={
            "about-sider-bio about-slider-item" +
            (bioNum === 1 ? " active" : "")
          }
        >
          About
          <img src={birdStand} alt="bird" className="birdStand" />
          <img src={birdFly} alt="bird" className="birdFly" />
        </a>
        <a
          href="#experiences"
          className={
            "about-sider-exp about-slider-item" +
            (bioNum === 2 ? " active" : "")
          }
        >
          Experiences
          <img src={birdStand} alt="bird" className="birdStand" />
          <img src={birdFly} alt="bird" className="birdFly" />
        </a>
        <a
          href="#hobby"
          className={
            "about-sider-hobby about-slider-item" +
            (bioNum === 3 ? " active" : "")
          }
        >
          Hobby
          <img src={birdStand} alt="bird" className="birdStand" />
          <img src={birdFly} alt="bird" className="birdFly" />
        </a>
      </div>
    </div>
  );
};

export default About;
