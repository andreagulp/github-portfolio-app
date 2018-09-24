import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";

class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Grid container spacing={24}>
        {projects.map(project => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default ProjectsList;
