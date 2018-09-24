import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Sprints extends Component {
  render() {
    if (!this.props.project[0]) {
      return <div>...loading</div>;
    }
    const project = this.props.project[0];

    console.log("project from Sprints", project);
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p>{project.currentSprint}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p>{project.nextStep}</p>
        </Grid>
      </Grid>
    );
  }
}

export default Sprints;
