import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import * as actions from "../actions";
import { getSingleProject } from "../selectors/projectsSelector";
import Sprints from "../components/Sprints";
import ProjectInfo from "../components/ProjectInfo";

class ProjectDetail extends Component {
  componentDidMount = () => {
    this.props.fetchIssues();
    this.props.getProjectId(this.props.match.params.projectid);
  };

  render() {
    const { project } = this.props;
    console.log("PrpojectDetail props", this.props);

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Sprints project={project} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ProjectInfo project={project} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: getSingleProject(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(ProjectDetail);

// export default ProjectDetail;

//this.props.match.params.projectid
