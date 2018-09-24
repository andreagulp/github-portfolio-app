import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SprintCard from "./SprintCard";

class Sprints extends Component {
  render() {
    if (!this.props.project[0]) {
      return <div>...loading</div>;
    }
    const project = this.props.project[0];

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SprintCard title="Current Sprint" sprint={project.currentSprint} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SprintCard title="Next Sprint" sprint={project.nextStep} />
        </Grid>
      </Grid>
    );
  }
}

export default Sprints;
