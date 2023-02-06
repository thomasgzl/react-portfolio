import { Routes, Route } from "react-router-dom"
import './App.css';

import Home from './pages/home/home';
import AboutPage from './pages/about/about';
import ProjectsPage from './pages/projects/projects';

import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
        <div className="navbar">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/projects" element={ <ProjectsPage/> } />
        </Routes>
    </div>
  );
}

export default App;
