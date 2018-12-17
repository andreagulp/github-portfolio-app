import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import ProjectDetail from "./pages/ProjectDetail";
import TestPage from "./pages/TestPage";
import Metrics from "./pages/Metrics";

class App extends Component {
  render() {
    return (
      <div style={{ margin: "5px" }}>
        <Header />
        <Navigation />

        <Switch>
          <Route path="/metrics" component={Metrics} />
          <Route path="/testpage" component={TestPage} />
          <Route path="/:projectid" component={ProjectDetail} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
