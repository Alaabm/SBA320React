// import React, {useState} from "react";
// import React from "react";
// import ReactDOM from "react-dom";
// import ListGroup from "./components/ListGroup";
// // import Alert from "./components/Alert";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import HeroSection from "./components/HeroSection";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

// import '../App.css'

function App() {

  return (
    <>
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Contact/>}/>
          <Route path="/" element={<Resources/>}/>
      </Routes>
    </div>
  

    </>
  )
}

export default App;
