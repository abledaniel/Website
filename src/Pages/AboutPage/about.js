import React from "react";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";
import Body from "../../Components/Body";
import "./about.css"
import Animal from "./animalcrossing.png"



function About() {
  return (
    <div className="about-page">
      <Navbar/>
      {/* aboutdiv allows the page to be centered and responsive */}
      <div className = "aboutdiv">
      <h4 class="hi">Hi, I'm Abel</h4>
      <h4 class="about">I'm on the board for two clubs, one is ACM which is the leading computer science club on campus. 
      I also do marketing for it, which could be weekly announcements, Instagram posts, photography, or poster designs. 
      Another would be the Video Game Development Club, where I help with events, meetings, and whatever is necessary for the club. 
      I lead 7 Designers made of 2D Artists, UI Artists, Scriptwriters, and Programmers for the game Erased Love.
      I'm part of LSAMP, where I work doing research with Dr.PP, who is working with entity recognition using a set of keywords to train an algorithm to identify food-related words from Twitter. 
      I received an LSAMP NSM Award, went to SCCUR a research conference, and was ECS Student Project Innovation Expo Finalist.</h4>
      <img src={Animal} alt="AnimalCrossing"
       class="animalcross"/>
       <h4 class="crossing">Me in Animal Crossing</h4>
       </div>
      <Body/>
      <Footer/>
      </div>
  );
}

export default About;
