import blender from "../assets/images/hobbies/blender.png";
import brandDesign from "../assets/images/hobbies/brandDesign.jpg";
import esp32 from "../assets/images/hobbies/esp32.jpg";
import gameDevelopment from "../assets/images/hobbies/gameDevelopment.png";
import photoshop from "../assets/images/hobbies/photoshop.jpg";
import pixelArt from "../assets/images/hobbies/pixelArt.jpg";
import sketch from "../assets/images/hobbies/sketch.jpg";
import sticker from "../assets/images/hobbies/stickers.png";
import volleyball from "../assets/images/hobbies/volleyball.png";
import photography from "../assets/images/hobbies/photography.jpg";

const hobbies = [
  { img: blender, alternate_text: "Blender", title: "3D Modelling" },
  { img: brandDesign, alternate_text: "Brand Design", title: "Package Design" },
  { img: esp32, alternate_text: "Light Sensor", title: "Microcontroller" },
  {
    img: gameDevelopment,
    alternate_text: "Zolleyball",
    title: "Game Development",
  },
  { img: photoshop, alternate_text: "Photoshop", title: "Photoshop" },
  { img: pixelArt, alternate_text: "Pixel Art", title: "Pixel Art" },
  { img: sketch, alternate_text: "Sketching", title: "Sketching" },
  { img: sticker, alternate_text: "Line Stickers", title: "Sticker Design" },
  { img: volleyball, alternate_text: "Volleyball", title: "Volleyball" },
  {
    img: photography,
    alternate_text: "Phone Photography",
    title: "Phone Photography",
  },
];

const Hobby = () => {
  return (
    <div className="hobbies-container">
      <div className="hobbies-container-inner">
        {hobbies.map((hobby, i) => (
          <div className="hobby-card" key={i}>
            <img
              src={hobby.img}
              alt={hobby.alternate_text}
              className="hobby-img"
            />
            <h3 className="hobby-title">{hobby.title}</h3>
          </div>
        ))}
        {hobbies.map((hobby, i) => (
          <div className="hobby-card" key={i}>
            <img
              src={hobby.img}
              alt={hobby.alternate_text}
              className="hobby-img"
            />
            <h3 className="hobby-title">{hobby.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
