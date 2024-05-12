import React from "react";
import "./homepage.css";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";
import Body from "../../Components/Body";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="intro-content">
      <h1 class="name">I'm Abel</h1>
      <h3 className="emoji">😊</h3>
      <h3 class="intro">A Computer Science student at CSUF</h3>
      <h3 class="intro">A chronic Youtube Enjoyer</h3>
      <h3 class="intro">People always ask me hows life nobody asks me why's life <br></br>- Tim Apple</h3>
      </div>
      <Footer/>
      </div>
  );
}

export default HomePage;
