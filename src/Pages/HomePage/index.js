import React from "react";
import "./homepage.css";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar/>
      {/* uses div to divide up the positions and classes for formatting */}
      <div className="intro-content">
      <h1 class="name">I'm Abel</h1>
      <h3 className="emoji">😊</h3>
      <h3 class="intro">A Undergraduate Computer Science student at CSUF</h3>
      <h3 class="intro">A Front-End Passionate Learner</h3>
      <h3 class="intro">Always Having Fun Learning About Computer Science</h3>
      </div>
      <Footer/>
      </div>
  );
}

export default HomePage;
