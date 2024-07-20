import React, { useState, useEffect, useCallback } from "react";
import Spritesheet from "react-responsive-spritesheet";

// spritesheets
import stand from "../assets/images/spritesheets/stand.png";
import sayHi from "../assets/images/spritesheets/sayHi.png";
import signInfo from "../assets/images/spritesheets/signInfo.png";
import mailboxInfo from "../assets/images/spritesheets/mailboxInfo.png";
import treasureInfo from "../assets/images/spritesheets/treasureInfo.png";

const spritesheet = {
  home: [sayHi, treasureInfo, signInfo, mailboxInfo, sayHi],
  about: [sayHi, sayHi, sayHi],
  projects: [sayHi, signInfo, sayHi, sayHi],
};

const dialogs = {
  home: [
    "Hello! I am Yi-Lu Wu. You can call me Lulu.",
    "Click on the chest to know more ABOUT me.",
    "Follow the sign to see my PROJECTS.",
    "You can CONTACT me with that mailbox.",
    "Welcome to my website!",
  ],
  projects: [
    "Here is my App Ranch.",
    "My paw friends will take you to my works.",
    "Click on the center card to see my projects.",
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
    <div className="char_container">
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
    </div>
  );
};

export default Character;
