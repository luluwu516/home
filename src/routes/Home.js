import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Character from "../components/Character";

const text = ["Web Developer", "Software Engineer", "Computer Programmer"];
const textInfo = [
  "who creates and maintains websites.",
  "who engineers and maintains softwares.",
  "who writes and develops application programs.",
];

const dialogs = [
  "Hello! I am Yi-Lu Wu. You can call me Lulu.",
  "Click on me to know more ABOUT me.",
  "Follow the sign to see my PROJECTS.",
  "You can CONTACT me with that mailbox.",
  "Or open the treasure chest and have FUN!",
  "Welcome to my website!",
];

const Home = () => {
  // Small game
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGaming, setIsGaming] = useState(false);
  const [coins, setCoins] = useState([]);
  const [coinsPos, setCoinsPos] = useState({ x: window.innerWidth / 2, y: 0 });

  // Typewriter
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Character Dialogs
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogSubIndex, setDialogSubIndex] = useState(0);

  const clickHandler = (event) => {
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
    if (isGaming) {
      setCoinsPos({ x: window.innerWidth / 2 + 72, y: 0 });
      const newCoin = {
        id: uuidv4(),
        x: event.clientX,
        y: event.clientY - 70,
      };

      setCoins((prevCoins) => [...prevCoins, newCoin]);
      setCoinsPos({ x: newCoin.x, y: newCoin.y });
    }
  };

  useEffect(() => {
    const removeCoin = (coinId) => {
      setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== coinId));
    };

    const moveCoins = () => {
      setCoins((prevCoins) =>
        prevCoins.map((coin) => ({
          ...coin,
          y: coin.y + 36,
        }))
      );
    };

    const checkCoinPosition = (coin) => {
      const bodyHeight = window.innerHeight;
      const coinBottom = coin.y;
      const characterTop = bodyHeight - 70 - 192;

      if (coinBottom >= bodyHeight || coinBottom >= characterTop) {
        removeCoin(coin.id);
      }
    };

    const intervalId = setInterval(() => {
      moveCoins();
      coins.forEach(checkCoinPosition);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [coins]);

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
      <div className="big_heading">
        <h2>Hello! My name is</h2>
        <h1>Yi-Lu Wu</h1>
        <h2>
          I am a
          <b>{` ${text[index].substring(0, subIndex)}${blink ? "|" : " "}`} </b>
          <div>{`${textInfo[index]}`}</div>
        </h2>
      </div>
      <div
        className="play_btn"
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
      >
        <i className={isPlaying ? "fas fa-stop" : "fas fa-play"}></i>
        <div className="play_btn_text">{isPlaying ? "STOP" : "PLAY"} </div>
      </div>
      <div className="bottom_container">
        <Link to="/contact">
          <div className="bottom_mailbox">
            <div className="bottom_mailbox_mail"></div>
          </div>
        </Link>
        <div
          className="bottom_treasure"
          onClick={() => {
            setIsGaming(!isGaming);
          }}
          style={
            isGaming
              ? {
                  transform: "translate(-100%, -10%)",
                  animation: "box_wave 0.4s infinite",
                }
              : {}
          }
        >
          <div
            className="bottom_treasure_light"
            style={isGaming ? { boxShadow: "0 0 40px 28px #ffd700" } : {}}
          ></div>
          <div
            className="bottom_treasure_treasureBox"
            style={isGaming ? { backgroundPosition: "right" } : {}}
          ></div>
        </div>
        <Link to="/projects">
          <div className="bottom_sign"></div>
        </Link>
      </div>
      {coins.map((coin) => {
        return (
          <div
            className="treasure_coin"
            key={coin.id}
            id={`coin-${coin.id}`}
            style={{
              left: `${coin.x}px`,
              top: `${coin.y}px`,
              transition: "top 0.1s linear",
            }}
          />
        );
      })}
      <Character
        page="home"
        isPlaying={isPlaying}
        isGaming={isGaming}
        itemPos={coinsPos}
        index={dialogIndex}
        subIndex={dialogSubIndex}
        setSubIndex={setDialogSubIndex}
      />
    </div>
  );
};

export default Home;
