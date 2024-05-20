import React from "react";
import "./privacy.css";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";

function Privacy() {
  return (
    // uses the initial home page css to display similar features
    <div className="home-page">
      <Navbar/>
      <div className="intro-content">
      <h3 className="text">Privacy Policy</h3>
      <h3 class="intro2"><strong>We Keep This Data Private.</strong><br></br> By visiting this website, You are Cool Person<br></br>
<strong>Thanks For Looking at My Work. :)</strong><br></br>Have Fun Visiting This Website and Checking Around</h3>
<strong>Here's a Cat Playing a Piano</strong>
<div className="video-container">
<iframe
            src="https://www.youtube.com/embed/J---aiyznGQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
          </div>
      {/* <h3 class="intro2"><strong>We Own Your Data. Period.</strong><br></br>
By visiting this website, you grant us ownership of all data collected about your entire life :). <br></br> We handle it responsibly ;), but the control is ours.<br></br>
<strong>Want Out? Sorry :(</strong><br></br> This approach prioritizes brevity and directness but could be perceived as overly aggressive. We are doing are best to take in your feedback</h3> */}
      </div>
      <Footer/>
      </div>
  );
}

export default Privacy;
