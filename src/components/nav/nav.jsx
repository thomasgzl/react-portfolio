import { Link } from "react-router-dom";
import './nav.scss'

function Nav() {
    return (
      <div className="nav">
        <Link className="link" to="/">HOME</Link>
        <Link className="link" to="about">about</Link>
        <Link className="link" to="projects">projects</Link>
      </div>
    );
  }
  
  export default Nav;