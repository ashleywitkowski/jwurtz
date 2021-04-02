import "./Reel.css";
import React, { Component } from "react";
import axios from "axios";

class Reel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelId: "UCEs67m3EYo7Pw_16IokFrtg",
      videoIds: [], //"vidId1, vidId2"
      activeIndex: 0,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUEs67m3EYo7Pw_16IokFrtg&key=AIzaSyBFFixy86IHS_J-g1h6X72CoA8Qbi3cJOs&part=snippet&maxResults=5"
      )
      .then((res) => {
        let vidIds = [];

        for (let i = 0; i < res.data.items.length; i++) {
          vidIds.push(res.data.items[i].snippet.resourceId.videoId);
        }
        this.setState({
          videoIds: vidIds,
        });
      });
  }

  renderVidThumbnail = (vidIds) => {
    let vidThumbnails = [];
    var colSize = Math.round(12 / vidIds.length);
    for (let i = 0; i < vidIds.length; i++) {
      vidThumbnails.push(
        <img
          src={`https://i.ytimg.com/vi/${vidIds[i]}/hqdefault.jpg`}
          alt="video thumbnails"
          onClick={() => this.handleClick(i)}
          key={i}
          className={`col-${colSize}`}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return vidThumbnails;
  };

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  renderActiveVid = (vidIds, activeIndex) => {
    return (
      <iframe
        width="900"
        height="500"
        title="active"
        src={`https://www.youtube.com/embed/${vidIds[activeIndex]}`}
        allowFullScreen
      ></iframe>
    );
  };

  mod(index, length) {
    return ((index % length) + length) % length;
  }
  render() {
    return this.state.videoIds.length === 0 ? (
      <React.Fragment />
    ) : (
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <div className="gridRow">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{ justifyContent: "flex-start", color: "white" }}
                onClick={() =>
                  this.handleClick(
                    this.mod(
                      this.state.activeIndex - 1,
                      this.state.videoIds.length
                    )
                  )
                }
              >
                <i className={`fa fa-chevron-left`} />
              </span>
            </div>
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              {this.renderActiveVid(
                this.state.videoIds,
                this.state.activeIndex
              )}
            </div>
            <div
              className="chevronRight"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{ justifyContent: "flex-start", color: "white" }}
                onClick={() =>
                  this.handleClick(
                    (this.state.activeIndex + 1) % this.state.videoIds.length
                  )
                }
              >
                <i className={`fa fa-chevron-right`} />
              </span>
            </div>
          </div>
          <div
            className="row"
            style={{
              justifyContent: "left",
            }}
          >
            {this.renderVidThumbnail(this.state.videoIds)}
          </div>
        </div>
      </div>
    );
  }
}

export default Reel;
