import React, { useRef, useState } from "react";

import Experience from "../components/Experience";
import Hobby from "../components/Hobby";
import Bio from "../components/Bio";

import birdFly from "../assets/images/about/sider/birdFly.png";
import birdStand from "../assets/images/about/sider/birdStand.png";

const About = () => {
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
    } else {
      setBioNum(2);
    }
  };

  return (
    <div
      className="about"
      onScroll={() => {
        scrollHandler();
      }}
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
      </section>
      <div className="about_sider">
        <a
          href="#bio"
          className={
            "about_sider_bio about_slider_item" +
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
            "about_sider_exp about_slider_item" +
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
            "about_sider_hobby about_slider_item" +
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
