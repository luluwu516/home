import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "../components/Character";

const breakpoint_phone = 414;
const text_info = "who develops and maintains application programs.";

const text = ["Web Developer", "Game Developer", "Software Engineer"];

const dialogs = [
  "Hello! I am Yi-Lu Wu. You can call me Lulu.",
  "Check on the laptop to know more ABOUT me.",
  "Click the sign to see my PROJECTS.",
  "You can CONTACT me with that mailbox.",
  "Welcome to my website!",
];

const Home = () => {
  const view_width = window.innerWidth;
  // introducing
  const [isPlaying, setIsPlaying] = useState(false);

  // Typewriter
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Character Dialogs
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogSubIndex, setDialogSubIndex] = useState(0);

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

  useEffect(() => {
    if (
      subIndex === text[index].length + 1 &&
      index !== text.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === text[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="home" onClick={clickHandler}>
      <div className="top">
        <h2>Hello! My name is</h2>
        <h1>Yi-Lu Wu</h1>
        <h2>
          I am a
          <b>
            {` ${text[index].substring(0, subIndex)}${blink ? "|" : "  "}`}{" "}
          </b>
          <div>{`${text_info}`}</div>
        </h2>
      </div>
      <div
        className="middle"
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
        style={
          isPlaying
            ? {
                backgroundColor: "#f24",
              }
            : { backgroundColor: "#00b323" }
        }
        data-tooltip={
          isPlaying ? "Stop the Introduction" : "Play the Introduction"
        }
      >
        <i className={isPlaying ? "fas fa-stop" : "fas fa-play"}></i>
        <div className="middle_text">{isPlaying ? "STOP" : "PLAY"} </div>
      </div>
      {view_width < breakpoint_phone ? (
        <div className="bottom-phone">
          <Link to="/about" className="bottom-phone_button">
            Learn more About me!
          </Link>
        </div>
      ) : (
        <div className="bottom">
          <Link to="/contact" className="bottom_item">
            <div className="bottom_mailbox">
              <div className="bottom_mailbox_mail"></div>
            </div>
          </Link>
          <Link to="/about" className="bottom_item">
            <div className="bottom_desk">
              <div className="bottom_desk_light"></div>
              <div className="bottom_desk_img"></div>
            </div>
          </Link>
          <Link to="/projects" className="bottom_item">
            <div className="bottom_sign"></div>
          </Link>
        </div>
      )}
      <Character
        page="home"
        isPlaying={isPlaying}
        index={dialogIndex}
        subIndex={dialogSubIndex}
        setSubIndex={setDialogSubIndex}
      />
    </div>
  );
};

export default Home;
