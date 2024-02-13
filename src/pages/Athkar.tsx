import React from "react";
// import "../styles/Athkar.css";


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Athkar from "../components/Athkar";

const Athkar = () => {
  return (
    <>
      <div>
        <NavBar />
        <Athkar/>
        <Footer />
      </div>
    </>
  );
};

export default Athkar;
