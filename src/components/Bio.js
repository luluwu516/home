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
  { img: chip, name: "Development Board" },
];

const Bio = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [tabNum, setTabNum] = useState(1);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = (hovered) => {
    setButtonHovered(hovered);
  };

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    setCursorPosition({ x, y });
  };

  const clickHandler = (tabNum) => {
    setTabNum(tabNum);
  };

  const mouseHoverStyles = {
    isHovered: {
      left: cursorPosition.x,
      top: cursorPosition.y,
      transform: "scale(2) translateY(0)",
      filter: "blur(8px)",
    },
    isNotHovered: {
      left: cursorPosition.x,
      top: cursorPosition.y,
      transform: "scale(1) translateY(-50%)",
    },
  };

  const mouseItemStyles = {
    itemIsHovered: {
      transform: "translate(0% 0%)",
    },
    itemIsNotHovered: {
      transform: "translate(-50% -50%)",
    },
  };

  return (
    <div className="bio_container">
      <div className="bio_browser" onMouseMove={handleMouseMove}>
        <div
          className="bio_browser_mouse"
          style={
            buttonHovered
              ? mouseHoverStyles.isHovered
              : mouseHoverStyles.isNotHovered
          }
        >
          <div
            className="bio_browser_mouse_item"
            style={
              buttonHovered
                ? mouseItemStyles.itemIsHovered
                : mouseItemStyles.itemIsNotHovered
            }
          ></div>
        </div>
        <div className="bio_browser_tabs">
          <div
            onClick={() => clickHandler(1)}
            className={
              tabNum === 1 ? "bio_browser_tab active" : "bio_browser_tab"
            }
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
          >
            Who I am
          </div>
          <div
            onClick={() => clickHandler(2)}
            className={
              tabNum === 2 ? "bio_browser_tab active" : "bio_browser_tab"
            }
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
          >
            What I can do
          </div>
          <div
            onClick={() => clickHandler(3)}
            className={
              tabNum === 3 ? "bio_browser_tab active" : "bio_browser_tab"
            }
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
          >
            What makes me effective
          </div>
        </div>
        <div className="bio_browser_windows">
          <div className={"bio_browser_window" + (tabNum === 1 ? " open" : "")}>
            <div className="bio_photo">
              <img
                src={profile_photo}
                alt="Yi-Lu Wu"
                className="bio_photo_img"
              />
            </div>
            <div className="bio_info">
              <h1 className="bio_info_name">Yi-Lu Wu</h1>
              <div className="bio_info_content">
                Hello! My name is Lulu. I am a software engineer with a
                background in Animal Science. I have been programming for about
                3 years now. I am passionate about problem-solving, exploring,
                and utilizing new technologies in practical scenarios. I aim to
                apply my expertise and creativity to provide innovative
                solutions to real-world challenges.
              </div>
            </div>
          </div>
          <div
            className={
              "bio_browser_window bio_browser_window2" +
              (tabNum === 2 ? " open" : "")
            }
          >
            <h2>Some technologies I've worked with: </h2>
            <div className="skills">
              {skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <img src={skill.img} alt={skill.name} className="skill_img" />
                  <div className="skill_name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={"bio_browser_window" + (tabNum === 3 ? " open" : "")}>
            <div className="abilities">
              <div className="ability">
                <div className="ability_name">Teamwork</div>
                <div className="ability_info">
                  As a volleyball player, I learned how teamwork ensures
                  seamless collaboration, driving teams or projects forward with
                  collective expertise.
                </div>
              </div>
              <div className="ability">
                <div className="ability_name">Adaptability</div>
                <div className="ability_info">
                  Adaptability is one of my core strengths, enabling me to
                  thrive in dynamic environments and easily tackle diverse
                  challenges, such as from Taiwan to America and from Anima
                  Science to Computer Science.
                </div>
              </div>
              <div className="ability">
                <div className="ability_name">Continuous Learning</div>
                <div className="ability_info">
                  I stay updated with industry trends and technologies and learn
                  new skills continuously. For instance, after I learned a
                  programming language, I built an IoT water system for my
                  plants to avoid bothering friends when I was in Taiwan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bio_img">
        <div className="bio_img_light"></div>
        <div className="bio_img_working"></div>
      </div>
    </div>
  );
};

export default Bio;
