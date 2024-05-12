import React from "react";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";
import Dog4 from "../Photos/photo1.JPG"
import Dog from "../Photos/photo2.JPG"
import Dog2 from "../Photos/photo3.JPG"
import Dog5 from "../Photos/photo4.JPG"
import Dog3 from "../Photos/photo5.JPG"


// uses the project page css for the code to create the borders and positioning

function Photos() {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="intro-content">
        <h2>Photos I've Taken</h2>
      <div className="project2">
      <img src={Dog} alt="Main_Menu"
       class="menu"/> <img src={Dog2} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Dog3} alt="Main_Menu"
       class="menu"/> <img src={Dog5} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Dog4} alt="Main_Menu"
       class="menu"/>
       </div>
       </div>
      <Footer/>
      </div>
  );
}

export default Photos;
