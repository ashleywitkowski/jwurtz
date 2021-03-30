import React from "react";
import "./Home.css";
import background from "../../resources/Video/Website-Background2.mp4";

const Home = (props) => {
  return (
    <React.Fragment>
      <div id="video-bg">
        <div className="overlay"></div>
        <video autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
      </div>
      <div className="socials">
        {/* <div className="container-fluid"> */}
        <a
          href="https://www.instagram.com/justinwurtz/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-5x fa-fw"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCEs67m3EYo7Pw_16IokFrtg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-5x fa-fw"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/justin-wurtz-272b45126/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-5x fa-fw"></i>
        </a>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};
export default Home;
