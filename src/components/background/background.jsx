import backgroundVideo from '../../assets/background-trees.mp4'

function Background() {
    return (
      <div>
        <video autoPlay loop muted id="background-video">
            <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </div>
    );
  }
  
  export default Background;