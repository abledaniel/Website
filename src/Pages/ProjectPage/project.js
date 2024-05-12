import React from "react";
import Footer from "../../Components/Footer/footer";
import Body from "../../Components/Body";
import Navbar from "../../Components/NavBar/navbar";
import Menu from "./main_menu.png"
import Engaged from "./engaged.png"
import Happy from "./happy.png"
import Research from "./research.jpg"


import "./project.css"

function Project() {


  return (
    <div className="project-page">
      <Navbar/>
      <div className="project">
      <img src={Menu} alt="Main_Menu"
       class="menu"/>
       </div>
       <h2 class="erased">ERASED LOVE</h2>
       <p class="summary">Erased Love is a RenPy dating simulator with a twist on how you’re entire existence. You wake up alone in a world where you find a girl.
        She’s equally as confused and now both worried start looking around. You and her try to survive while also getting to know each other. 
        She also seems to be a person that you would know but have no memory about. 
        While the entire time she focuses on you and is eerily calm about the situation. 
        Throughout the game you decide which pathways you go to which lead to different dialogue or endings. 
        By the end of the game you either life happily or you find her secret that she is a God who created this world to find the perfect boyfriend. 
</p>
      <div className="project2">
      <img src={Engaged} alt="Main_Menu"
       class="menu"/> <img src={Happy} alt="Main_Menu"
       class="menu"/>
       </div>
       <div className="project">
      <img src={Research} alt="Research"
       class="menu2"/>
       </div>
       <h2 class="erased">LSAMP RESEARCH</h2>
       <p type="sum" class="last-summary">I’m working under Dr. Anand Panangadan during the summer at CSUF and now in LSAMP. The research involved using machine
learning and natural language processing to detect food-related text on social media platforms to understand the habits of individuals.
The research evaluates and upgrades a system based on its performance on a predetermined data set compared to labeled accurate
results. This research aims to create a system that will extract the necessary information from a social media site and respond with
correct, tailored information on reducing food waste and food safety based on what the user posts.</p>
      <Footer/>
      </div>
  );
}

export default Project;
