import React from "react";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Reel from "./components/Reel/Reel";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import NavBar from "./components/Nav/NavBar";

const App = (props) => {
  return (
    <HashRouter basename="/">
      <React.Fragment>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <NavBar />

        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/reel" component={Reel} />
            <Route path="/photos" component={Photos} />
            <Route path="/music" component={Music} />
          </div>
        </div>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
