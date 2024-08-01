import React, { useState, useEffect, useCallback } from "react";
import Spritesheet from "react-responsive-spritesheet";

// spritesheets
import stand from "../assets/images/spritesheets/stand.png";
import sayHi from "../assets/images/spritesheets/sayHi.png";
import signInfo from "../assets/images/spritesheets/signInfo.png";
import mailboxInfo from "../assets/images/spritesheets/mailboxInfo.png";
import laptopInfo from "../assets/images/spritesheets/laptop.png";

const spritesheet = {
  home: [sayHi, laptopInfo, signInfo, mailboxInfo, sayHi],
  about: [sayHi, signInfo],
  projects: [sayHi, sayHi, signInfo, sayHi],
};

const dialogs = {
  home: [
    "Hello! I am Yi-Lu Wu. You can call me Lulu.",
    "Check on the laptop to know more ABOUT me.",
    "Click the sign to see my PROJECTS.",
    "You can CONTACT me with that mailbox.",
    "Welcome to my website!",
  ],
  about: ["Nice to meet you.", "Let's take a look at my side projects!"],
  projects: [
    "Here is my App Ranch.",
    "Click on the center card to see my side projects.",
    "Open the chests to find my works.",
    "I hope you enjoy them.",
  ],
};

const Character = ({ page, isPlaying, index, subIndex, setSubIndex }) => {
  const [action, setAction] = useState(stand);

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
    handleDialogAnimation();
  }, [handleDialogAnimation]);

  return (
    <div className="char-container">
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
        className="char-dialog"
        style={isPlaying ? { display: "inline-block" } : { display: "none" }}
      >
        <div className="char-dialog-text">{`${dialogs[page][index].substring(
          0,
          subIndex
        )}`}</div>
        <div className="char-dialog-next">NEXT</div>
      </div>
    </div>
  );
};

export default Character;
