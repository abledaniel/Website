// import logo from './logo.svg';
// import './App.css';
import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutPage/about";
import Project from "./Pages/ProjectPage/project";
import Contact from "./Pages/Contact/contact";
import Skills from "./Pages/Skills/skills"
import Photos from "./Pages/Photos/photos";
import Privacy from "./Pages/Privacy/privacy"
import { Route, Routes } from 'react-router-dom';

function App() {
// creats a Routing Path for a all pages so it reloads whats necessary
return (
  <>
    <div className="container">
      <Routes>
        <Route path = "/Website" element={<HomePage/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/project" element={<Project/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/skills" element={<Skills/>}/>
        <Route path = "/photos" element={<Photos/>}/>
        <Route path = "/privacy" element={<Privacy/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
