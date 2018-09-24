import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getProjects } from "../selectors/projectsSelector";
// import { getSingleProjects } from "../selectors/projectsSelector";

class ProjectDetail extends Component {
  componentDidMount = () => {
    // this.props.getProjectId(this.props.match.params.projectid);
    this.props.getSingleProject(this.props.match.params.projectid);
  };

  render() {
    console.log("this.props.project", this.props.project);
    const { projectId, project } = this.props;
    return (
      <div>
        <h4>ProjectDetail Component Working</h4>
        {this.props.match.params.projectid}
        <div>
          <h1>{projectId}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectId: state.projectId,
    project: getProjects(state)
  };
};

export default connect(
  mapStateToProps,
  actions
)(ProjectDetail);

// export default ProjectDetail;

//this.props.match.params.projectid
