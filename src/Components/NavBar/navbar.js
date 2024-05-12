import "./navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {
  return <nav className="nav">
{/* creates the links for each pages */}
    <Link to="/Website" className="logo">Abel Daniel</Link>
    <ul>
      <li>
        <Link to="/about">ABOUT ME</Link>
        </li>
        <li>
        <Link to="/project">PROJECTS</Link>
      </li>
      <li>
        <Link to="/photos">PHOTOS</Link>
      </li>
    </ul>
  </nav>
}