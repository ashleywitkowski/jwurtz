import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    <Router>
        <div className="row">
            <Route exact path="/index.html" component={Home} />
        </div>
    </Router>
  );
};

export default App;
