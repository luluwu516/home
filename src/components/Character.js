import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Spritesheet from "react-responsive-spritesheet";
import { animated } from "@react-spring/web";

// Game spritesheets
import stand from "../assets/images/spritesheets/stand.png";
import goLeft from "../assets/images/spritesheets/goLeft.png";
import goRight from "../assets/images/spritesheets/goRight.png";

// Introduction spritesheets
import sayHi from "../assets/images/spritesheets/sayHi.png";
import meInfo from "../assets/images/spritesheets/meInfo.png";
import signInfo from "../assets/images/spritesheets/signInfo.png";
import mailboxInfo from "../assets/images/spritesheets/mailboxInfo.png";
import treasureInfo from "../assets/images/spritesheets/treasureInfo.png";

const spritesheet = {
  home: [sayHi, meInfo, signInfo, mailboxInfo, treasureInfo, sayHi],
  about: [sayHi, sayHi, sayHi],
  projects: [sayHi, signInfo, sayHi, sayHi],
};

const dialogs = {
  home: [
    "Hello! I am Yi-Lu Wu. You can call me Lulu.",
    "Click on me to know more ABOUT me.",
    "Follow the sign to see my PROJECTS.",
    "You can CONTACT me with that mailbox.",
    "Or open the treasure chest and have FUN!",
    "Welcome to my website!",
  ],
  about: [
    "Hello! That is me! I have long hair now. Nice to meet you.",
    "Here are my work and education experiences.",
    "Welcome to my Hobby Solar System. They are all my favorites.",
  ],
  projects: [
    "Here is my App Ranch.",
    "My paw friends will take you to my works.",
    "Click on the center card to see my projects.",
    "I hope you enjoy them.",
  ],
};

const Character = ({
  page,
  isPlaying,
  isGaming,
  itemPos,
  index,
  subIndex,
  setSubIndex,
}) => {
  const [action, setAction] = useState(stand);
  const handleCharacterMovement = useCallback(() => {
    const characterElement = document.getElementById("char");
    const characterRect = characterElement.getBoundingClientRect();

    if (isGaming) {
      if (itemPos.x > characterRect.x + 72) {
        setAction(goRight);
      } else if (itemPos.x < characterRect.x + 72) {
        setAction(goLeft);
      }

      if (itemPos.x === characterRect.x + 72) {
        setAction(stand);
      }
    } else {
      setAction(stand);
    }
  }, [isGaming, itemPos]);

  const handleDialogAnimation = useCallback(() => {
    if (isPlaying) {
      setAction(spritesheet[page][index]);
      const timeout = setTimeout(() => {
        if (
          subIndex === dialogs[page][index].length &&
          index === dialogs[page].length - 1
        ) {
          return;
        }
        if (subIndex > dialogs[page][index].length - 1) {
          setSubIndex(dialogs[page][index].length);
          return;
        }

        setSubIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setAction(stand);
      return;
    }
  }, [page, isPlaying, index, subIndex, setSubIndex]);

  useEffect(() => {
    handleCharacterMovement();
  }, [handleCharacterMovement]);

  useEffect(() => {
    handleDialogAnimation();
  }, [handleDialogAnimation]);

  return (
    <animated.div
      className="char_container"
      id="char"
      style={
        isGaming
          ? { x: itemPos.x, transform: "translateX(-50%)" }
          : { left: "50%", transform: "translateX(-50%)" }
      }
    >
      <Link to="/about" data-content="ABOUT">
        <Spritesheet
          className="character"
          image={action}
          widthFrame={144}
          heightFrame={192}
          steps={4}
          fps={2}
          loop={true}
        />
        <div
          className="dialog"
          style={isPlaying ? { display: "inline-block" } : { display: "none" }}
        >{`${dialogs[page][index].substring(0, subIndex)}`}</div>
      </Link>
    </animated.div>
  );
};

export default Character;
