import React from "react";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";
import Photo1 from "../Photos/photo1.JPG"
import Photo2 from "../Photos/photo2.JPG"
import Photo3 from "../Photos/photo3.JPG"
import Photo4 from "../Photos/photo4.JPG"
import Photo5 from "../Photos/photo5.JPG"
import Photo6 from "../Photos/photo6.JPG"
import Photo7 from "../Photos/photo7.JPG"
import Photo8 from "../Photos/photo8.JPG"
import Photo9 from "../Photos/photo9.JPG"
import Photo10 from "../Photos/photo10.JPG"



// uses the project page css for the code to create the borders and positioning

function Photos() {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="intro-content">
        <h2>Photos I've Taken</h2>
      <div className="project2">
      <img src={Photo8} alt="Main_Menu"
       class="menu"/> <img src={Photo10} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Photo3} alt="Main_Menu"
       class="menu"/> <img src={Photo9} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Photo7} alt="Main_Menu"
       class="menu"/><img src={Photo6} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Photo1} alt="Main_Menu"
       class="menu"/><img src={Photo2} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project2">
      <img src={Photo4} alt="Main_Menu"
       class="menu"/><img src={Photo5} alt="Main_Menu"
       class="menu"/>
       </div>
       </div>
      <Footer/>
      </div>
  );
}

export default Photos;
