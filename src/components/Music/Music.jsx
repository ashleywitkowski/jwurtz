import "./Music.css";
import React from "react";

class Music extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="albumCover">
                <img
                  src={require("../../resources/Pictures/eventides.PNG")}
                  alt="Album cover"
                  width="500px"
                  height="415px"
                  position="absolute"
                  style={{
                    marginLeft: 80,
                    marginTop: 70,
                  }}
                ></img>
              </div>
              <div
                className="record"
                style={{
                  position: "absolute",
                  margin: "140px 0 0 270px",
                  transition: "ease-in, 2s",
                  width: "262px",
                  height: "262px",
                  borderRadius: "50%",
                  backgroundSize: "50% 100%, 100% 50%, 100% 100%",
                  zIndex: 1,
                }}
              ></div>
            </div>
            <div className="col-lg-4">
              <div id="divider"></div>
            </div>
            <div className="col-lg-4">
              <div id="player">
                <iframe
                  src="https://open.spotify.com/embed/album/3IYqFvTyLjAoWycby3rGLw"
                  width="510"
                  height="415"
                  title="spotify player"
                  // style={{
                  //   marginLeft: 80,
                  //   marginRight: 80,
                  //   marginTop: 70,
                  // }}
                  frameBorder="1"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "70px",
            }}
          >
            {/* <div id="musicSocials"> */}
            <a
              href="https://wurtz.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-bandcamp fa-1x"></i>
            </a>
            <a
              href="https://soundcloud.com/justin-wurtz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-soundcloud fa-1x"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/4fyGp5bRFqFh9DAKYg2fb4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify fa-1x fa-fw"></i>
            </a>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Music;
