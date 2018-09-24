import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getProjects } from "../selectors/projectsSelector";
import { getSingleProject } from "../selectors/projectsSelector";

class ProjectDetail extends Component {
  componentDidMount = () => {
    this.props.getProjectId(this.props.match.params.projectid);
  };

  render() {
    const { project } = this.props;
    console.log("project", project);

    return (
      <div>
        <h4>ProjectDetail Component Working</h4>
        {this.props.match.params.projectid}
        <div>
          <h1>{this.props.match.params.projectid}</h1>
        </div>
      </div>
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
