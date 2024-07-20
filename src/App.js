import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

// eslint-disable-next-line
import style from "./styles/style.css";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="App" id={mode}>
      <Router>
        <Background />
        <Header mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
