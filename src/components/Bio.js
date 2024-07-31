import React, { useState } from "react";

import profile_photo from "../assets/images/photo.png";
import aws from "../assets/images/about/skills/aws.png";
import blender from "../assets/images/about/skills/blender.png";
import c from "../assets/images/about/skills/c.png";
import cPlus from "../assets/images/about/skills/c++.png";
import css from "../assets/images/about/skills/css.png";
import chip from "../assets/images/about/skills/chip.png";
import html from "../assets/images/about/skills/html.png";
import game from "../assets/images/about/skills/game.png";
import googleCloud from "../assets/images/about/skills/google-cloud.png";
import ai from "../assets/images/about/skills/illustrator.png";
import ps from "../assets/images/about/skills/photoshop.png";
import java from "../assets/images/about/skills/java.png";
import python from "../assets/images/about/skills/python.png";
import react from "../assets/images/about/skills/react.png";
import javascript from "../assets/images/about/skills/javascript.png";
import git from "../assets/images/about/skills/git.png";
import sql from "../assets/images/about/skills/sqlite.png";
import streamlit from "../assets/images/about/skills/streamlit.png";
import figma from "../assets/images/about/skills/figma.png";
import mongo from "../assets/images/about/skills/mongo.png";
import node from "../assets/images/about/skills/node.png";

const bio_info =
  "Hello! My name is Lulu. I am a software engineer with a background in Animal Science. I have been programming for about 3 years now. I am passionate about exploring new technologies and utilizing my skills to solve problems in practical scenarios. I aim to apply my expertise and creativity to provide innovative solutions to real-world challenges.";

const abilities = [
  {
    name: "Continuous Learning",
    info: "I stay updated with industry trends and technologies and learn new skills continuously. After learning programming languages, I not only created apps but also built an IoT water system for my plants to avoid bothering friends when I was in Taiwan.",
  },
  {
    name: "Adaptability",
    info: "Adaptability is one of my core strengths, enabling me to thrive in dynamic environments and easily tackle diverse challenges, such as relocating from Taiwan to America and transitioning from Animal Science to Computer Science.",
  },
  {
    name: "Teamwork",
    info: "As a volleyball player, I learned how teamwork ensures seamless collaboration, driving teams or projects to success.",
  },
];

const skills = [
  { img: c, name: "C" },
  { img: cPlus, name: "C++" },
  { img: java, name: "Java" },
  { img: python, name: "Python" },
  { img: game, name: "Pygame" },
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: node, name: "Node.js" },
  { img: react, name: "React.js" },
  { img: streamlit, name: "Streamlit" },
  { img: git, name: "Git" },
  { img: sql, name: "SQLite" },
  { img: mongo, name: "Mongo DB" },
  { img: figma, name: "Figma" },
  { img: ai, name: "Illustrator" },
  { img: ps, name: "Photoshop" },
  { img: blender, name: "Blender" },
  { img: googleCloud, name: "Google Cloud" },
  { img: aws, name: "AWS" },
  { img: chip, name: "Microcontrollers" },
];

const Bio = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [tabNum, setTabNum] = useState(1);

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    setCursorPosition({ x, y });
  };

  const clickHandler = (tabNum) => {
    setTabNum(tabNum);
  };

  return (
    <div className="bio-container">
      <div className="bio-browser" onMouseMove={handleMouseMove}>
        <div
          className="bio-browser-mouse"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>
        <div className="bio-browser-tabs">
          <div
            onClick={() => clickHandler(1)}
            className={
              tabNum === 1 ? "bio-browser-tab active" : "bio-browser-tab"
            }
          >
            Who I am
          </div>
          <div
            onClick={() => clickHandler(2)}
            className={
              tabNum === 2 ? "bio-browser-tab active" : "bio-browser-tab"
            }
          >
            What I can do
          </div>
          <div
            onClick={() => clickHandler(3)}
            className={
              tabNum === 3 ? "bio-browser-tab active" : "bio-browser-tab"
            }
          >
            What makes me effective
          </div>
        </div>
        <div className="bio-browser-windows">
          <div
            className={
              "bio-browser-window bio-browser-window1" +
              (tabNum === 1 ? " open" : "")
            }
          >
            <div className="bio-photo">
              <img
                src={profile_photo}
                alt="Yi-Lu Wu"
                className="bio-photo-img"
              />
            </div>
            <div className="bio-info">
              <h1 className="bio-info-name">Yi-Lu Wu</h1>
              <div className="bio-info-content">{bio_info}</div>
            </div>
          </div>
          <div
            className={
              "bio-browser-window bio-browser-window2" +
              (tabNum === 2 ? " open" : "")
            }
          >
            <h2>My Toolbox: </h2>
            <div className="bio-skills">
              {skills.map((skill, i) => (
                <div className="bio-skill" key={i}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="bio-skill-img"
                  />
                  <div className="bio-skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              "bio-browser-window bio-browser-window3" +
              (tabNum === 3 ? " open" : "")
            }
          >
            <div className="bio-abilities">
              {abilities.map((ability, i) => (
                <div className="bio-ability" key={i}>
                  <div className="bio-ability-name">{ability.name}</div>
                  <div className="bio-ability-info">{ability.info}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bio-img">
        <div className="bio-img-light"></div>
        <div className="bio-img-working"></div>
      </div>
    </div>
  );
};

export default Bio;
