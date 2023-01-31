import logo from './logo.svg';
import './App.css';
import Btn from './components/btn/btn.jsx';
import AboutPage from './about/about';
import Avatar from './components/avatar/avatar';
import ProjectsPage from './projects/projects';


function App() {
  return (
    <div className="App">
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
        <Btn />
        <AboutPage />
        <Avatar />
        <ProjectsPage />
      </header>
    </div>
  );
}

export default App;
