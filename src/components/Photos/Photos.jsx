import "./Photos.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import { Component } from "react";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: this.importAll(
        require.context("../../resources/Gallery", false, /\.(png|jpe?g|svg)$/)
      ),
    };
  }

  importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  renderImgs = () => {
    let rv = [];
    Object.keys(this.state.images).forEach((img, i) => {
      rv.push(
        <Carousel.Item key={i}>
          <a
            href={`${this.state.images[img]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d-block"
              src={this.state.images[img]}
              alt="First slide"
            />
          </a>
        </Carousel.Item>
      );
    });
    return rv;
  };
  mod(index, length) {
    return ((index % length) + length) % length;
  }

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };
  render() {
    return (
      <React.Fragment>
        <div className="grid">
          <div
            className="chevronLeft"
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
                    Object.keys(this.state.images).length
                  )
                )
              }
            >
              <i className={`fa fa-chevron-left`} />
            </span>
          </div>
          <Carousel
            activeIndex={this.state.activeIndex}
            controls={false}
            interval={7000}
            onSelect={(e) => this.setState({ activeIndex: e })}
            className="carousel-inner"
          >
            {this.renderImgs(this.images)}
          </Carousel>
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
                  this.mod(
                    this.state.activeIndex + 1,
                    Object.keys(this.state.images).length
                  )
                )
              }
            >
              <i className={`fa fa-chevron-right`} />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Photos;
