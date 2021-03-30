import React from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar className="navBar">
      <div className="container-fluid">
        {/* <Nav
        // className={`navigation ${getClassName(props.location.pathname)}`}
        style={{ textAlign: "center", fontSize: 25 }}
      > */}
        <NavLink exact to="/" className="nav-link">
          <div className="menu-item">
            <i className="fa fa-home"></i> Home
          </div>
        </NavLink>

        <NavLink to="/about" className="nav-link">
          <div className="menu-item">
            <i className="fa fa-address-card"></i> About
          </div>
        </NavLink>

        <NavLink to="/reel" className="nav-link">
          <div className="menu-item">
            <i className="fa fa-video"></i> Reel
          </div>
        </NavLink>

        <NavLink to="/music" className="nav-link">
          <div className="menu-item">
            <i className="fa fa-music"></i> Music
          </div>
        </NavLink>

        <NavLink to="/photos" className="nav-link">
          <div className="menu-item">
            <i className="fa fa-camera-retro"></i> Photos
          </div>
        </NavLink>
        {/* </Nav> */}
      </div>
    </Navbar>
  );
};

// export default withRouter(NavBar);
export default NavBar;
