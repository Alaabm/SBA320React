// import React, {useState} from "react";
// import React from "react";
// import ReactDOM from "react-dom";
// import ListGroup from "./components/ListGroup";
// // import Alert from "./components/Alert";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import HeroSection from "./components/HeroSection";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Reflect from "./pages/Reflect";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Athkar from "./pages/Athkar";
import Dhikr from "./pages/Dhikr";

// import '../App.css'

function App() {
  return (
    <>
      <div>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/reflect" element={<Reflect />} />
          <Route path="/resources" element={<Resources />} /> */}
          <Route path="/athkar" element={<Athkar />} />
          <Route path="/dhikr" element={<Dhikr />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
