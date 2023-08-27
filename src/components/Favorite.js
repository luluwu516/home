import React, { useState } from "react";

import photo from "../assets/images/favorite/photography.png";
import photo1 from "../assets/images/favorite/photo/photo1.jpeg";
import photo2 from "../assets/images/favorite/photo/photo2.jpg";
import photo3 from "../assets/images/favorite/photo/photo3.jpg";
import digitalArt from "../assets/images/favorite/digitalArt.png";
import digitalArt1 from "../assets/images/favorite/digitalArt/digitalArt1.png";
import digitalArt2 from "../assets/images/favorite/digitalArt/digitalArt2.jpg";
import digitalArt3 from "../assets/images/favorite/digitalArt/digitalArt3.png";
import coding from "../assets/images/favorite/coding.png";
import coding1 from "../assets/images/favorite/coding/coding1.png";
import coding2 from "../assets/images/favorite/coding/coding2.png";
import coding3 from "../assets/images/favorite/coding/coding3.png";
import volleyball from "../assets/images/favorite/volleyball.png";
import volleyball1 from "../assets/images/favorite/volleyball/volleyball1.png";
import volleyball2 from "../assets/images/favorite/volleyball/volleyball2.png";
import volleyball3 from "../assets/images/favorite/volleyball/volleyball3.png";

const my_favorite = [
  {
    name: "Coding",
    intro: [
      "Coding is a highly logical and problem-solving-oriented activity. I love the sense of achievement as I break down complex problems and implement the solution in my mind.",
      "To demonstrate my cheerful and optimistic personality, my portfolio was inspired by Mario Brothers and Pixel Art, designed to introduce myself like playing a game.",
      "I developed a GUI-based system for grouping experimental animals, streamlining a previously challenging task and significantly enhancing efficiency.",
      "This marks my inaugural game development endeavor. However, it's just the initial stride in a greater journey. I am currently crafting a comprehensive game design!",
    ],
    works_imgs: [coding, coding1, coding2, coding3],
  },
  {
    name: "Digital Art",
    intro: [
      "I find endless possibilities to explore in the field of Digital Art, in which I am free to immerse myself in hands-on learning and experiment with various techniques to bring my artistic visions to life through practical applications of newly acquired techniques.",
      "Presenting my first 3D creation. I learned to create with Blender through tutorials on YouTube. This is my first attempt to implement the techniques I learned in an original creation.",
      "I applied the channels selection, pen tool, and clone stamp tool techniques, which I garnered from online tutorials, in Photoshop to seamlessly merge two disparate animals — a Shiba Inu and a polar bear into the same picture. ",
      "Introducing my debut digital art creation. The dramatic cat, Bagu, inspired me to create Line Stickers. Armed with fundamental Photoshop skills, I transferred my hand-drawn sketch onto the digital canvas. I subsequently immersed myself in hands-on learning, acquiring new techniques through practical application.",
    ],
    works_imgs: [digitalArt, digitalArt1, digitalArt2, digitalArt3],
  },
  {
    name: "Photography",
    intro: [
      "Photos have the power to evoke emotions and communicate narratives. I appreciate the beauty and diversity of the world and enjoy capturing the wonderful moment.",
      "I captured a fleeting yet precious moment when my dog playfully sat down, prompting the curious gaze of a group of cows. The resulting photo has garnered widespread affection among my friends.",
      "While strolling through a park, I took a photo of a ladybug on a dandelion flower. The vivid array of colors within the image resonates deeply with me.",
      "I stumbled upon a serene vignette amidst the bustling urban landscape. While the shot may not be flawless, it exudes a certain warmth that resonates with my appreciation towards life in the city.",
    ],
    works_imgs: [photo, photo1, photo2, photo3],
  },
  {
    name: "Volleyball",
    intro: [
      "Volleyball is a team sport emphasizing cooperation, communication, and coordination. I love volleyball and the feeling of becoming better at the sport with my teammates.",
      "I served as the Vice President of the school team, consistently inspiring motivation within the group through showing perseverance and dedication during group practices.",
      "Volleyball encompasses strategic cognition and the astute identification of vulnerabilities within the opposing team's defensive formation.",
      "The camaraderie I consistently cherish arises from the collaborative pursuit of shared objectives, which reinforces the bonds among teammates.",
    ],
    works_imgs: [volleyball, volleyball1, volleyball2, volleyball3],
  },
];

const styleIndex = [
  { transform: "translateX(0)" },
  { transform: "translateX(-100%)" },
  { transform: "translateX(calc(-200%))" },
  { transform: "translateX(calc(-300%))" },
];

const Favorite = () => {
  const [favIndex, setFavIndex] = useState(0);
  const [number, setNumber] = useState(0);

  const workPrevious = () => {
    setNumber(
      (number - 1 + my_favorite[favIndex].works_imgs.length) %
        my_favorite[favIndex].works_imgs.length
    );
  };
  const workNext = () => {
    setNumber((number + 1) % my_favorite[favIndex].works_imgs.length);
  };

  return (
    <div className="slide3_favorite">
      <div className="fav_solar">
        <h1 className="fav_solar_name">
          I LOVE <i className="fas fa-heart"></i>{" "}
          <div className="fav_solar_name_slider">
            <span className="fav_solar_name_item">
              {my_favorite[favIndex].name}
            </span>
          </div>
        </h1>
        <div className="fav_solar_sys">
          <div className="fav_solar_myself">
            <div className="fav_solar_myself_img"></div>
          </div>
          <div className="solar_orbit solar_orbit4">
            <div
              className="solar_orbit_planet solar_orbit_planet4"
              onClick={() => {
                setFavIndex(3);
                setNumber(0);
              }}
            >
              <img
                src={my_favorite[3].works_imgs[0]}
                alt=""
                className="solar_orbit_planet_icon"
              />
            </div>
          </div>
          <div className="solar_orbit solar_orbit3">
            <div
              className="solar_orbit_planet solar_orbit_planet3"
              onClick={() => {
                setFavIndex(2);
                setNumber(0);
              }}
            >
              <img
                src={my_favorite[2].works_imgs[0]}
                alt=""
                className="solar_orbit_planet_icon"
              />
            </div>
          </div>
          <div className="solar_orbit solar_orbit2">
            <div
              className="solar_orbit_planet solar_orbit_planet2"
              onClick={() => {
                setFavIndex(1);
                setNumber(0);
              }}
            >
              <img
                src={my_favorite[1].works_imgs[0]}
                alt=""
                className="solar_orbit_planet_icon"
              />
            </div>
          </div>
          <div className="solar_orbit solar_orbit1">
            <div
              className="solar_orbit_planet solar_orbit_planet1"
              onClick={() => {
                setFavIndex(0);
                setNumber(0);
              }}
            >
              <img
                src={my_favorite[0].works_imgs[0]}
                alt=""
                className="solar_orbit_planet_icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fav_intro">
        <div className="fav_intro_works">
          <div className="fav_intro_works_frame">
            <div className="fav_intro_works_slider" style={styleIndex[number]}>
              {my_favorite[favIndex].works_imgs.map((img, i) => (
                <img
                  src={img}
                  alt="My works"
                  className="fav_intro_works_slider_item"
                  key={i + 1}
                />
              ))}
            </div>
          </div>
          <div className="fav_intro_works_nav">
            <ul className="fav_intro_works_nav_list">
              {my_favorite[favIndex].works_imgs.map((img, i) => (
                <li
                  className="fav_intro_works_nav_list_item"
                  key={i + 1}
                  onClick={() => setNumber(i)}
                  style={number === i ? { backgroundColor: "#777" } : {}}
                ></li>
              ))}
            </ul>
          </div>
          <div
            className="fav_intro_works_arrow fav_intro_works_arrow_left"
            onClick={workPrevious}
          >
            <i className="fas fa-arrow-left"></i>
          </div>
          <div
            className="fav_intro_works_arrow fav_intro_works_arrow_right"
            onClick={workNext}
          >
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        {/* Works End */}
        <div className="fav_intro_text">
          <div className="fav_intro_text_intro">
            <p>{my_favorite[favIndex].intro[number]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
