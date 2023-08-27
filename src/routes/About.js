import React, { useState } from "react";
import Character from "../components/Character";
import Experience from "../components/Experience";
import Favorite from "../components/Favorite";

import photo from "../assets/images/photo.png";

const dialogs = [
  "Hello! That is me! I have long hair now. Nice to meet you.",
  "Here are my work and education experiences.",
  "Welcome to my Hobby Solar System. They are all my favorites.",
];

const bio =
  "Fueled by a newfound love for coding, I have shifted my focus from Scientific research to Computer Science. I am looking forward to applying my Computer Science knowledge to practical scenarios while gaining a deeper understanding of its real-world implications.";

const About = () => {
  const view_width = window.innerWidth;
  // Character Dialogs
  const [isPlaying, setIsPlaying] = useState(true);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogSubIndex, setDialogSubIndex] = useState(0);
  const [itemPos, setItemPos] = useState({ x: view_width / 2, y: 0 });

  const scrollHandler = (element) => {
    const e = document.querySelector(element);
    const scroll = e.scrollTop;
    if (scroll === 0) {
      setDialogIndex(0);
      setItemPos({ x: view_width / 2, y: 0 });
      setTimeout(() => setIsPlaying(true), 2000);
    } else if (scroll > view_width - 20 && scroll < view_width + 20) {
      setDialogIndex(1);
      setItemPos({ x: view_width * 0.8, y: 0 });
      setTimeout(() => setIsPlaying(true), 2000);
    } else if (scroll === 2 * view_width) {
      setDialogIndex(2);
      setItemPos({ x: view_width / 2, y: 0 });
      setTimeout(() => setIsPlaying(true), 2000);
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
        setIsPlaying(false);
        setDialogSubIndex(0);
      }
    } else {
      setDialogSubIndex(0);
    }
  };

  return (
    <div className="about" onClick={clickHandler}>
      <div
        className="container"
        onScroll={() => {
          scrollHandler(".container");
        }}
      >
        <div className="wrapper">
          <div className="slide1_bio">
            <div className="bio_container">
              <img className="bio_photo" src={photo} alt="" />
              <div className="bio_text">
                <h1 className="bio_name">YI-LU WU</h1>
                <div className="bio_content">
                  <p>{bio}</p>
                </div>
                <div className="resume">
                  Check out my{" "}
                  <a
                    className="resume_btn"
                    href="Lulu_Wu_resume_2023.pdf"
                    download="Yi-Lu_Wu_Resume_2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Experience />
          <Favorite />
        </div>
      </div>
      {view_width > 768 ? (
        <Character
          page="about"
          isPlaying={isPlaying}
          isGaming={true}
          itemPos={itemPos}
          index={dialogIndex}
          subIndex={dialogSubIndex}
          setSubIndex={setDialogSubIndex}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default About;
