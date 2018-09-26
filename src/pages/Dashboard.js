import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";

import * as actions from "../actions";
import {
  getTopProjects,
  getLabelFilterProjects
} from "../selectors/projectsSelector";
import ProjectsList from "../components/ProjectsList";

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 5
  }
});

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.fetchIssues();
  };

  render() {
    const { projects, classes } = this.props;
    console.log("Dashboard", this.props.projects);
    // console.log(process.env.NODE_ENV);
    return (
      <div className={classes.root}>
        <ProjectsList projects={projects} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // projects: getLabelFilterProjects(state)
    projects: getTopProjects(state)
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actions
  )
)(Dashboard);
