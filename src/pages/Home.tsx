import { useState } from "react";
// import React from "react";
// import ReactDOM from "react-dom";
// import "../App.css";
// import Alert from "./components/Alert";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

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
