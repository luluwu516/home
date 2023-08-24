import React from "react";

const Contact = () => {
  const contactHandler = () => {
    let name = document.getElementById("name").value;
    let infoElem = document.getElementById("info");
    let info = infoElem.value
      ? infoElem.value.replace(/ /g, "%20")
      : "Nice%20to%20meet%20you.";

    window.open(
      `mailto:sky110423@gmail.com?subject=You%20got%20an%20mail&body=Hello%20Lulu,%20\nMy%20name%20is%20${name}.%20${info}`
    );
  };

  return (
    <div className="contact">
      <div className="mailbox"></div>
      <div className="main">
        <div className="imgBox">
          <div className="mailCover"></div>
        </div>
        <form>
          <h4>Hello Lulu,</h4>
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input id="name" type="text" name="Name" required />
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input id="email" type="email" name="E-mail" required />
          <label htmlFor="info">Content</label>
          <textarea id="info" name="info" rows="4"></textarea>
          <button className="btn" onClick={contactHandler}>
            SEND
          </button>
        </form>
        <div className="information">
          <h2>CONTACT</h2>
          <div id="icons" className="icons">
            <a
              title="website"
              href="https://github.com/luluwu516"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              title="linkedin"
              href="https://www.linkedin.com/in/lulu-wu-14b025196/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              title="codepen"
              href="https://codepen.io/luluwu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
            <a
              title="email"
              href="mailto:sky110423@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bubble bubble1">I'm not peeking. Feel free to write.</div>
      <div className="character"></div>
      <div className="bubble bubble2">Okay! Okay! No peeking!</div>
    </div>
  );
};

export default Contact;
