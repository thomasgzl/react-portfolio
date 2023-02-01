import { Routes, Route } from "react-router-dom"
import './App.css';


import Home from './home/home';
import AboutPage from './about/about';
import ProjectsPage from './projects/projects';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/projects" element={ <ProjectsPage/> } />
        </Routes>
    </div>
  );
}

export default App;
