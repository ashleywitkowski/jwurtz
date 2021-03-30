import "./About.css";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGear: "none",
      audioGear: "none",
    };
  }
  updateVideoGear = () => {
    this.setState({
      videoGear: this.state.videoGear === "block" ? "none" : "block",
    });
  };
  updateAudioGear = () => {
    this.setState({
      audioGear: this.state.audioGear === "block" ? "none" : "block",
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="jwIcon">
              <h1 id="jwHeader">Justin Wurtz</h1>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <img
              id="jwImg"
              src={require("../../resources/Pictures/jwPhoto.jpg")}
              width="73%"
              height="60%"
              alt="Justin"
            ></img>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <p id="pgraph">
              Graduate of New England Institute of Technology with a Bachelor’s
              Degree in Digital Media Production. Experience working as a
              director, editor, camera operator, and replay operator for
              multiple types of video projects, including live broadcast events,
              short films, news pieces, documentaries, and corporate videos.
              Additional experience in music production including recording,
              mixing, and mastering in live and studio settings.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <h1 id="audio">Audio</h1>
          </div>
          <div className="row">
            <p id="audioP">
              My highlighted works include producing, mixing, and mastering
              various genres of music for local artists. Experience includes
              knowledge of multiple DAWs, analog boards, digital boards,
              outboard gear, patch bays, and recording studio/live concert
              experiences.
            </p>
          </div>
          <div className="row">
            {/* <div className="col-sm-2"> */}
            <h1 id="audioGear" className="m-0">
              Gear
            </h1>
            {/* </div> */}
            <div className="p-0" style={{ alignSelf: "center" }}>
              <span
                onClick={this.updateAudioGear}
                style={{
                  color: "white",
                  transform: `rotate(${
                    this.state.audioGear === "block" ? "90" : "0"
                  }deg)`,
                  float: "left",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <i className={`fa fa-chevron-right`} />
              </span>
            </div>
          </div>

          <div
            className="audGear"
            style={{
              display: this.state.audioGear,
              fontFamily: "BroadwayFlat",
              color: "white",
              fontSize: "105%",
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "110%",
                  }}
                >
                  Microphones
                </u>
                <ul style={{ paddingLeft: "1%" }}>
                  <li>SM57 x2</li>
                  <li>Shure Beta 52a</li>
                  <li>Rhode M5 Matched Pair</li>
                  <li>Sennhesier e604 x3</li>
                  <li>AT 3035 Matched Pair</li>
                  <li>AKG D112</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "110%",
                  }}
                >
                  Hardware
                </u>
                <ul
                  style={{
                    paddingLeft: "1%",
                  }}
                >
                  <li>Focusrite Scarlett 18i8</li>
                  <li>Macbook Pro 2015</li>
                  <li>Event Tuned Referenced Matched Speakers</li>
                  <li>Beyer Dynamic DT770 Headphones</li>
                  <li>Akai MPK 1 Mini MIDI Keyboard</li>
                  <li>Maschine Mikro ​</li>
                  <li>Yamaha p-120 Keyboard</li>
                  <li>Ludwig Element Lacquer Drum kit</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <u
                  style={{
                    fontSize: "110%",
                  }}
                >
                  Software
                </u>
                <ul style={{ paddingLeft: "1%" }}>
                  <li>Pro Tools</li>
                  <li>Logic Pro X</li>
                  <li>Native Instruments Komplete 11</li>
                  <li>Waves Gold Bundle</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <h1 id="video">Video</h1>
          </div>
          <div className="row">
            <p id="videoP">
              My highlighted works include working as a director, replay
              operator, editor, and camera operator for multiple types of video
              projects. These include live broadcast events, short films,
              documentaries, newscasts and freelance videos. Experience working
              with the New York Mets, ABC 6 News, the Pawtucket Red Sox,
              Providence College Athletics, and Pack Network, for various
              televised broadcast events (ESPN3, FOX Sports 1, NESN, etc)
            </p>
          </div>

          <div className="row">
            {/* <div className="col-sm-2"> */}
            <h1 id="videoGear" className="m-0">
              Gear
            </h1>
            {/* </div> */}
            <div className="p-0" style={{ alignSelf: "center" }}>
              <span
                onClick={this.updateVideoGear}
                style={{
                  color: "white",
                  transform: `rotate(${
                    this.state.videoGear === "block" ? "90" : "0"
                  }deg)`,
                  float: "left",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <i className={`fa fa-chevron-right`} />
              </span>
            </div>
          </div>
          <div
            className="vidGear"
            style={{
              display: this.state.videoGear,
              fontFamily: "BroadwayFlat",
              color: "white",
              fontSize: "105%",
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <u
                  style={{
                    fontSize: "110%",
                    paddingLeft: "1%",
                  }}
                >
                  Camera
                </u>
                <ul style={{ paddingLeft: "1%" }}>
                  <li>Lumix G85</li>
                  <li>Canon EOS 70D</li>
                  <li>Yelangu Gimbal</li>
                  <li>Rode VideoMic GO Light</li>
                  <li>Tripod x2</li>
                  <li>DJI Mavic Air</li>
                </ul>
              </div>

              <div className="col-lg-8">
                <u
                  style={{
                    fontSize: "110%",
                  }}
                >
                  Lenses
                </u>
                <ul style={{ paddingLeft: "1%" }}>
                  <li>Canon EFS 55-250mm</li>
                  <li>Canon EFS 18-55mm</li>
                  <li>Canon EF 75-300</li>
                  <li>Canon Macro Lens EF 50mm</li>
                  <li>Canon EF 50mm</li>
                  <li>Canon EF 28-105mm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
