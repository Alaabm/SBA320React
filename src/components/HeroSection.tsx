import React from "react";
import Button from "./Button";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        {/* <video src="/video/video-2.mp4" autoPlay loop muted></video> */}
        <h1>HIDAYA HALAQAH</h1>
        <p>Join us every Friday at 5 PM</p>
        <div className="hero-btns">
          <Button type="" color="primary" onClick={() => console.log("Clicked")}>
            ABOUT US
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
