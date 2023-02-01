import { Link } from "react-router-dom";

import logo from '../logo.svg';
import Btn from '../components/btn/btn.jsx';
import Avatar from '../components/avatar/avatar';

function Home() {
    return (
      <div>
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
        <Btn />
        <Avatar />
        <Link to="about">Click to view my about page</Link>
        <Link to="projects">Click to view my projects page</Link>
      </div>
    );
  }
  
  export default Home;