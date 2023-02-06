import './home.scss';

import Nav from '../../components/nav/nav';

import backgroundVideo from '../../assets/background-trees.mp4'

function Home() {
    return (
      <div className="home">
        <div className="overlay" />
        <video src={backgroundVideo} autoPlay loop muted id="background-video" />
        {/* <div className="navbar">
          <Nav />
        </div> */}
        <div className="content">
          <h1>GONZALEZ THOMAS.</h1>
        </div>
      </div>
    );
  }
  
  export default Home;
