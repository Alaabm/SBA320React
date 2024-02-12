import { useState } from "react";
// import React from "react";
// import ReactDOM from "react-dom";
import "../App.css";
// import Alert from "./components/Alert";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import ListGroup from "../components/ListGroup";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Home = () => {

  //ALERT pop up and dismiss
  // const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
