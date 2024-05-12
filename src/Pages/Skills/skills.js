import React from "react";
import "./skills.css";
import Navbar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer";


// creates an unordered lists of items to showcase all skills and coursework
function HomePage() {
  return (
    <div className="skills-page">
      <Navbar/>
      <div className="skill">
      <h3 class="skills">Skills</h3>
      <ui className="lists">
        <li className="items">Python</li>
        <li className="items">C++</li>
        <li className="items">HTML</li>
        <li className="items">CSS</li>
      </ui>
      <ul className="lists">
        <li className="items">RenPy</li>
        <li className="items">Java</li>
        <li className="items">Javascript</li>
        <li className="items">React</li>
        <li className="items">Linux</li>
      </ul>
      </div>
      <div className="skill">
      <h3 class="skills">Coursework</h3>
      <ui className="lists">
        <li className="items">Software Engineering</li>
        <li className="items">Front-End Engineering</li>
        <li className="items">Systems and Databases</li>
        <li className="items">Data Structures</li>
        <li className="items">Object-Oriented Programming</li>
        <li className="items">Cybersecurity Principles</li>
      </ui>
      <ul className="lists">
        <li className="items">Algorithm Engineering</li>
        <li className="items">Linear Algebra</li>
        <li className="items">Calculus II</li>
      </ul>
      </div>
      <Footer/>
      </div>
  );
}

export default HomePage;
