import React, { useEffect, useState } from "react";
import Character from "../components/Character";

import dog1 from "../assets/images/projects/dog1.png";
import dog2 from "../assets/images/projects/dog2.png";
import dog3 from "../assets/images/projects/dog3.png";

import portfolio from "../assets/images/projects/portfolio.png";
import portfolio_open from "../assets/images/projects/portfolio_open.png";
import portfolio1 from "../assets/images/projects/portfolio1.png";
import portfolio2 from "../assets/images/projects/portfolio2.png";
import grouper from "../assets/images/projects/grouper.png";
import grouper_open from "../assets/images/projects/grouper_open.png";
import grouper1 from "../assets/images/projects/grouper1.png";
import grouper2 from "../assets/images/projects/grouper2.png";
import zoolleyball from "../assets/images/projects/zoolleyball.png";
import zoolleyball_open from "../assets/images/projects/zoolleyball_open.png";
import zoolleyball1 from "../assets/images/projects/zoolleyball1.gif";
import zoolleyball2 from "../assets/images/projects/zoolleyball2.png";
import google from "../assets/images/projects/google.png";
import google_open from "../assets/images/projects/google_open.png";
import google1 from "../assets/images/projects/google1.png";
import google2 from "../assets/images/projects/google2.png";
import streamlit from "../assets/images/projects/streamlit.png";
import streamlit_open from "../assets/images/projects/streamlit_open.png";
import streamlit1 from "../assets/images/projects/streamlit1.png";
import streamlit2 from "../assets/images/projects/streamlit2.png";

const data = [
  {
    id: 1,
    name: "AI Copywriter",
    img: streamlit,
    open_img: streamlit_open,
    alt: "AI Copywriter",
    github: "https://github.com/luluwu516/ai_copywriter",
    description: [
      "Powered by OpenAI's advanced GPT-3.5 model, this program empowers users to craft captivating copy for various social media platforms effortlessly. This Streamlit website eliminates the complexities of content origination with unrivaled convenience. Experience the new AI technology by simply clicking the button in the AI Copywriter program through the Streamlit interface.",
    ],
    img1: streamlit1,
    problem: [
      "During the process of creating this program, I have learned and improved upon the following skills:",
      "1. Accurate Prompts: Well-designed prompts have the potential to significantly enhance the precision and logical flow of the generated text. It will be more accurate if we give it a role, define the goal, format the result, and set restrictions if needed.",
      "2. Imported library: OpenAI and Streamlit are third-party libraries, which means they are not built into the Python programming language. To use these libraries, we need to follow their documentation and guidelines to utilize their features effectively. Both of these libraries are essential tools that simplify various aspects of software development.",
    ],
    img2: streamlit2,
    skills: ["Python", "Streamlit", "OpenAI"],
  },
  {
    id: 2,
    name: "Zoolleyball",
    img: zoolleyball,
    open_img: zoolleyball_open,
    alt: "The Volleyball Game",
    github: "https://github.com/luluwu516/volleyball_game",
    description: [
      "Utilizing Pygame, I have developed a volleyball minigame incorporating basic concepts introduced in Pygame's tutorial along with insights from official documentation. The game challenges players to try catching as many balls as they can, putting their reflexes and agility to the test.",
      "This project stands as one of my first independently developed game and a stepping stone. I am in the process of designing a comprehensive gaming experience reminiscent of classic titles, including diverse characters, stages, modes, and even two-player features. Stayed tuned!",
    ],
    img1: zoolleyball1,
    problem: [
      "From building this game, I have learned to practice the following skills: ",
      "1. Mathematical Simulation: I utilized fundamental mathematical formulas to simulate the physics within the game, creating an environment where items move naturally, including the effect of gravity.",
      "2. Data Structure: During the development of the game, I learned more about data structures through online platforms like YouTube. Then, I strategically incorporated numerous features, such as Stack and Array, utilizing data structures, which enabled me to enhance the performance of the program significantly. This approach was imperative to prevent the program from becoming overly complex. ",
    ],
    img2: zoolleyball2,
    skills: ["Python", "pygame"],
  },
  {
    id: 3,
    name: "This website!",
    img: portfolio,
    open_img: portfolio_open,
    alt: "This Website!",
    github: "https://github.com/luluwu516/portfolio",
    description: [
      "Coding is fun and creative. I use React, because its features allows me to build individual components and combine them into pages, just like LEGO!",
      "To demostrate my cheerful and positive personality, my portfolio was inspired by Mario Brothers and Pixel Art designed to introduce myself like playing a game.",
      "If you have any questions about me, feel free to contact me. I hope you have a great time exploring my website!",
    ],
    img1: portfolio1,
    problem: [
      "From building this website, I have learned to practice the following skills: ",
      "1. Competitor Analysis: In the early stages of development, when I was exploring ways to make my design come true, I visited others' portfolios and utilized development tools to learn from them.",
      "2. Performance optimization: I have been learning front-end programming from many resources on the Internet. I am aware of my shortcomings when it comes to coding. Sometimes, I learn from ChatGPT by asking it to improve my code.",
      "3. Troubleshooting: This is by far my greatest challenge. During development, I faced plenty of problems but was able to overcome them with the help of Stack Overflow, GitHub, CSS-Tricks, ChatGPT, etc. Nowadays, as technology progresses, I have adapted to learn not only from teachers but also from artificial intelligence, which is also a very efficient learning resource. ",
    ],
    img2: portfolio2,
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "React"],
  },
  {
    id: 4,
    name: "Animal Grouper",
    img: grouper,
    open_img: grouper_open,
    alt: "Animal Grouper",
    github: "https://github.com/luluwu516/GUI_animal_grouper",
    description: [
      "This application employs a graphical user interface (GUI) designed for the purpose of grouping experimental animals. As a researcher, I initially faced challenges in piglet grouping due to weight disparities, prompting the need for time-consuming adjustments.",
      "With my foray into Data Science using Python, I developed a dedicated program that not only resolved this grouping issue for myself but also addressed the needs of fellow researchers. Subsequently, as my proficiency in Python improved, I developed a GUI for the application and distributed the executable file to my peers, helping them with their research and bringing a sense of fulfillment and success to myself.",
    ],
    img1: grouper1,
    problem: [
      "During the process of creating this program, I have learned and improved upon the following skills:",
      '1. Data type usage: I learned to utilize different datatypes for different purposes: Use "nparray" for performing numerical computations (scientific and technical operations);  use "list" for array-like operations.',
      "2. Geometry managers: Choosing and effectively using the right manager, like pack, grid, or place, can be a perplexing task for individuals without specific technical expertise. Each of these managers offers its own method for arranging widgets, which I familiarized through practical experience.",
    ],
    img2: grouper2,
    skills: ["Python"],
  },
  {
    id: 5,
    name: "Vision AI",
    img: google,
    open_img: google_open,
    alt: "Google Cloud (with Java)",
    github: "https://github.com/luluwu516/VisionAI_demo",
    description: [
      "This application leverages the capabilities of the Vision API to analyze and categorize images, subsequently generating classifications. These outcomes are then exported into an Excel format using Java.",
      "Google Cloud Vision AI stands as a robust machine learning solution within the Google Cloud Platform (GCP) portfolio. It empowers developers to seamlessly integrate advanced visual functionalities into their applications.",
      "My personal experience involves deploying this API to systematically categorize an extensive collection of photos stored within my legacy drive. The efficiency and accuracy achieved through this application are truly noteworthy, akin to the convenience we experience with modern smartphones.",
    ],
    img1: google1,
    problem: [
      "During the process of creating this program, I have learned to practice the following skills: ",
      "1. API Versions: I became more proficient in Java through an online course established in 2017. However, certain techniques taught were outdated. Upon thorough review of Google's documentation, I successfully updated and adapted these techniques to achieve desired functionality.",
      '2. Debuging: I encountered an error labeled "Bad image data," which I effectively resolved through the debugging process —— printing out the variable. This issue originated from a concealed ".DS_store" file. To address this, I developed a dedicated function that both excludes the ".DS_store" file and rectifies the error.',
    ],
    img2: google2,
    skills: ["Java", "Google Cloud"],
  },
];

const dialogs = [
  "Here is my App Ranch.",
  "My paw friends will take you to my works.",
  "Click on the center card to see my projects.",
  "I hope you enjoy them.",
];
const cardPos = [
  {
    transform: "translate(-140%, -70%) scale(0.8)",
    zIndex: "1",
    filter: "blur(8px)",
  },
  {
    transform: "translate(-100%, -70%) scale(0.9)",
    zIndex: "2",
    filter: "blur(4px)",
  },
  { transform: "translate(-50%, -70%) scale(1)", zIndex: "3" },
  {
    transform: "translate(0%, -70%) scale(0.9)",
    zIndex: "2",
    filter: "blur(4px)",
  },
  {
    transform: "translate(40%, -70%) scale(0.8)",
    zIndex: "1",
    filter: "blur(8px)",
  },
];

const Projects = () => {
  const view_width = window.innerWidth;
  // Character Dialogs
  const [isPlaying, setIsPlaying] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogSubIndex, setDialogSubIndex] = useState(0);

  // Slide Index
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  const [itemPos, setItemPos] = useState({ x: window.innerWidth / 2, y: 0 });

  const handleCardClick = (index) => {
    if ((position + index) % data.length === Math.floor(data.length / 2)) {
      if (!open) {
        setOpen(true);
      }
    } else if ((position + index) % data.length > Math.floor(data.length / 2)) {
      setPosition((position - 1 + data.length) % data.length);
    } else {
      setPosition((position + 1) % data.length);
    }
  };

  useEffect(() => {
    setTimeout(() => setItemPos({ x: 144, y: 0 }), 1000);
    setTimeout(() => setIsPlaying(true), 3000);
  }, []);

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

  const scrollHandler = (element) => {
    const e = document.querySelector(element);
    const scroll = e.scrollTop;

    const description_titles = document.querySelectorAll(
      ".project_description_title"
    );
    description_titles.forEach((info_title) => {
      if (scroll > 100) {
        info_title.classList.add("show");
      } else if (scroll < 100) {
        info_title.classList.remove("show");
      }
    });
    const description_texts = document.querySelectorAll(".description_text");
    description_texts.forEach((info_text) => {
      if (scroll > 600) {
        info_text.classList.add("show");
      } else if (scroll < 100) {
        info_text.classList.remove("show");
      }
    });
    const sliceBottom = document.querySelectorAll(".sliceBottom");
    const solving = document.querySelectorAll(".solving");
    sliceBottom.forEach((info_text) => {
      if (scroll > 1100) {
        info_text.classList.add("slice");
      } else {
        info_text.classList.remove("slice");
      }
    });
    solving.forEach((info_text) => {
      if (scroll > 1150) {
        info_text.classList.add("zoom");
      } else {
        info_text.classList.remove("zoom");
      }
    });
    const problem_text = document.querySelectorAll(".problem_text");
    problem_text.forEach((info_text) => {
      if (scroll > 1400) {
        info_text.classList.add("show");
      } else if (scroll < 100) {
        info_text.classList.remove("show");
      }
    });
  };

  return (
    <div className="projects" onClick={clickHandler}>
      <div className="projects_cards">
        <div
          className="card_open_closeBtn"
          style={open ? { display: "inline-block" } : { display: "None" }}
          onClick={() => setOpen(false)}
        >
          <i className="fas fa-times"></i> CLOSE
        </div>
        {data.map((card) => (
          <div
            className={
              (position + card.id - 1) % data.length ===
                Math.floor(data.length / 2) && open
                ? "card card_open"
                : "card"
            }
            id={`card${card.id}`}
            key={card.id}
            onScroll={() => {
              scrollHandler(`#card${card.id}`);
            }}
            style={
              (position + card.id - 1) % data.length ===
                Math.floor(data.length / 2) && open
                ? {}
                : cardPos[(position + card.id - 1) % data.length]
            }
            onClick={() => handleCardClick(card.id - 1)}
          >
            <img
              src={open ? card.open_img : card.img}
              alt={card.alt}
              className="card_cover"
            />
            <div className="card_title">{card.name}</div>
            <div className="card_title_marquee">
              <div className="card_title_marquee_inner" aria-hidden="true">
                <span>{card.name}</span>
                <span>{card.name}</span>
                <span>{card.name}</span>
                <span>{card.name}</span>
                <span>{card.name}</span>
              </div>
            </div>

            <div
              className="card_open_info"
              style={open ? { height: "auto" } : { display: "None" }}
            >
              <div className="project_skills">
                {card.skills.map((item, index) => (
                  <div className="project_skill" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="project_description_title">INTRODUCTION</div>
              <img src={card.img1} alt="" className="project_img1" />
              <div className="description_text">
                {card.description.map((item, index) => (
                  <p key={index + 1}>{item}</p>
                ))}
              </div>
              <div className="project_problem_title">
                <span className="sliceTop">PROBLEM</span>
                <span className="sliceBottom">PROBLEM</span>{" "}
                <p className="solving">SOLVING</p>
              </div>
              <img src={card.img2} alt="" className="project_img2" />
              <div className="problem_text">
                {card.problem.map((item, index) => (
                  <p key={index + 1}>{item}</p>
                ))}
              </div>
              <div className="project_link">
                <h2>Ckeck out my code on</h2>{" "}
                <a href={card.github} target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="projects_works">
          <a href="https://luluwu.simple.ink" target="_blank" rel="noreferrer">
            <div className="project_work">
              <i className="far fa-sticky-note"></i> Notion
            </div>
            <img src={dog1} alt="" />
          </a>
          <a href="https://codepen.io/luluwu" target="_blank" rel="noreferrer">
            <div className="project_work">
              <i className="fab fa-codepen"></i> CodePen
            </div>
            <img src={dog2} alt="" />
          </a>
          <a
            href="https://store.line.me/stickershop/product/1350843/en?ref=Desktop"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project_work">
              <i className="fab fa-line"></i> Sticker
            </div>
            <img src={dog3} alt="" />
          </a>
        </div>
      </div>
      {view_width > 600 ? (
        <Character
          page="projects"
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

export default Projects;
