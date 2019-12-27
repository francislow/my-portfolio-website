import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage.js";
import ProjectItemPage from "./ProjectItemPage.js";

import "./app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/project-item/:key" component={ProjectItemPage} />
      </Switch>
    </Router>
  );
}

export default App;
